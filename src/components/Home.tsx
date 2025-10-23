import React, { useEffect, useMemo, useState, useRef } from "react";
// import { Link } from "react-router-dom"; // Errorem causat sine <BrowserRouter>

// --- Type Definitions for our Data ---

interface Program {
  id: string;
  title: string;
  summary: string;
  img: string;
  tags: string[];
}

interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

interface Event {
  id: string;
  title: string;
  date: string;
  venue: string;
}

interface Partner {
  id: string;
  name: string;
  logo: string;
}

// --- Type Definitions for Component Props ---

interface StatCardProps {
  label: string;
  value: string | number;
  icon: string;
}

interface StatIconProps {
  name: string;
}

interface ProgramCardProps {
  p: Program;
}

interface TestimonialsCarouselProps {
  items?: Testimonial[];
}


/**
 * Enhanced Homepage (React + Tailwind)
 * - Colorful, content rich, responsive
 * - Uses Link from react-router-dom for navigation
 * - Replace placeholder image paths ("/images/..") with real assets
 */

export default function Home() {
  // sample content (replace with real content or import JSON)
  const programs: Program[] = useMemo(
    () => [
      {
        id: "p1",
        title: "Clean Water Initiative",
        summary:
          "Drilling and rehabilitating wells, training local water committees to maintain clean water access.",
        img: "/images/program-water.jpg",
        tags: ["WASH", "Health", "Community"],
      },
      {
        id: "p2",
        title: "Solar for Schools",
        summary:
          "Installing solar lighting and basic e-learning stations to extend study hours and enable remote teaching.",
        img: "/images/program-solar.jpg",
        tags: ["Energy", "Education"],
      },
      {
        id: "p3",
        title: "Youth Tech Skills",
        summary:
          "Hands-on training in coding, digital skills and entrepreneurship for under-served youth.",
        img: "/images/program-youth.jpg",
        tags: ["Skills", "Jobs"],
      },
      {
        id: "p4",
        title: "Agriculture Boost",
        summary:
          "Training farmers on climate-smart agriculture and access to market linkages.",
        img: "/images/program-agri.jpg",
        tags: ["Agriculture", "Livelihoods"],
      },
    ],
    []
  );

  const posts: Post[] = useMemo(
    () => [
      {
        id: "b1",
        title: "Community Well Opens - 500 People Reached",
        date: "2025-08-22",
        excerpt:
          "We inaugurated a community well in Region A; local team trained on maintenance and hygiene.",
      },
      {
        id: "b2",
        title: "Solar Project Kickoff At Mlimani School",
        date: "2025-06-12",
        excerpt:
          "Two classrooms now have solar panels and study lighting — student attendance increased already.",
      },
    ],
    []
  );

  const gallery: string[] = useMemo(
    () => [
      "/images/gallery-1.jpg",
      "/images/gallery-2.jpg",
      "/images/gallery-3.jpg",
      "/images/gallery-4.jpg",
      "/images/gallery-5.jpg",
      "/images/gallery-6.jpg",
    ],
    []
  );

  const testimonials: Testimonial[] = useMemo(
    () => [
      {
        id: "t1",
        name: "Amina J.",
        role: "Community Leader",
        quote:
          "The water project transformed our village — children are healthier and spend more time at school.",
        avatar: "/images/avatar-1.jpg",
      },
      {
        id: "t2",
        name: "Peter L.",
        role: "Volunteer",
        quote:
          "Working with The Sun gave me practical skills and a purpose. The team is professional and caring.",
        avatar: "/images/avatar-2.jpg",
      },
      {
        id: "t3",
        name: "Sarah K.",
        role: "Teacher",
        quote:
          "Solar lights allowed our evening study groups to continue — results improved visibly in 2 months.",
        avatar: "/images/avatar-3.jpg",
      },
    ],
    []
  );

  const events: Event[] = useMemo(
    () => [
      { id: "e1", title: "Fundraising Gala", date: "2025-11-05", venue: "City Hall" },
      { id: "e2", title: "Community Clean-Up", date: "2025-09-12", venue: "Village X" },
    ],
    []
  );

  const partners: Partner[] = useMemo(
    () => [
      { id: "par1", name: "CleanAid", logo: "/images/partner-1.png" },
      { id: "par2", name: "SolarNow", logo: "/images/partner-2.png" },
      { id: "par3", name: "YouthWorks", logo: "/images/partner-3.png" },
    ],
    []
  );

  // Animated counters
  const [counts, setCounts] = useState({ people: 0, programs: 0, volunteers: 0, funds: 0 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const target = { people: 12340, programs: 8, volunteers: 320, funds: 75000 };
    const duration = 1200;
    const start = performance.now();

    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // eased
      setCounts({
        people: Math.floor(target.people * ease),
        programs: Math.floor(target.programs * ease),
        volunteers: Math.floor(target.volunteers * ease),
        funds: Math.floor(target.funds * ease),
      });
      if (t < 1) {
        rafId.current = requestAnimationFrame(step);
      }
    };

    rafId.current = requestAnimationFrame(step);

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-300">
      {/* HERO */}
      <section className="relative overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-gray-800 text-orange-400 text-sm font-semibold">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M12 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 18v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4.9 4.9l2.8 2.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Impact · Community-led · Transparent
              </div>

              <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                <span className="text-orange-400">The Sun</span> — Lighting paths to sustainable communities
              </h1>

              <p className="mt-4 text-gray-300 text-lg max-w-2xl">
                We partner with communities to deliver lifesaving water, clean energy, and skills programs that
                unlock opportunity. Join us — donate, volunteer, or partner to scale impact.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/donate"
                  className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-black shadow hover:bg-orange-600 transition"
                >
                  JUST DONATE
                </a>

                <a
                  href="/volunteer"
                  className="inline-flex items-center gap-2 rounded-full border border-orange-500 px-5 py-3 text-sm font-semibold text-orange-400 bg-transparent hover:bg-gray-800 transition"
                >
                  Volunteer
                </a>

                <a
                  href="/programs"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-gray-200 bg-gray-800 hover:bg-gray-700 transition"
                >
                  Explore Programs
                </a>
              </div>

              {/* Impact stats */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <StatCard label="People reached" value={counts.people.toLocaleString()} icon="people" />
                <StatCard label="Active programs" value={counts.programs} icon="programs" />
                <StatCard label="Volunteers" value={counts.volunteers} icon="volunteer" />
                <StatCard label="Funds raised (TZS)" value={formatTZS(counts.funds)} icon="funds" />
              </div>
            </div>

            {/* Hero illustration / image */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full max-w-lg bg-gray-900 border border-gray-700 rounded-2xl p-4 shadow-xl">
                <img
                  src="/images/hero-illustration.jpg"
                  alt="Community project illustration"
                  className="w-full h-64 object-cover rounded-lg border border-gray-700"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
                <div className="mt-3 p-3 bg-gray-800 rounded-lg border border-gray-700 flex items-center gap-3">
                  <img src="/images/mini-avatar.jpg" alt="" className="w-10 h-10 rounded-full object-cover" onError={(e) => (e.currentTarget.style.display = 'none')} />
                  <div>
                    <div className="text-sm font-semibold text-white">Latest Update</div>
                    <div className="text-xs text-gray-400">Community well opened in Region A — 500 beneficiaries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* decorative wave */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0">
          <svg className="w-full h-24 text-black" viewBox="0 0 1440 150" fill="none" preserveAspectRatio="none" aria-hidden>
            <path d="M0 0c120 0 220 60 360 60s200-60 360-60 240 38 360 38 240-12 360-12v64H0V0z" fill="currentColor" opacity="0.8"></path>
          </svg>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 lg:px-8 -mt-4">
        {/* Programs section */}
        <section className="mt-6 bg-gray-900 border border-gray-700 rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Featured Programs</h2>
            <a href="/programs" className="text-sm font-medium text-orange-400 hover:underline">
              View all programs →
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((p) => (
              <ProgramCard key={p.id} p={p} />
            ))}
          </div>
        </section>

        {/* Events & News */}
        <section className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-white">Latest News</h3>
              <a href="/blog" className="text-sm text-orange-400 hover:underline">See all</a>
            </div>
            <div className="space-y-3">
              {posts.map((post) => (
                <article key={post.id} className="p-4 border rounded-lg bg-gray-800 border-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">{post.title}</h4>
                      <p className="text-sm text-gray-300 mt-1">{post.excerpt}</p>
                      <div className="mt-2 text-xs text-gray-500">{formatDate(post.date)}</div>
                    </div>
                    <div className="shrink-0">
                      <a href={`/blog/${post.id}`} className="text-orange-400 text-sm">Read →</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-white mb-3">Upcoming Events</h3>
            <ul className="space-y-3">
              {events.map((ev) => (
                <li key={ev.id} className="flex items-start gap-3">
                  <div className="flex-none w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center text-orange-400 font-bold">
                    {new Date(ev.date).getDate()}
                  </div>
                  <div>
                    <div className="font-medium text-white">{ev.title}</div>
                    <div className="text-sm text-gray-400">{formatDate(ev.date)} · {ev.venue}</div>
                  </div>
                </li>
              ))}
            </ul>

            <a href="/events" className="mt-4 inline-block text-sm font-medium text-orange-400 hover:underline">All events →</a>
          </div>
        </section>

        {/* Gallery */}
        <section className="mt-8 bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Photo Gallery</h3>
            <a href="/gallery" className="text-sm text-orange-400 hover:underline">See gallery →</a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {gallery.map((src, i) => (
              <button key={i} onClick={() => window.open(src, "_blank", "noopener")} className="rounded overflow-hidden focus:outline-none ring-2 ring-transparent hover:ring-orange-500">
                <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-36 object-cover" onError={(e) => (e.currentTarget.style.display = 'none')} />
              </button>
            ))}
          </div>
        </section>

        {/* Testimonials carousel + partners */}
        <section className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-white mb-4">Voices from the field</h3>
            <TestimonialsCarousel items={testimonials} />
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-white mb-4">Our partners</h3>
            <div className="flex items-center gap-4 flex-wrap">
              {partners.map((par) => (
                <div key={par.id} className="p-2">
                  <img src={par.logo} alt={par.name} className="h-12 object-contain invert" onError={(e) => (e.currentTarget.style.display = 'none')} />
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white">Reports & Transparency</h4>
              <p className="text-sm text-gray-300 mt-2">View our annual reports, audited statements and project trackers for full transparency.</p>
              <a href="/reports" className="mt-3 inline-block text-orange-400 hover:underline text-sm">View reports →</a>
            </div>
          </div>
        </section>

        {/* Newsletter + CTA */}
        <section className="mt-8 bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-white">Stay in the loop</h3>
            <p className="text-sm text-gray-300 mt-1">Get project updates, volunteer opportunities and impact stories.</p>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <NewsletterForm />
            <a href="/donate" className="ml-2 inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-black hover:bg-orange-600">Donate</a>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="mt-8 mb-16 p-6 rounded-2xl text-center bg-black text-white">
          <h3 className="text-2xl font-bold">Ready to make an impact?</h3>
          <p className="mt-2 text-slate-200">Partner with us or make a one-time donation to change lives today.</p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <a href="/donate" className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-black hover:bg-orange-600">Donate</a>
            <a href="/contact" className="rounded-full border border-white/20 px-6 py-3 text-white">Contact</a>
          </div>
        </section>
      </main>
    </div>
  );
}

/* -------------------- Helper components -------------------- */

function StatCard({ label, value, icon }: StatCardProps) {
  return (
    <div className="bg-gray-900 border-gray-700 rounded-lg p-4 shadow-sm flex items-center gap-3 border">
      <div className="flex-none w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center text-orange-400">
        <StatIcon name={icon} />
      </div>
      <div>
        <div className="text-lg font-bold text-white">{value}</div>
        <div className="text-sm text-gray-400">{label}</div>
      </div>
    </div>
  );
}

function StatIcon({ name }: StatIconProps) {
  // simple icons via SVG
  if (name === "people")
    return (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M16 11a4 4 0 10-8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  if (name === "programs")
    return (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 7h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 11h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 15h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  if (name === "volunteer")
    return (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 12a5 5 0 100-10 5 5 0 000 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 22v-1a6 6 0 016-6h4a6 6 0 016 6v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 9h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ProgramCard({ p }: ProgramCardProps) {
  return (
    <article className="bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-700">
      <div className="h-44 bg-gray-700 overflow-hidden">
        <img src={p.img} alt={p.title} className="w-full h-full object-cover" onError={(e) => (e.currentTarget.style.display = 'none')} />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-white">{p.title}</h4>
          <div className="text-xs text-gray-500">{p.tags?.[0]}</div>
        </div>
        <p className="text-sm text-gray-300 mt-2 line-clamp-3">{p.summary}</p>
        <div className="mt-3 flex items-center justify-between">
          <a href={`/programs/${p.id}`} className="text-orange-400 text-sm font-medium hover:underline">Learn more →</a>
          <div className="text-xs text-gray-500">{p.tags?.slice(0, 2).join(" · ")}</div>
        </div>
      </div>
    </article>
  );
}

/* Simple testimonials carousel with auto-play */
function TestimonialsCarousel({ items = [] }: TestimonialsCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length === 0) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 5000);
    return () => clearInterval(id);
  }, [items.length]);

  if (items.length === 0) return null;

  return (
    <div className="relative">
      <div className="p-4 rounded-lg bg-gray-800 border border-gray-700 shadow-sm">
        <div className="flex items-start gap-4">
          <img src={items[index].avatar} alt={items[index].name} className="w-14 h-14 rounded-full object-cover flex-none" onError={(e) => (e.currentTarget.style.display = 'none')} />
          <div>
            <p className="text-gray-200">“{items[index].quote}”</p>
            <div className="mt-3 text-sm text-gray-400">— {items[index].name}, <span className="italic">{items[index].role}</span></div>
          </div>
        </div>
      </div>

      {/* controls */}
      <div className="absolute right-0 top-0 flex items-center gap-2">
        <button onClick={() => setIndex((i) => (i - 1 + items.length) % items.length)} aria-label="Previous testimonial" className="p-2 rounded-full bg-gray-700 ring-1 ring-gray-600 hover:bg-gray-600 text-white">
          ‹
        </button>
        <button onClick={() => setIndex((i) => (i + 1) % items.length)} aria-label="Next testimonial" className="p-2 rounded-full bg-gray-700 ring-1 ring-gray-600 hover:bg-gray-600 text-white">
          ›
        </button>
      </div>

      {/* indicators */}
      <div className="mt-3 flex items-center gap-2">
        {items.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} className={`w-2 h-2 rounded-full ${i === index ? "bg-orange-400" : "bg-gray-600"}`} aria-label={`Go to testimonial ${i + 1}`}></button>
        ))}
      </div>
    </div>
  );
}

/* Newsletter form (mock) */
function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOk(true);
    setEmail("");
    setTimeout(() => setOk(false), 3000);
  };

  return (
    <form onSubmit={submit} className="flex gap-2 w-full max-w-md">
      <label htmlFor="newsletter" className="sr-only">Email address</label>
      <input
        id="newsletter"
        type="email"
        required
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 rounded-full border border-gray-700 bg-gray-800 px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
      <button type="submit" className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-black hover:bg-orange-600">Subscribe</button>
      {ok && <div className="text-sm text-green-600 ml-3">Thanks!</div>}
    </form>
  );
}

/* -------------------- Utilities -------------------- */
function formatDate(iso: string) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  } catch {
    return iso;
  }
}

function formatTZS(n: number) {
  if (!n && n !== 0) return "-";
  return `TSh ${n.toLocaleString()}`;
}


