import React from 'react';
import Layout from '@theme/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import OurWork from '../components/OurWork';
import HowWeWork from '../components/HowWeWork';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="Sustainability Consulting"
      description="Versity helps organisations make better decisions for climate, waste, and resource efficiency in New Zealand."
    >
      <main>
        <Hero />
        <Services />
        <OurWork />
        <HowWeWork />
        <About />
        <Contact />
      </main>
    </Layout>
  );
}
