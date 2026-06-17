import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import Blogs from "@/components/home/Blogs";
import ContactCTA from "@/components/home/ContactCTA";
import SocialSidebar from "@/components/common/SocialSidebar";
import Footer from "@/components/layout/Footer";
import ClientOnly from "@/components/ClientOnly";

export default function Home() {
  return (
    <>
      <ClientOnly>
        <SocialSidebar />
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <FeaturedProjects />
          <WhyChooseUs />
          <Testimonials />
          <Blogs />
          <section id="contact-cta">
            <ContactCTA />
          </section>
          <Footer />
        </main>
      </ClientOnly>
    </>
  );
}
