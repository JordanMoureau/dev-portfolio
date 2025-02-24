export default function Footer() {
  return (
    <footer className="ml-3 py-6 text-left border-t border-accent px-10">
      <p className="text-lg text-accent">
        This project was a build & design, created by me with{" "}
        <a
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent opacity-50 hover:opacity-75 transition-opacity"
        >
          React
        </a>
        ,{" "}
        <a
          href="https://tailwindcss.com/docs/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent opacity-50 hover:opacity-75 transition-opacity"
        >
          Tailwind
        </a>
        ,{" "}
        <a
          href="https://www.framer.com/motion/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent opacity-50 hover:opacity-75 transition-opacity"
        >
          Framer Motion
        </a>
        ,{" "}
        <a
          href="https://formspree.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent opacity-50 hover:opacity-75 transition-opacity"
        >
          FormSpree
        </a>{" "}
        and deployed with{" "}
        <a
          href="https://www.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent opacity-50 hover:opacity-75 transition-opacity"
        >
          Netlify
        </a>
        .
      </p>
      <p className="text-lg mt-5  text-sm text-accent">
        Also reach me at{" "}
        <a
          href="mailto:jordan@freelancejordan.com"
          className="text-accent font-bold hover:underline"
        >
          jordan@freelancejordan.com
        </a>
      </p>
    </footer>
  );
}
