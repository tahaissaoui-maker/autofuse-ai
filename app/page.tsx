"use client";

import React, { useEffect, useState, useRef, FormEvent } from "react";
import { 
  Phone, 
  PhoneIncoming, 
  PhoneOutgoing, 
  Activity, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Play,
  Pause,
  Landmark, 
  Home, 
  Smile, 
  Building2,
  Menu,
  X,
  Volume2,
  MoreVertical
} from "lucide-react";

export default function AutoFuseAIPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-slate-100 overflow-hidden font-sans selection:bg-purple-500/30">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[600px] md:h-[1000px] md:w-[1000px] bg-purple-900/10 blur-[80px] md:blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] md:h-[800px] md:w-[800px] bg-blue-900/10 blur-[80px] md:blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <CursorGlow />

      <div className="relative z-10 flex min-h-screen flex-col">
        <NavBar />
        
        <main className="flex-1">
          <div id="top-fold" className="relative">
             <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505] to-[#0a0a0a] z-0" />
             <div className="relative z-10">
               <HeroSection />
               <MissedMoneySection />
             </div>
          </div>

          <ServicesSplitSection />
          <LiveDemoSection />
          <CaseStudiesSection />
          <ProcessSection />
          <FinalCTASection />
        </main>
        
        <SiteFooter />
      </div>

      <StyleFX />
    </div>
  );
}

// --- COMPONENTS ---

// Functional Audio Player Component
const AudioPlayer: React.FC<{ src: string }> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="mt-auto pt-4 rounded-2xl bg-white/5 border border-white/5 p-3 flex items-center gap-3">
      <audio ref={audioRef} src={src} preload="none" />
      
      <button 
        onClick={togglePlay}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black hover:scale-105 transition-transform shrink-0"
      >
        {isPlaying ? (
          <Pause className="h-4 w-4 fill-black" />
        ) : (
          <Play className="h-4 w-4 fill-black ml-0.5" />
        )}
      </button>
      
      <div className="flex-1 space-y-1">
        {/* Visual Progress Bar (Static for aesthetics, but pulses when playing) */}
        <div className="h-1 w-full rounded-full bg-white/20 overflow-hidden">
          <div className={`h-full bg-white/60 rounded-full transition-all duration-300 ${isPlaying ? 'w-full animate-pulse' : 'w-1/3'}`} />
        </div>
        <div className="flex justify-between text-[9px] text-slate-500 font-mono">
          <span>{isPlaying ? "Playing..." : "Listen"}</span>
          <span>Recording</span>
        </div>
      </div>
    </div>
  );
};

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const calUrl = "https://cal.com/taha-issaoui-g9ve4z/discovery";

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-4 py-3 md:py-4 sm:px-6 lg:px-8">
        
        <a href="#hero" className="group flex items-center gap-3 relative z-50">
          <div className="relative flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 via-blue-600 to-cyan-500 shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-transform group-hover:scale-105">
            <Phone className="h-4 w-4 md:h-5 md:w-5 text-white fill-white/20" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold tracking-wide text-white">
              AutoFuse AI
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-400">
          <a href="#calculator" className="nav-link hover:text-white transition-colors">Missed Revenue</a>
          <a href="#services" className="nav-link hover:text-white transition-colors">Capabilities</a>
          <a href="#demo" className="nav-link hover:text-white transition-colors">Live Demo</a>
          <a href="#case-studies" className="nav-link hover:text-white transition-colors">Results</a>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={calUrl}
            className="neon-button rounded-full px-8 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-purple-500/20 inline-flex"
            target="_blank"
            rel="noreferrer"
          >
            Book Your Free Audit
          </a>
        </div>

        <button 
          className="md:hidden relative z-50 p-2 text-slate-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {isMobileMenuOpen && (
          <div className="absolute inset-x-0 top-full p-4 md:hidden bg-black/95 border-b border-white/10 backdrop-blur-2xl animate-in slide-in-from-top-5 fade-in duration-200 h-screen">
            <nav className="flex flex-col space-y-6 text-base font-medium text-slate-300 mt-4">
              <a href="#calculator" onClick={() => setIsMobileMenuOpen(false)} className="block p-2 hover:bg-white/5 rounded-lg">Missed Revenue</a>
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block p-2 hover:bg-white/5 rounded-lg">Capabilities</a>
              <a href="#demo" onClick={() => setIsMobileMenuOpen(false)} className="block p-2 hover:bg-white/5 rounded-lg">Live Demo</a>
              <a href="#case-studies" onClick={() => setIsMobileMenuOpen(false)} className="block p-2 hover:bg-white/5 rounded-lg">Results</a>
              <hr className="border-white/10 my-2" />
              <a
                href={calUrl}
                target="_blank"
                rel="noreferrer"
                className="neon-button flex items-center justify-center rounded-xl px-6 py-4 text-base font-bold text-slate-950 w-full"
              >
                Book Strategy Call
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

const HeroSection: React.FC = () => {
  const calUrl = "https://cal.com/taha-issaoui-g9ve4z/discovery";

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center px-4 pt-12 pb-12 md:pt-24 md:pb-20 sm:px-6 lg:px-8 overflow-visible z-10 w-full"
    >
      <Reveal>
        <div className="mx-auto w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          
          {/* 1. TEXT CONTENT */}
          <div className="space-y-8 md:space-y-12 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start w-full">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm font-medium text-slate-300 backdrop-blur-md shadow-lg shadow-purple-500/10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="tracking-wide">Trusted by 20+ businesses worldwide</span>
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
<h1 className="text-balance text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] md:leading-[1.05]">
  Never miss a lead <br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
    with Voice AI
  </span>
</h1>
              <p className="mx-auto lg:mx-0 max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed font-light">
                Your 24/7 AI receptionist answers every call, qualifies prospects, and books revenue instantly. No sick days. No missed opportunities.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-6 sm:flex-row sm:justify-center lg:justify-start pt-4">
              <a
                href={calUrl}
                className="neon-button inline-flex h-12 md:h-16 w-auto sm:w-auto min-w-[200px] md:min-w-[240px] items-center justify-center rounded-full px-10 md:px-10 text-base font-bold text-slate-950 transition-transform hover:scale-105"
                target="_blank"
                rel="noreferrer"
              >
                Book Your Free Audit
              </a>
              
              <a 
                href="#demo"
                className="group inline-flex h-12 md:h-16 w-auto items-center justify-center rounded-full px-8 md:px-10 text-sm md:text-base font-bold text-white transition-colors hover:text-purple-400"
              >
                Try Live Demo <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* 2. ORB ANIMATION */}
          <div className="relative flex justify-center lg:justify-end perspective-1000 mt-4 lg:mt-0">
             <div className="relative h-72 w-72 sm:h-96 sm:w-96 lg:h-[500px] lg:w-[500px] flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 via-blue-600 to-cyan-500 blur-[80px] opacity-40 animate-pulse" />
                <div className="absolute inset-4 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-[0_0_80px_rgba(124,58,237,0.3)]">
                    <WaveformCircle />
                </div>
             </div>
          </div>

        </div>
      </Reveal>
    </section>
  );
};

const MissedMoneySection: React.FC = () => {
  const [missedCalls, setMissedCalls] = useState<string>("5");
  const [clientValue, setClientValue] = useState<string>("800");
  const [closeRate, setCloseRate] = useState<string>("30");

  const parsedMissed = Number.parseFloat(missedCalls) || 0;
  const parsedValue = Number.parseFloat(clientValue) || 0;
  const parsedClose = Number.parseFloat(closeRate) || 0;

  const lostPerMonth = parsedMissed * parsedValue * (parsedClose / 100) * 30;

  return (
    <section
      id="calculator"
      className="relative pt-14 pb-16 md:pb-32 z-20"
    >
      <div className="relative mx-auto flex w-full max-w-[1400px] flex-col items-center gap-12 px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 opacity-90">
              <Activity className="h-5 w-5 text-purple-400" />
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-300">
                The Cost of Silence
              </p>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Your missed calls are expensive
            </h2>
            <p className="mx-auto text-base md:text-lg text-slate-400 leading-relaxed">
              Every time the phone rings and goes to voicemail, you lose money. Calculate exactly how much revenue leaks out of your business every month below.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="glass-card w-full max-w-3xl rounded-3xl border border-white/10 bg-[#0e0e0e]/80 p-6 md:p-10 shadow-[0_30px_100px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
            <form className="space-y-8 text-left">
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-slate-400 uppercase tracking-wide">
                    Missed Calls / Day
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={missedCalls}
                    onChange={(e) => setMissedCalls(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-black/60 px-5 py-4 text-base text-slate-100 outline-none ring-purple-500/20 focus:border-purple-500 focus:ring-2 transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-slate-400 uppercase tracking-wide">
                    Avg. Client Value ($)
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={clientValue}
                    onChange={(e) => setClientValue(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-black/60 px-5 py-4 text-base text-slate-100 outline-none ring-purple-500/20 focus:border-purple-500 focus:ring-2 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-slate-400 uppercase tracking-wide">
                  Closing Rate (%)
                </label>
                <div className="relative">
                    <input
                    type="number"
                    min={0}
                    max={100}
                    value={closeRate}
                    onChange={(e) => setCloseRate(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-black/60 px-5 py-4 text-base text-slate-100 outline-none ring-purple-500/20 focus:border-purple-500 focus:ring-2 transition-all"
                    />
                    <div className="absolute right-5 top-4 text-slate-500 text-base pointer-events-none">%</div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-rose-500/30 bg-rose-500/10 p-8 shadow-[0_0_40px_rgba(225,29,72,0.15)]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-rose-400 mb-2">
                      Revenue Lost / Month
                    </p>
                    <p className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                      {lostPerMonth <= 0
                        ? "$0"
                        : lostPerMonth.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                            maximumFractionDigits: 0,
                          })}
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const ServicesSplitSection: React.FC = () => {
    return (
      <section id="services" className="relative py-10 md:py-12 bg-[#0a0a0a]">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12 md:mb-20 space-y-6">
               <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Total Voice Coverage</h2>
               <p className="text-slate-400 text-base md:text-lg max-w-3xl mx-auto">
                   Most agencies only do one. We build complete voice autonomy for your business.
               </p>
            </div>
          </Reveal>
  
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <Reveal delay={100}>
                <div className="group relative h-full rounded-[24px] md:rounded-[32px] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 md:p-12 hover:border-blue-500/30 transition-all duration-500">
                    <div className="mb-6 md:mb-8 inline-flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                        <PhoneIncoming className="h-6 w-6 md:h-8 w-8" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Inbound Receptionist</h3>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                        Never put a customer on hold again. The AI answers immediately, answers FAQs, checks your calendar availability, and books appointments directly into your schedule.
                    </p>
                    <ul className="space-y-4 md:space-y-5">
                        <li className="flex items-center gap-3 md:gap-4 text-sm md:text-base text-slate-300">
                            <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-blue-500" /> 24/7 Availability
                        </li>
                        <li className="flex items-center gap-3 md:gap-4 text-sm md:text-base text-slate-300">
                            <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-blue-500" /> Instant Scheduling
                        </li>
                    </ul>
                </div>
            </Reveal>

            <Reveal delay={200}>
                <div className="group relative h-full rounded-[24px] md:rounded-[32px] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 md:p-12 hover:border-purple-500/30 transition-all duration-500">
                    <div className="mb-6 md:mb-8 inline-flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400">
                        <PhoneOutgoing className="h-6 w-6 md:h-8 w-8" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Outbound Sales</h3>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                        Turn old leads into new cash. The AI calls your database, qualifies interest, reactivates dormant customers, and transfers hot leads to your team.
                    </p>
                    <ul className="space-y-4 md:space-y-5">
                        <li className="flex items-center gap-3 md:gap-4 text-sm md:text-base text-slate-300">
                            <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-purple-500" /> Lead Reactivation
                        </li>
                        <li className="flex items-center gap-3 md:gap-4 text-sm md:text-base text-slate-300">
                            <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-purple-500" /> Speed-to-Lead (Under 1 min)
                        </li>
                    </ul>
                </div>
            </Reveal>
          </div>
        </div>
      </section>
    );
  };

const LiveDemoSection: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const isFormValid = fullName.trim() !== "" && email.trim() !== "" && phone.trim() !== "";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsLoading(true);
    setStatus(null);

    try {
      const webhookUrl = "https://hook.eu2.make.com/v44z8mircvlc9lyt4casscehkh2nb531";

      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          website,
          source: "autofuse-ai-site-demo",
          timestamp: new Date().toISOString(),
        }),
      });

      setIsLoading(false);
      setStatus("success");
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setStatus("error");
    }
  };

  return (
    <section
      id="demo"
      className="relative bg-[#0a0a0a] py-12 md:py-32 overflow-hidden"
    >
      <div className="absolute top-0 right-0 h-[600px] w-[600px] md:h-[800px] md:w-[800px] bg-gradient-to-b from-purple-900/10 to-transparent blur-3xl opacity-50 pointer-events-none" />

      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-12 md:gap-16 px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <div className="space-y-6 md:space-y-8 max-w-3xl">
            <div className="flex items-center justify-center gap-3">
               <span className="flex h-3 w-3 relative">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
               </span>
               <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
                Live Test
              </p>
            </div>
            <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-white">
              Experience the speed
            </h2>
            <p className="mx-auto text-base md:text-lg text-slate-400 leading-relaxed">
              Don't just take our word for it. Enter your number below. Our AI will call you immediately. It sounds human, acts fast, and doesn't take breaks.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-6 border-t border-white/5">
                <div className="flex items-center gap-3 md:gap-4">
                    <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                        <span className="text-xs md:text-sm font-bold text-white">1</span>
                    </div>
                    <span className="text-sm md:text-base text-slate-300">Fill the form</span>
                </div>
                <div className="hidden sm:block text-slate-600">→</div>
                <div className="flex items-center gap-3 md:gap-4">
                    <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                        <span className="text-xs md:text-sm font-bold text-white">2</span>
                    </div>
                    <span className="text-sm md:text-base text-slate-300">Receive a call instantly</span>
                </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="glass-card relative w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10 shadow-[0_0_80px_rgba(124,58,237,0.15)] backdrop-blur-3xl">
            <form className="space-y-5 md:space-y-6 text-left" onSubmit={handleSubmit}>
              <div className="grid gap-5 md:gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="block text-xs md:text-sm font-medium text-slate-300 uppercase">Full name *</label>
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 md:px-5 md:py-4 text-sm md:text-base text-slate-100 outline-none ring-blue-500/20 focus:border-blue-400 focus:ring-2 transition-all"
                    placeholder="Jordan Good"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs md:text-sm font-medium text-slate-300 uppercase">Email *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 md:px-5 md:py-4 text-sm md:text-base text-slate-100 outline-none ring-blue-500/20 focus:border-blue-400 focus:ring-2 transition-all"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="block text-xs md:text-sm font-medium text-slate-300 uppercase">Phone number *</label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 md:px-5 md:py-4 text-sm md:text-base text-slate-100 outline-none ring-blue-500/20 focus:border-blue-400 focus:ring-2 transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs md:text-sm font-medium text-slate-300 uppercase">Company website</label>
                  <input
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 md:px-5 md:py-4 text-sm md:text-base text-slate-100 outline-none ring-blue-500/20 focus:border-blue-400 focus:ring-2 transition-all"
                    placeholder="autofuse.ai"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={!isFormValid || isLoading}
                className={`mt-4 md:mt-6 w-full rounded-xl px-6 md:px-8 py-4 md:py-5 text-sm md:text-base font-bold text-white shadow-lg transition-all duration-300
                    ${!isFormValid || isLoading 
                        ? "bg-slate-800 text-slate-500 cursor-not-allowed shadow-none" 
                        : "bg-gradient-to-r from-purple-600 to-blue-600 shadow-purple-500/30 hover:brightness-110"}`}
              >
                {isLoading ? "Connecting to AI..." : "Call Me Now"}
              </button>

              {status === "success" && (
                <div className="flex items-center gap-3 rounded-lg bg-emerald-500/10 p-4 text-sm text-emerald-400 border border-emerald-500/20">
                  <CheckCircle className="h-5 w-5" />
                  <span>AI Agent dispatched. Check your phone.</span>
                </div>
              )}
              {status === "error" && (
                <p className="text-center text-sm text-rose-400">
                  Connection failed. Please try again.
                </p>
              )}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const CaseStudiesSection: React.FC = () => {
  const cases = [
    {
      company: "Cornerstone",
      subline: "Property Solutions",
      description: "Implemented a 24/7 inbound wizard that screens tenants and books viewings automatically.",
      tags: ["Property Mgmt", "Inbound"],
      metric: "Zero Missed Calls & 100% Capture",
      metricColor: "text-emerald-400",
      bannerGradient: "from-emerald-900 to-green-900",
      bannerText: "text-emerald-100",
      audio: "/audio/cornerstone.mp3"
    },
    {
      company: "NC Homebuyers",
      subline: "LLC",
      description: "Automated lead qualification for real estate investors. Filters motivated sellers from the noise.",
      tags: ["Real Estate", "Qualifying"],
      metric: "30% Increase in Deal Flow",
      metricColor: "text-blue-400",
      bannerGradient: "from-blue-900 to-indigo-900",
      bannerText: "text-blue-100",
      audio: "/audio/nc-homebuyers.mp3"
    },
    {
      company: "Cooper Roofing",
      subline: "Ltd.",
      description: "Recovered dormant leads by calling past inquiries. Filled the calendar during slow season.",
      tags: ["Roofing", "Reactivation"],
      metric: "20+ New Site Visits Per Month",
      metricColor: "text-amber-400",
      bannerGradient: "from-amber-900 to-orange-900",
      bannerText: "text-amber-100",
      audio: "/audio/cooper.mp3"
    },
    {
      company: "Grey Street",
      subline: "Dentist Pty Ltd",
      description: "Virtual dental receptionist that books appointments and answers FAQs while staff is busy.",
      tags: ["Dental", "Receptionist"],
      metric: "30+ Hours Saved Monthly",
      metricColor: "text-purple-400",
      bannerGradient: "from-purple-900 to-fuchsia-900",
      bannerText: "text-purple-100",
      audio: "/audio/grey-street.mp3"
    }
  ];

  return (
    <section id="case-studies" className="relative bg-[#0a0a0a] py-12 md:py-32">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12 md:mb-20 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Our Success Stories
            </h2>
            <div className="h-1.5 w-24 bg-purple-500 mt-6 rounded-full mx-auto md:mx-0" />
            <p className="mt-6 md:mt-8 text-slate-400 text-base md:text-lg max-w-3xl">
                Real businesses using Voice AI to save hours and unlock new revenue.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-4">
          {cases.map((item, index) => (
            <Reveal key={item.company} delay={index * 100}>
              <div className="group relative flex flex-col overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/10 bg-[#0e0e0e] hover:border-white/20 transition-all duration-300">
                
                <div className={`relative h-32 md:h-40 w-full bg-gradient-to-r ${item.bannerGradient} flex flex-col items-center justify-center p-6 md:p-8 text-center`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),_transparent)] opacity-40" />
                    
                    <div className="relative z-10">
                        <h3 className={`text-2xl md:text-3xl font-serif font-bold ${item.bannerText} tracking-tight`}>
                            {item.company}
                        </h3>
                        {item.subline && (
                            <p className={`text-xs uppercase tracking-widest ${item.bannerText} opacity-70 mt-1 md:mt-2`}>
                                {item.subline}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col flex-1 p-6 md:p-8 space-y-5 md:space-y-6">
                    
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-bold text-white">{item.company}</h4>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                            {item.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {item.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-medium text-slate-300">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <AudioPlayer src={item.audio} />

                    <div className="pt-2 border-t border-white/5">
                        <p className={`text-base font-bold ${item.metricColor}`}>
                            {item.metric}
                        </p>
                    </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      desc: "We analyze your current call flow. We identify where you are leaking revenue and map out the solution.",
    },
    {
      num: "02",
      title: "Development",
      desc: "We build your custom voice agent using Retell AI. We script the logic, clone the voice, and integrate it with your CRM.",
    },
    {
      num: "03",
      title: "Deployment",
      desc: "We go live. Your AI starts answering calls, booking deals, and qualifying leads 24/7.",
    },
  ];

  const calUrl = "https://cal.com/taha-issaoui-g9ve4z/discovery";

  return (
    <section id="process" className="relative bg-[#0a0a0a] py-12 md:py-32">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6 md:gap-8">
                <div className="max-w-2xl">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 md:mb-6">
                        Simple Integration
                    </h2>
                    <p className="text-slate-400 text-base md:text-lg">
                        We handle the technical heavy lifting. You just enjoy the extra capacity.
                    </p>
                </div>
                <a
                    href={calUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 text-base font-bold text-purple-400 hover:text-purple-300 transition-colors"
                >
                    Start the process <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
            </div>
        </Reveal>

        <div className="grid gap-8 md:gap-10 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 100}>
                <div className="relative group h-full">
                    <div className="absolute -inset-0.5 rounded-[24px] md:rounded-[32px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition duration-500 blur-lg" />
                    <div className="relative flex flex-col h-full rounded-[24px] md:rounded-[32px] border border-white/10 bg-black p-8 md:p-10 hover:border-white/20 transition-colors">
                        <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-slate-700 to-black mb-6 md:mb-8">
                            {step.num}
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">{step.title}</h3>
                        <p className="text-sm md:text-base text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
                </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTASection: React.FC = () => {
  const calUrl = "https://cal.com/taha-issaoui-g9ve4z/discovery";

  return (
    <section className="relative overflow-hidden bg-black py-16 md:py-40 border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
        
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <div className="space-y-8 md:space-y-10">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white">
              Ready to automate?
            </h2>
            <p className="mx-auto max-w-3xl text-base md:text-xl text-slate-400">
              Join the businesses using AutoFuse AI to capture every lead, 24/7.
            </p>
            <div className="flex flex-col items-center gap-6 pt-6 sm:flex-row sm:justify-center">
              <a
                href={calUrl}
                target="_blank"
                rel="noreferrer"
                className="neon-button inline-flex h-14 md:h-16 w-full sm:w-auto min-w-[200px] md:min-w-[240px] items-center justify-center rounded-full px-8 md:px-12 text-sm md:text-base font-bold text-slate-950 transition-transform hover:scale-105"
              >
                Book Your Free Audit
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const SiteFooter: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-black py-8 md:py-12">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-500 to-blue-500">
                 <Phone className="h-3 w-3 md:h-4 md:w-4 text-white" />
            </div>
            <span className="text-sm md:text-base font-bold text-slate-200">AutoFuse AI</span>
        </div>
        <div className="text-xs md:text-sm text-slate-600">
          © {new Date().getFullYear()} AutoFuse AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const CursorGlow: React.FC = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);
  return (
    <div className="pointer-events-none fixed inset-0 z-50 mix-blend-screen transition-opacity duration-300">
      <div
        className="h-96 w-96 rounded-full bg-blue-500/5 blur-[80px]"
        style={{
          position: "fixed",
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

const WaveformCircle: React.FC = () => {
    return (
      <div className="relative flex items-center justify-center h-full w-full">
         <div className="absolute w-24 h-24 rounded-full border border-white/20 animate-[spin_10s_linear_infinite]" />
         <div className="absolute w-32 h-32 rounded-full border border-purple-500/10 animate-[spin_15s_linear_infinite_reverse]" />
         
         <div className="flex gap-1 items-center">
            {[...Array(5)].map((_, i) => (
                <div 
                    key={i}
                    className="w-1.5 bg-gradient-to-t from-purple-400 to-cyan-400 rounded-full animate-voice-wave"
                    style={{
                        animationDelay: `${i * 0.15}s`
                    }}
                />
            ))}
         </div>
      </div>
    );
};

const Reveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

const StyleFX: React.FC = () => {
  return (
    <style jsx global>{`
      .neon-button {
        background-image: linear-gradient(135deg, #9333ea, #3b82f6);
        box-shadow: 0 0 25px rgba(147, 51, 234, 0.4);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .neon-button:hover {
        box-shadow: 0 0 40px rgba(147, 51, 234, 0.6);
        filter: brightness(1.1);
      }
      @keyframes voiceWave {
        0%, 100% { height: 12px; opacity: 0.5; }
        50% { height: 40px; opacity: 1; }
      }
      .animate-voice-wave {
        animation: voiceWave 1.2s ease-in-out infinite;
      }
      .perspective-1000 {
        perspective: 1000px;
      }
    `}</style>
  );
};
