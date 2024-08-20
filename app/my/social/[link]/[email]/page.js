"use client";

// app/social/[link]/[email]/page.js
import { useEffect } from "react";

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

      // Redirect to the appropriate social media site
      if (link === "facebook") {
        window.location.href = "https://www.facebook.com";
      } else if (link === "youtube") {
        window.location.href = "https://www.youtube.com";
      } else {
        console.error("Unknown social media link");
      }
    };

    redirectToSocial();
  }, [link, email]);

  return <div>Redirecting...</div>;
}
