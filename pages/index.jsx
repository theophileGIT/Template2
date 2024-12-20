import { useEffect } from "react";
import { NextSeo } from 'next-seo';
import { calculateAge } from "@/utils/functions";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import Hero from "@/sections/hero";
import Projects from "@/sections/projects";
import GattacaMarquee from "@/components/gattacaMarquee";
import Footer from "@/components/footer";
import Header from "@/components/header";

MouseFollower.registerGSAP(gsap);

const Index = () => {
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const cursor = new MouseFollower({
      stateDetection: {
        '-pointer': 'a, button, .theme, .project'
      }
    });
  }, []);

  return (
    <>
      <NextSeo
          title={`Template2 `}
        
      />
      <Header />
      <Hero />
      <Projects />
      <GattacaMarquee />
      <Footer />
    </>
  );
};

export default Index;
