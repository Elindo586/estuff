"use client";

// app/social/[link]/[email]/page.js
import { useEffect } from "react";

export const maxDuration = 10; // This function can run for a maximum of 10 seconds
export const dynamic = "force-dynamic";

export default function SocialPage({ params }) {
  const { link, email } = params;

  useEffect(() => {
    const redirectToSocial = async () => {
      // Send the email notification
      await fetch("/trackclick", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ social: link, email }),
      });

      // Wait for 5 seconds before redirecting
      setTimeout(() => {
        // Redirect to the appropriate social media site
        if (link === "facebook") {
          window.location.href = "https://www.facebook.com";
        } else if (link === "youtube") {
          window.location.href = "https://www.youtube.com";
        } else {
          window.location.href = "https://www.linkedin.com";
        }
      }, 5000); // 5000 milliseconds = 5 seconds
    };

    redirectToSocial();
  }, [link, email]);

  return <div>Redirecting...</div>;
}
