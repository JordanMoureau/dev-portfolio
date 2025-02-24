import { motion } from "framer-motion";

export default function SkillsSection() {
  const skills = [
    { name: "React", level: "85%", emoji: "✨" },
    { name: "JavaScript", level: "90%", emoji: "☁️" },
    { name: "Ruby on Rails", level: "65%", emoji: "🚀" },
    { name: "Tailwind CSS", level: "80%", emoji: "⚡️" },
    { name: "HTML & CSS", level: "95%", emoji: "✌🏻" },
  ];

  return (
    <section className="py-12 w-3/4 scroll-mt-[40px]" id="skills">
      <h2 className="text-3xl font-bold">Skills</h2>
      <p className="mb-6">Brief list of skills I've mastered</p>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col">
            <span className="font-semibold">{skill.name}</span>
            <div className="relative w-full shadow-sm bg-tertiary bg-opacity-50 h-5 rounded-full mt-1">
              {/* Progress Bar */}
              <motion.div
                className="bg-secondary h-5 rounded-full transition-all duration-700"
                style={{ width: skill.level }}
                initial={{ width: "0%" }} // Start hidden
                whileInView={{ width: skill.level }} // Expand to full width
                transition={{
                  duration: 0.8, // Speed of animation
                  ease: "easeOut", // Smooth transition
                  delay: index * 0.4, // Staggered effect per skill
                }}
                viewport={{ once: true }}
              ></motion.div>
              {/* Oversized Emoji at the end */}
              <motion.span
                className="absolute top-0 text-4xl neg-marg"
                style={{ left: skill.level }}
                initial={{ opacity: 1, x: -200 }} // Start off-screen
                whileInView={{ opacity: 1, x: -25 }} // Move into place
                transition={{
                  type: "spring",
                  stiffness: 150, // More bounce
                  damping: 6, // Less resistance
                  delay: index * 0.5,
                  duration: 1.2, // Controls bounce speed
                }}
                viewport={{ once: true }}
              >
                {skill.emoji}
              </motion.span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
