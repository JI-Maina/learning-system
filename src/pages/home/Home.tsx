import About from "@components/home/About";
import Hero from "@components/home/Hero";
import PopularCourses from "@components/home/PopularCourses";
import Whyus from "@components/home/Whyus";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Whyus />
      <About />
      <PopularCourses />
      {/* <CallToAction /> */}
      {/* <Partners /> */}
      {/* <Testimonial /> */}
    </main>
  );
}
