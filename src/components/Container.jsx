import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";
import { FACEBOOK_MAX_CHARACTERS, INSTAGRAM_MAX_CHARACTERS } from "../lib/constants";

export default function Container() {
  const [text, setText] = useState("");

  const numberOfWords = text.split(" ").filter((word) => word !== "").length;
  const numberOfCharacters = text.length;
  const instagramCharactersLeft = INSTAGRAM_MAX_CHARACTERS - text.length;
  const facebookCharactersLeft = FACEBOOK_MAX_CHARACTERS - text.length;

  const stats = {
    numberOfWords,
    numberOfCharacters,
    instagramCharactersLeft,
    facebookCharactersLeft,
  }

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats
        stats={stats}
      />
    </main>
  );
}
