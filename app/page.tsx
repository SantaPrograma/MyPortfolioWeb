import CoverParticles from "@/components/cover-particles";
import TransitionPage from "@/components/transition-page";
import Introduction from "@/components/introduction";

export default function Home() {
  return (
    <main>
      <TransitionPage/>
      <div className="flex flex-col md:flex-row min-h-screen h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles/>
        <Introduction/>
      </div>
    </main>
  );
}
