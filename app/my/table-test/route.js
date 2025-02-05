// import { sql } from "@vercel/postgres";
import { neon } from '@neondatabase/serverless';

import { NextResponse } from "next/server";

export async function GET(req) {
  const psql = neon(`${process.env.DATABASE_URL}`);

  // Check if the table exists
  const tableCheck = await psql`
    SELECT * FROM image;
  `;

  // Check the search_path
  const searchPath = await psql`
    SHOW search_path;
  `;

  // Check the table structure
  const tableDescription = await psql`
    SELECT column_name, data_type 
  FROM information_schema.columns 
  WHERE table_name = 'image';
  `;

  // Inserting data into the table (if needed)
 const tableInsert = await psql`
    INSERT INTO image (image, email, campId, date) 
    VALUES ('test-product', 'test@example.com', '123', NOW());
  `;

  console.log(tableCheck, searchPath, tableDescription);

  return NextResponse.json({ tableCheck, searchPath, tableDescription, tableInsert }, { status: 200 });
}
