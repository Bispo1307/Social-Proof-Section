import { Hero } from "./components/Hero";
import { Testimonials } from "./components/Testimonials";

export const App = () => {
  return (
    <main className="w-full min-h-screen">
      <div className="max-w-7xl mx-auto px-6 my-16 sm:my-28 space-y-14 sm:space-y-20">
        <Hero />
        <Testimonials />
      </div>
    </main>
  );
};
