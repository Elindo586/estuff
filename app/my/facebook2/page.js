"use client";

// app/social/[link]/[email]/page.js
import { useEffect } from "react";

export default function SocialPage() {
  useEffect(() => {
    const redirectToSocial = async () => {
      const data = "facebook";

      // Send the email notification
      await fetch("/facebooktrack", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      });

      // Redirect to the appropriate social media site

      window.location.href = "https://www.facebook.com";
    };

    redirectToSocial();
  }, []);

  return <div>Redirecting...</div>;
}
