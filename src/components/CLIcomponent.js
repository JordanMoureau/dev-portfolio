import { useState, useEffect, useRef } from "react";

export default function CLIcomponent({ isOpen, toggleCLI, togglePartyMode }) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    "Welcome to Jordan's CLI! Type 'help' to see available commands or try party mode.",
  ]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus(); // Auto-focus input when CLI opens
    }
  }, [isOpen]);

  const handleInput = (e) => {
    if (e.key === "Enter") {
      processCommand(input);
      setInput(""); // Clear input after submitting
    }
  };

  const processCommand = (cmd, togglePartyMode) => {
    let response;

    switch (cmd.toLowerCase()) {
      case "help":
        response =
          "Commands: help, about, skills, projects, hobbies, music, books, shows, movies, pets, contact, party";
        break;

      case "about":
        response = "Jordan. Full-stack dev. Builds cool things. Drinks boba.";
        break;

      case "skills":
        response = "React, Rails, Tailwind, JavaScript. UI magic & clean code.";
        break;

      case "projects":
        response =
          "Work → freelancejordan.com. Clean, fast, functional. Click things.";
        break;

      case "hobbies":
        response = "Lifting heavy. Hiking far. Anime binges. Pork buns. 🚀";
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
          "A Discovery of Witches. Early Teen Wolf. Anime with good worldbuilding.";
        break;

      case "movies":
        response = "Daddy's Home. It Ends With Us. Emma (the 2020).";
        break;

      case "pets":
        response = "Frigga. Best dog. Large. Sleepy. Anything for snacks.";
        break;

      case "party mode":
        response = "🔥 PARTY MODE: ON. Brace for impact. 🔥";
        togglePartyMode();
        break;

      default:
        response =
          "Command not found: `${cmd}`. Type 'help' for available commands.";
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
