import { motion } from "framer-motion";
import freej from "../media/freej.mov";
import shn from "../media/shn.mov";
import pokemath from "../media/pokemath.mov";
import strategic from "../media/strategic.mov";
import spotify from "../media/spotify.mov";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Freelance Jordan | Artist Portfolio",
      description:
        "A classic, front-end portfolio designed to showcase my work, my vibe, and the kind of web projects I build as a freelancer.",
      stack: ["React", "Vercel", "Next JS", "Form Spree", "Framer Motion"],
      video: freej,
      github: "https://github.com/JordanMoureau/freej-web",
      live: "https://freelancejordan.com",
    },
    {
      title: "Spokane Helpers | A Custom CMS System",
      description:
        "A custom-built CMS MVP for a local charity, designed to streamline content updates and improve community outreach. Currently in progress.",
      stack: ["React", "Rails", "Tailwind", "Netlify", "Heroku"],
      video: shn,
      github: "https://github.com/JordanMoureau/spokane-helpers-front-end",
      live: "https://z7g9u3.netlify.app/",
    },
    {
      title: "PokeMath | A React Web App Math Game",
      description:
        "A Pokémon-themed math game designed to make learning fun—solve equations, evolve your Pokémon, and train your brain!",
      stack: ["React", "Netlify"],
      video: pokemath,
      github: "https://github.com/JordanMoureau/poke-math",
      live: "https://pokemath.netlify.app/",
    },
    {
      title: "Strategic Flow | A Front-End",
      description:
        "An SEO-driven front-end crafted for a coaching business—designed for engagement, visibility, and client connections.",
      stack: ["React", "Netlify", "React Helmet", "Email.Js", "Framer Motion"],
      video: strategic,
      github: "https://github.com/JordanMoureau/strategic-flow",
      live: "https://strategicflow.net/",
    },
    {
      title: "The Spotify API | Playlist Project",
      description:
        "A throwback-inspired Spotify playlist builder—search for songs, create playlists, and save them directly to your account.",
      stack: ["React", "The Spotify API", "Netlify"],
      video: spotify,
      github: "https://github.com/JordanMoureau/retro-playlist",
      live: "https://retro-playlist.netlify.app/",
    },
  ];

  return (
    <section className="py-12 w-full scroll-mt-[40px]" id="projects">
      <h2 className="text-3xl font-bold">Projects</h2>
      <p className="mb-6">
        Recent & notable projects I have designed and built
      </p>

      <div className="w-full flex flex-col gap-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative p-3 m-3 shadow-md flex flex-row items-center justify-center rounded-lg bg-tertiary text-accent bg-opacity-30 hover:bg-opacity-50 group transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            {/* Hover Video Preview */}
            <div className="ml-3 w-1/2 h-3/4 rounded-md overflow-hidden group-hover:shadow-md object-cover">
              <motion.video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="object-cover group-hover:opacity-100 opacity-50"
              />
            </div>

            <div className="flex flex-col w-full items-center justify-center p-5">
              {/* Project Title & Description */}
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>

              {/* GitHub & Live Links */}
              <div className="mt-4 font-bold flex gap-4 ">
                <a
                  href={project.github}
                  className="font-bold hover:bg-tertiary"
                >
                  GitHub
                </a>
                /
                <a href={project.live} className="font-bold hover:bg-tertiary">
                  Live Site
                </a>
              </div>

              {/* Tech Stack Bubbles */}
              <div className="mt-4 flex flex-wrap justify-center align-center gap-2">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-secondary group-hover:bg-tertiary text-white text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔥 Current Projects Section */}
      <CurrentProjects />
    </section>
  );
}

// ✅ New Component Inside ProjectsSection
function CurrentProjects() {
  const currentProjects = [
    {
      title: "Trader Joe's Themed Dating App | A Rails iOS app",
      description:
        "A niche dating app to expand my knowledge of react native and give my fellow trader joe's lovers a place to connect. Preferably not get sued, but hey you only live once right?",
      stack: [
        "Rails",
        "React Native",
        "Expo",
        "Firebase",
        "Socket.IO",
        "Redux Toolkit",
      ],
    },

    {
      title: "Godzilla Learns Python | A Gamified Learning Experience",
      description:
        "An interactive learning game teaching Python basics with a monstrous twist—React-powered and built for fun.",
      stack: ["React", "Next.js", "Vercel", "Custom Hooks", "Framer Motion"],
    },
  ];

  return (
    <section className="py-12 px-3">
      <h2 className="text-2xl font-bold">Current Projects</h2>
      <p className="mb-6">Ongoing builds I'm actively developing.</p>

      <div className="w-full flex flex-col gap-4">
        {currentProjects.map((project, index) => (
          <motion.div
            key={index}
            className="relative p-4 shadow-md rounded-lg bg-secondary text-accent bg-opacity-30 hover:bg-opacity-50 group transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>

            {/* Tech Stack Bubbles */}
            <div className="mt-4 flex flex-wrap justify-center align-center gap-2">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-tertiary group-hover:bg-secondary text-white text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
