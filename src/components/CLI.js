export default function CLI({ isPartyMode }) {
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
        <p>Download Resume</p>
      </div>
    </>
  );
}
