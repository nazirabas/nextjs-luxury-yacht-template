import data from "../../data/yachts.json";
import { whatsappUrl } from "@/lib/whatsapp";

export default function Home() {
  const inquiry = whatsappUrl(data.brand.phone, `Hi ${data.brand.name}, I'd like to enquire about a charter.`);

  return (
    <main>
      <section
        className="relative min-h-[92vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(10,10,10,0.9) 100%), url(${data.hero.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-10 py-24">
          <p className="text-brand-gold uppercase tracking-[0.35em] text-xs mb-6">{data.hero.eyebrow}</p>
          <h1 className="serif text-5xl sm:text-7xl leading-[1.05] mb-6">{data.hero.heading}</h1>
          <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl mb-10">{data.hero.subheading}</p>
          <a
            href={inquiry}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black px-8 py-4 uppercase tracking-widest text-sm transition"
          >
            {data.hero.cta}
          </a>
        </div>
      </section>

      <section className="py-24 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-gold uppercase tracking-[0.35em] text-xs mb-4">The Fleet</p>
            <h2 className="serif text-4xl sm:text-5xl">Selected yachts</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {data.yachts.map((y) => (
              <article key={y.slug} className="group">
                <div
                  className="aspect-[4/3] mb-5 overflow-hidden bg-neutral-900"
                  style={{
                    backgroundImage: `url(${y.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <p className="text-brand-gold uppercase tracking-[0.3em] text-[10px] mb-2">{y.type}</p>
                <h3 className="serif text-2xl mb-3">{y.name}</h3>
                <ul className="text-sm text-neutral-400 space-y-1 mb-4">
                  <li>Length: {y.length}</li>
                  <li>Guests: {y.guests} · Cabins: {y.cabins}</li>
                  <li className="text-brand-gold">From {y.priceFrom}</li>
                </ul>
                <a
                  href={whatsappUrl(data.brand.phone, `Hi, I'd like to know more about ${y.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm uppercase tracking-widest border-b border-brand-gold text-brand-gold hover:opacity-70"
                >
                  Enquire
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 sm:px-10 bg-neutral-950 border-t border-white/5">
        <div className="max-w-5xl mx-auto grid gap-10 sm:grid-cols-3">
          {data.features.map((f) => (
            <div key={f.title}>
              <h3 className="serif text-xl mb-3 text-brand-gold">{f.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-16 px-6 sm:px-10 text-center border-t border-white/5">
        <p className="serif text-2xl mb-3">{data.brand.name}</p>
        <p className="text-neutral-500 text-sm mb-6">{data.brand.location} · {data.brand.email}</p>
        <a
          href={inquiry}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black px-8 py-4 uppercase tracking-widest text-xs transition"
        >
          Start your charter
        </a>
      </footer>
    </main>
  );
}
