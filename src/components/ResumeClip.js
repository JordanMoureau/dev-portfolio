export default function ResumeClip() {
  return (
    <section className="py-12 m-5 scroll-mt-[40px]" id="bio">
      <h2 className="text-3xl font-bold">About the Dev</h2>
      <p className="mb-6 font-bold">The highlight reel</p>
      <ul className="space-y-4 mb-4">
        {/* 🔥 Short Bio */}
        <li className="p-6 text-left pb-10 border-b border-accent relative">
          <h3 className="text-xl font-bold">✌🏻 Full-Stack Software Engineer</h3>
          <p className="mt-2">
            I specialize in building vibey, high-performing web apps with a
            front-end focus and back-end power. From React UI to Rails APIs, I
            love making things fast and intuitive in the simplest way possible.
          </p>
        </li>

        {/* 🛠️ Experience */}
        <li className="p-6 text-left pb-10 border-b border-accent relative">
          <h3 className="text-xl font-bold">✨ Experience</h3>

          <div className="mt-4">
            <h4 className="text-lg font-semibold">Freelance Developer</h4>
            <p className="mt-2">
              Designed & developed marketing focused front-end websites that
              pull leads in a big way. Built marketing funnels that skyrocketed
              engagement by 600%. Custom Wordpress Templates in under a week.
            </p>
          </div>
        </li>

        <li className="p-6 text-left pb-10 border-b border-accent relative">
          <h3 className="text-xl font-bold">🎓 Education</h3>

          <div className="mt-4">
            <h4 className="text-lg font-semibold">
              Self-Taught Full-Stack Developer
            </h4>
            <p className="mt-2">
              Mastered React, Rails, Tailwind & more through hands-on builds.
              Reverse-engineered sites & built real-world apps instead of just
              tutorials. Constantly learning—because tech never stops.
            </p>
          </div>

          <div className="mt-4">
            <h4 className="text-lg font-semibold">
              Went to School for Graphic Design
            </h4>
            <p className="mt-2">
              Mastered Adobe Creative Suite. Learned web design & mastered
              tenants of design. Discovered passion for software engineering.
            </p>
          </div>
        </li>
      </ul>{" "}
      {/* ✅ FIX: Properly closing the unordered list before the button */}
      <a
        href="/JordanResume.pdf"
        download="Jordan-Moureau-Resume.pdf"
        className="hover:underline font-bold"
      >
        Download Full Resume →
      </a>
    </section>
  );
}
