import { useEffect, useState } from "react";

export default function Hero() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const fadePoint = 300;
      const newOpacity = Math.max(0, 1 - window.scrollY / fadePoint);
      setOpacity(newOpacity);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="relative h-screen w-full flex items-center justify-center text-white"
      style={{ opacity }}
    >
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/bg-video.mp4"
      />
      <div className="relative text-center z-10">
        <h2 className="text-3xl italic">Your style</h2>
        <p className="text-xl mt-2">curated by AI</p>

        <button className="mt-6 px-6 py-2 rounded-full bg-black/60 hover:bg-black">
          Take a look →
        </button>
      </div>
    </section>
  );
}
