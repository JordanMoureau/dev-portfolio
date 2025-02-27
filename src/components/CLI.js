import { usePartyMode } from "../context/PartyModeContext"; // Import the context

export default function CLI() {
  const { isPartyMode } = usePartyMode(); // Get isPartyMode from context

  return (
    <>
      {/* Vertical Indicator for CLI */}
      <div
        className={` ${
          isPartyMode
            ? "text-white border-white"
            : " text-tertiary  border-tertiary"
        } fixed vertical-text mx-3  my-5 py-3 origin-right left-0 top-0 bottom-0 flex justify-between tracking-wide uppercase border-r pr-2`}
      >
        <p> Try Command + J</p>
        <a href="/JordanResume.pdf" download="Jordan-Moureau-Resume.pdf">
          Download Resume
        </a>
      </div>
    </>
  );
}
