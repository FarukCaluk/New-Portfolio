import SmoothScroll  from "@/components/SmoothScroll";
import Header        from "@/components/layout/Header";
import Footer        from "@/components/layout/Footer";
import Hero          from "@/components/sections/Hero";
import Projects      from "@/components/sections/Projects";
import Education     from "@/components/sections/Education";
import Testimonials  from "@/components/sections/Testimonials";
import Services      from "@/components/sections/Services";
import Sports        from "@/components/sections/Sports";
import Contact       from "@/components/sections/Contact";

export default function Home() {
  return (
    <SmoothScroll>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Education />
        <Testimonials />
        <Services />
        <Sports />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
