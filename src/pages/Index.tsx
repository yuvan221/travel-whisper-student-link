
import Layout from "@/components/Layout";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import ServiceOptions from "@/components/home/ServiceOptions";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
      <ServiceOptions />
      <Features />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
};

export default Index;
