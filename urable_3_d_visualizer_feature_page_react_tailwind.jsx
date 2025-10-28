import   React from "react";

const manufacturers = [
  { name: "STEK", src: "/assets/logos/stek.svg" },
  { name: "3M", src: "/assets/logos/3m.svg" },
  { name: "Avery Dennison", src: "/assets/logos/avery-dennison.svg" },
  { name: "XPEL", src: "/assets/logos/xpel.svg" },
];

const highlights = [
  {
    title: "Real 3D model of *their* car",
    desc: "No more guessing with a generic silhouette. Pull in VIN/trim-correct geometry so customers see exactly what they'll drive home.",
    icon: <img src="/assets/icons/car.svg" alt="Car Icon" className="h-6 w-6 text-emerald-400" />,
  },
  {
    title: "Manufacturer-accurate colors",
    desc: "Browse official color libraries from STEK, 3M, Avery Dennison, and XPEL. Apply films with true-to-life materials and reflectance.",
    icon: <img src="/assets/icons/palette.svg" alt="Palette Icon" className="h-6 w-6 text-emerald-400" />,
  },
  {
    title: "Any environment, any light",
    desc: "Urban neon. Rural dusk. Showroom sun. Instantly switch scenes and lighting to see how film behaves in the real world.",
    icon: <img src="/assets/icons/light.svg" alt="Light Icon" className="h-6 w-6 text-emerald-400" />,
  },
  {
    title: "Proposal & Virtual Shop ready",
    desc: "Drop renders into quotes, proposals, and your Virtual Shop with a click. Sell the look, not just the line item.",
    icon: <img src="/assets/icons/proposal.svg" alt="Proposal Icon" className="h-6 w-6 text-emerald-400" />,
  },
];

export default function VisualizerFeaturePage() {
  return (
    <div className="bg-neutral-950 text-neutral-100">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none opacity-40" aria-hidden>
          <div className="absolute -top-24 -left-24 h-[40rem] w-[40rem] rounded-full bg-emerald-500 blur-3xl opacity-10"/>
          <div className="absolute -bottom-24 -right-24 h-[40rem] w-[40rem] rounded-full bg-sky-500 blur-3xl opacity-10"/>
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-12 lg:flex lg:items-center lg:gap-16 lg:pt-28">
          <div className="max-w-2xl">
            <img src="/assets/urable-logo-mint.svg" alt="Urable Logo" className="h-8 mb-6" />
            <h1 className="text-5xl font-semibold leading-tight sm:text-6xl">
              The Urable 3D Visualizer
              <span className="block text-emerald-400">See it before you wrap it.</span>
            </h1>
            <p className="mt-6 text-neutral-300 text-lg">
              A photoreal, German-engineered visualizer that shows your customer their exact car, with the exact film and color, in any environment. Turn indecision into excitement — and quotes into bookings.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/demo" className="rounded-2xl bg-emerald-500 px-5 py-3 font-medium text-black hover:bg-emerald-400 transition">Book a Demo</a>
              <a href="/3d-visualizer" className="rounded-2xl border border-neutral-700 px-5 py-3 font-medium hover:border-neutral-500 transition">Try the Visualizer</a>
            </div>
            <p className="mt-4 text-sm text-neutral-400">Embed renders directly into proposals, quotes, and your Virtual Shop.</p>
          </div>
          <div className="relative mt-12 lg:mt-0 lg:flex-1">
            <img src="/assets/3d-visualizer-preview.png" alt="Urable 3D Visualizer Screenshot" className="w-full rounded-3xl shadow-2xl border border-neutral-800" />
          </div>
        </div>
      </section>

      {/* MANUFACTURERS */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900/50 p-6">
          <p className="text-center text-sm text-neutral-400">Compatible with leading film & vinyl manufacturers</p>
          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {manufacturers.map((m) => (
              <div key={m.name} className="flex items-center justify-center rounded-2xl bg-neutral-950 border border-neutral-800 p-6">
                <img src={m.src} alt={m.name} className="h-8 opacity-80" />
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-neutral-500">All trademarks are property of their respective owners. Availability may vary.</p>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.title} className="rounded-3xl border border-neutral-800 bg-neutral-900/50 p-6">
              <div className="text-emerald-400">{h.icon}</div>
              <h3 className="mt-4 text-lg font-semibold" dangerouslySetInnerHTML={{ __html: h.title }} />
              <p className="mt-2 text-sm text-neutral-300">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-6 pb-24">
        <p className="text-xs text-neutral-500">Urable, the Urable logo, and Virtual Shop are trademarks of Abens Solutions LLC d/b/a Urable. © {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </div>
  );
}
