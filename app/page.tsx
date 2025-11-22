import FeatureProperties from "./components/FeatureProperties";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <main>
      <Hero />
      <FeatureProperties />
      </main>
    </div>
  );
}
