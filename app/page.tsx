//Angelie Darbouze; Made random meme the home page and all the other pages are called/created from components directory
// and their own page.tsx files (similar to this file here)

// Random meme is the landing/home page
import RandomMeme from "@/components/RandomMeme";
export default function Random() {
  return (
      <main>
        <RandomMeme />
      </main>
  );
}
