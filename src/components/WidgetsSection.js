import ContactMe from "./ContactMe";
import MediumArticles from "./MediumArticles";
import ProjectsSection from "./Projects";
import SkillsSection from "./Skills";
import Footer from "./Footer";
import ResumeClip from "./ResumeClip";

export default function WidgetsSection() {
  return (
    <div className="md:w-1/2 ml-10 flex flex-col text-accent  items-center py-10 px-2 text-center overflow-scroll md:h-screen h-auto">
      <ResumeClip />
      <SkillsSection />
      <ProjectsSection />
      <MediumArticles />
      <ContactMe />
      <Footer />
    </div>
  );
}
