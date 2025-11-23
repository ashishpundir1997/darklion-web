import Client from "./components/Client";
import FeatureProperties from "./components/FeatureProperties";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <div style={{ minHeight: '100vh' }} className="bg-[#141414]">
      <Navbar />
      <main>
      <Hero />
      <FeatureProperties />
      <Client />
      </main>
    </div>
  );
}
