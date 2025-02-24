import { useState, useEffect } from "react";

export default function useEmojiRain(isActive) {
  const [emojis, setEmojis] = useState([]);
  const [intensity, setIntensity] = useState(300); // Default emoji spawn speed

  useEffect(() => {
    if (!isActive) {
      setEmojis([]); // Clear emojis when Party Mode is OFF
      return;
    }

    // 🌧 Change rain intensity randomly over time
    const intensityInterval = setInterval(() => {
      const newIntensity = Math.random() * 100 + 100; // Random interval between 100ms - 500ms
      setIntensity(newIntensity);
    }, 5000); // Adjust intensity every 5 seconds

    // 🌟 Generate falling emojis at the current intensity
    const emojiInterval = setInterval(() => {
      setEmojis((prev) => [
        ...prev,
        {
          id: Math.random(),
          emoji: [
            "✨",
            "🚀",
            "☁️",
            "⚡️",
            "🫶🏻",
            "✨",
            "🙃",
            "✨",
            "👩🏻‍💻",
            "✨",
            "✨",
            "✌🏻",
            "✨",
            "😬",
            "✨",
            "🙂",
            "✨",
          ][Math.floor(Math.random() * 18)],
          left: `${Math.random() * 100}vw`,
          animationDuration: `${Math.random() * 3 + 2}s`, // Random fall speed
        },
      ]);
    }, intensity);

    return () => {
      clearInterval(emojiInterval);
      clearInterval(intensityInterval);
    };
  }, [isActive, intensity]);

  return emojis;
}
