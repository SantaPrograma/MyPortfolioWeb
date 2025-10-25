import CoverParticles from "@/components/cover-particles";
import TransitionPage from "@/components/transition-page";
import Introduction from "@/components/introduction";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-cover">
      
      <div className="absolute inset-0 z-0">
        <CoverParticles/>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row min-h-screen">
        <TransitionPage/>
        <Introduction/>
      </div>

    </main>
  );
}