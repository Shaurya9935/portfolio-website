import AboutPage from "./(main)/About/page.js";
import BlogPage from "./(main)/Blog/page.js";
import ContactPage from "./(main)/Contact/page.js";
import HomePage from "./(main)/Home/page.js";
import ProjectPage from "./(main)/Projects/page.js";
import SkillsPage from "./(main)/skills/page.js";


export default function Home() {
  return (
    <div>
      <div className="h-screen">
      <HomePage/>
      </div>
      <div className="h-screen">
        <AboutPage/>
      </div>
      <div className="h-screen">
        <SkillsPage/>
      </div>
      <div className="h-screen">
        <ProjectPage/>
      </div>
      <div className="h-screen">
        <BlogPage/>
      </div>
      <div className="h-screen">
        <ContactPage/>
      </div>
      

    </div>
  );
}
