import Navbar from "@/component/Navigation/navbar.js";
import AboutPage from "./(main)/About/page.js";
import BlogPage from "./(main)/Blog/page.js";
import ContactPage from "./(main)/Contact/page.js";
import HomePage from "./(main)/Home/page.js";
import ProjectPage from "./(main)/Projects/page.js";
import SkillsPage from "./(main)/skills/page.js";
import Footer from "@/component/Navigation/footer.js";


export default function Home() {
  return (
    <>
    <Navbar/>
    <main className="flex flex-col">
      <section className="min-h-screen w-full py-12 lg:py-24">
        <HomePage />
      </section>
      <section className="min-h-screen w-full py-12 lg:py-24">
        <AboutPage />
      </section>
      <section className="min-h-screen w-full py-12 lg:py-24">
        <SkillsPage />
      </section>
      <section className="min-h-screen w-full py-12 lg:py-24">
        <ProjectPage />
      </section>
      <section className="min-h-screen w-full py-12 lg:py-24">
        <BlogPage />
      </section>
      <section className="min-h-screen w-full py-12 lg:py-24">
        <ContactPage />
      </section>
    </main>
    <Footer/>
    </>
  );
}
