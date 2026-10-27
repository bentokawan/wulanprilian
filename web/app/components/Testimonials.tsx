// Testimoni hanya ditampilkan bila ada izin tertulis dari klien.
// Bila array kosong, section ini tidak tampil.
const testimonials: { quote: string; initials: string; month: string }[] = [];

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="bg-[#C9DDE0] py-20 px-4">
      <div className="max-w-[1120px] mx-auto">
        <h2
          className="text-[clamp(1.5rem,3.5vw,2rem)] font-semibold text-[#14263A] mb-10"
          style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
        >
          Yang pernah memulai lebih dulu
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="bg-white rounded-xl p-6 flex flex-col gap-4"
            >
              <blockquote className="text-[#14263A]/80 leading-relaxed italic text-sm">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="text-xs text-[#14263A]/50 mt-auto">
                — {t.initials}, {t.month}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
