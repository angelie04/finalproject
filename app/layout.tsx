// Header, nav, and footer
import Link from 'next/link';
import React from "react";
import "./globals.css"; // styling for nav, footer, header for every page

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body>
      <nav>
        <Link id="nav-home" href="/">Home</Link>
        <Link id="nav-memegallery" href="/memegallery">All Memes</Link>
        <Link id="nav-about" href="/about">About Us</Link>
      </nav>

      <h1><Link id="nav-home" href="/">Meme Generator</Link></h1>

      {/*where the page.tsx files for about, memegallery, and randommeme will be */}
      <main>{children}</main>

      <footer>
          <p><strong>Created by:</strong> Angelie Darbouze, Michael Chu, Chelsea Nnanyanzi, and George Audi <Link href="">Credits</Link> &#169;</p>
      </footer>
      </body>
      </html>
  );
}