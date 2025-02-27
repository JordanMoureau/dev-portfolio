import { useState, useEffect, useRef } from "react";
import { usePartyMode } from "../context/PartyModeContext"; // Import the context

export default function CLIcomponent({ isOpen, toggleCLI }) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    "Welcome to Jordan's CLI! Type 'help' to see available commands or try party mode.",
  ]);
  const inputRef = useRef(null);

  // Use Party Mode from context
  const { isPartyMode, togglePartyMode } = usePartyMode();

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus(); // Auto-focus input when CLI opens
    }
  }, [isOpen]);

  const handleInput = (e) => {
    if (e.key === "Enter") {
      processCommand(input); // No need to pass togglePartyMode anymore
      setInput(""); // Clear input after submitting
    }
  };

  const processCommand = (cmd) => {
    let response;

    switch (cmd.toLowerCase()) {
      case "help":
        response =
          "Commands: help, about, skills, projects, hobbies, music, books, shows, movies, pets, contact, party mode, pickles?";
        break;

      case "about":
        response = "Jordan. Full-stack dev. Builds cool things. Drinks boba.";
        break;

      case "skills":
        response = "React, Rails, Tailwind, JavaScript.";
        break;

      case "projects":
        response =
          "Work → freelancejordan.com. Clean, fast, functional. Click things!";
        break;

      case "pickles?":
        response = "error... errrooorrrr ERROR. Never question the pickles.";
        break;

      case "hobbies":
        response =
          "Lifting heavy. Hiking far. Tv show binges. Tea (yes, the way I drink it, it is a hobby.). Pork buns. 🚀";
        break;

      case "music":
        response = "Agnes Obel, Hozier, Amber Run, Chainsmokers.";
        break;

      case "books":
        response =
          "Fantasy. Diana Wynne Jones, Neil Gaiman, Garth Nix. Magic or why.";
        break;

      case "shows":
        response =
          "A Discovery of Witches. Early Teen Wolf. The Lady Jane. Anime with good worldbuilding.";
        break;

      case "movies":
        response =
          "Daddy's Home. It Ends With Us. Emma (the 2020). Kingsmen. Bridget Jones 4 Lyfe.";
        break;

      case "pets":
        response = "Frigga. Best dog. Large. Sleepy. Anything for snacks.";
        break;

      case "party mode":
        response = isPartyMode
          ? "Easy there. Party Mode is already on. "
          : "🔥 The party has arrived. Brace for impact. 🔥";
        togglePartyMode(); // Trigger Party Mode globally
        break;

      default:
        response = `Command not found: '${cmd}'. Type 'help' for available commands.`;
    }

    setHistory((prev) => [...prev, `> ${cmd}`, response]);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full w-1/3 max-w-md bg-black text-primary-400 p-4 font-mono shadow-lg transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex">
        <span className="text-primary-400">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleInput}
          className="bg-transparent border-none focus:outline-none text-primary-400 w-full ml-2"
        />
      </div>
      <div className="overflow-auto h-full">
        {history.map((line, index) => (
          <p key={index} className="mb-1">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
