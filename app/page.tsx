import SmoothScroll  from "@/components/SmoothScroll";
import Header        from "@/components/layout/Header";
import Footer        from "@/components/layout/Footer";
import Hero          from "@/components/sections/Hero";
import Education     from "@/components/sections/Education";
import Sports        from "@/components/sections/Sports";
import Services      from "@/components/sections/Services";
import Projects      from "@/components/sections/Projects";
import Testimonials  from "@/components/sections/Testimonials";
import Contact       from "@/components/sections/Contact";

export default function Home() {
  return (
    <SmoothScroll>
      <Header />
      <main>
        <Hero />
        <Education />
        <Sports />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
