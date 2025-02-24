export default function Navigation() {
  return (
    <nav className=" mt-20 font-bold text-accent">
      <ul className="flex flex-wrap gap-5">
        <li className="  hover:bg-tertiary transition-all">
          <a href="#bio">#About</a>
        </li>
        <li className="  hover:bg-tertiary transition-all">
          <a href="#skills">#Skills</a>
        </li>
        <li className="  hover:bg-tertiary transition-all">
          <a href="#projects">#Projects</a>
        </li>
        <li className="  hover:bg-tertiary transition-all">
          <a href="#articles">#Articles</a>
        </li>
        <li className="  hover:bg-tertiary transition-all">
          <a href="#contact">#Contact</a>
        </li>
      </ul>
    </nav>
  );
}
