export default function ResumeClip() {
  return (
    <section className="py-12 m-5 scroll-mt-[40px]" id="bio">
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="mb-6 font-bold">The highlight reel</p>

      <ul className="space-y-4">
        {/* 🔥 Short Bio */}
        <li className="p-6 text-left pb-10 border-b border-accent relative">
          <h3 className="text-xl font-bold">
            Full-Stack Developer & Problem-Solver
          </h3>
          <p className="mt-2">
            I specialize in building sleek, high-performing web apps with a
            front-end focus and back-end power. From React UI magic to
            Rails-powered APIs, I love making things fast, intuitive, and
            elegant.
          </p>
        </li>

        {/* 🛠️ Experience */}
        <li className="p-6 text-left pb-10 border-b border-accent relative">
          <h3 className="text-xl font-bold">🛠️ Experience</h3>

          <div className="mt-4">
            <h4 className="text-lg font-semibold">Freelance Developer</h4>
            <p className="italic text-sm text-gray-400">Jan 2023 - Present</p>
            <p className="mt-2">
              - Designed & developed custom CMS platforms, high-speed e-commerce
              sites, & real-time apps. - Built marketing funnels that
              skyrocketed engagement by 600% - Created a Pokémon Math Game
              (still debating a Godzilla Mode 🦖)
            </p>
          </div>

          <div className="mt-4">
            <h4 className="text-lg font-semibold">Marketing & Web Strategy</h4>
            <p className="italic text-sm text-gray-400">2018 - 2022</p>
            <p className="mt-2">
              - Led SEO, ad strategy, & conversion optimization for startups &
              businesses. - Built & launched custom landing pages & automation
              funnels - Bridged marketing & development—because good marketing
              needs great tech.
            </p>
          </div>
        </li>

        {/* 🎓 Education */}
        <li className="p-6 text-left pb-10 border-b border-accent relative">
          <h3 className="text-xl font-bold">🎓 Education</h3>

          <div className="mt-4">
            <h4 className="text-lg font-semibold">
              Self-Taught Full-Stack Developer
            </h4>
            <p className="italic text-sm text-gray-400">Ongoing</p>
            <p className="mt-2">
              - Mastered React, Rails, Tailwind & more through hands-on builds.
              - Reverse-engineered sites & built real-world apps instead of just
              tutorials. - Constantly learning—because tech never stops
              evolving.
            </p>
          </div>

          {/* 🎭 University Degree (if applicable, adjust accordingly) */}
          <div className="mt-4">
            <h4 className="text-lg font-semibold">[Your Degree Here]</h4>
            <p className="italic text-sm text-gray-400">[Year]</p>
            <p className="mt-2">
              - *Insert witty remark about how this helped your dev journey.*
            </p>
          </div>
        </li>

        <button className="underline">Download Full Resume</button>
      </ul>
    </section>
  );
}
