import Client from "./components/sections/Client";
import Faq from "./components/sections/Faq";
import FeatureProperties from "./components/sections/FeatureProperties";
import Hero from "./components/sections/Hero";
import Navbar from "./components/layout/Navbar";


export default function Home() {
  return (
    <div style={{ minHeight: '100vh' }} className="bg-[#141414]">
      <Navbar />
      <main>
      <Hero />
      <FeatureProperties />
      <Client />
      <Faq />
      </main>
    </div>
  );
}
