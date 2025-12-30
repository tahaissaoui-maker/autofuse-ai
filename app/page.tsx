"use client";

import React, { useEffect, useState, useRef, FormEvent } from "react";
import Image from "next/image"; // <--- This line is critical for your error
import { 
  Phone, 
  PhoneIncoming, 
  PhoneOutgoing, 
  Activity, 
  Star, 
  CheckCircle, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  TrendingUp,
  FileSearch, // New
  Workflow,   // New
  Rocket,
  User, 
  Users,     // New
  Clock,     // New
  Database,  // New
  Play, 
  Pause,
  TrendingDown,
  AlertTriangle,
  Landmark, 
  Home, 
  Smile, 
  Zap,
  Lock,
  Loader2,
  Wifi,
  Building2, 
  Menu, 
  X, 
  Volume2, 
  MoreVertical,
  Trophy
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
          <FounderSection />
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
        
        <a href="#hero" className="group flex items-center gap-0 relative z-50">
          
          {/* --- CLEAN LOGO (No Background) --- */}
          <div className="relative h-9 w-9 md:h-10 md:w-10 transition-transform duration-300 group-hover:scale-105">
             <Image 
               src="/header-logo.png" 
               alt="AutoFuse AI Logo"
               fill
               className="object-contain"
               priority
             />
          </div>

          <div className="text-lg font-bold tracking-tight text-white group-hover:text-slate-200 transition-colors">
            AutoFuse AI
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
className="relative flex items-center justify-center px-4 pt-10 pb-10 md:pt-20 md:pb-12 sm:px-6 lg:px-8 overflow-visible z-10 w-full"
      >
      {/* 1. UPGRADE: Technical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <Reveal>
        <div className="mx-auto w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="space-y-10 text-center lg:text-left relative z-10">
            
            {/* Top Badge */}
            <div className="flex justify-center lg:justify-start w-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                System Online
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-balance text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[1] md:leading-[0.95]">
                Never miss a job <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                  with Voice AI
                </span>
              </h1>
              <p className="mx-auto lg:mx-0 max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed font-light">
                Your 24/7 AI receptionist answers every call, qualifies prospects, and books revenue instantly. No sick days. No missed opportunities.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col items-center lg:items-start gap-6 sm:flex-row sm:justify-center lg:justify-start pt-2">
              <a
                href={calUrl}
                className="neon-button inline-flex h-14 w-full sm:w-auto min-w-[200px] items-center justify-center rounded-full px-8 text-base font-bold text-slate-950 transition-transform hover:scale-105"
                target="_blank"
                rel="noreferrer"
              >
                Book Your Free Audit
              </a>
              
              <a 
                href="#demo"
                className="group inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-full px-8 text-base font-bold text-white border border-white/10 hover:bg-white/5 transition-all"
              >
                Try Live Demo <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* 2. UPGRADE: Social Proof / Logos Section */}
            <div className="pt-8 border-t border-white/5">
              <p className="text-xs text-slate-500 font-mono mb-4 uppercase tracking-widest text-center lg:text-left">
                Trusted by 20+ businesses including:
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                {/* We use text representations for now since they are safer than missing images, styled to look like logos */}
                <span className="text-lg font-bold text-white flex items-center gap-2"><Building2 className="w-5 h-5" /> Cornerstone</span>
                <span className="text-lg font-serif font-bold text-white">Cooper Roofing</span>
                <span className="text-lg font-bold text-white flex items-center gap-2"><Home className="w-5 h-5" /> NC Homebuyers</span>
              </div>
            </div>
          </div>

          {/* RIGHT: 3. UPGRADE: The "Neural Core" Animation */}
          <div className="relative flex justify-center lg:justify-end perspective-1000 mt-10 lg:mt-0">
             <div className="relative h-[400px] w-[400px] md:h-[600px] md:w-[600px] flex items-center justify-center">
                
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 via-blue-600/30 to-cyan-500/30 blur-[100px] rounded-full animate-pulse" />
                
                {/* Rotating Rings */}
                <div className="absolute w-[80%] h-[80%] rounded-full border border-white/5 border-dashed animate-[spin_20s_linear_infinite]" />
                <div className="absolute w-[60%] h-[60%] rounded-full border border-white/10 animate-[spin_15s_linear_infinite_reverse]" />
                
                {/* Floating Status Badges */}
                <div className="absolute top-[20%] right-[10%] bg-[#0A0A0A] border border-white/10 px-3 py-1.5 rounded-lg shadow-xl animate-bounce delay-700">
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-mono text-slate-300">QUALIFYING LEAD...</span>
                    </div>
                </div>
                <div className="absolute bottom-[25%] left-[0%] bg-[#0A0A0A] border border-white/10 px-3 py-1.5 rounded-lg shadow-xl animate-bounce delay-1000">
                    <div className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-blue-500" />
                        <span className="text-[10px] font-mono text-slate-300">APPOINTMENT BOOKED</span>
                    </div>
                </div>

                {/* The Core */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 bg-black rounded-full border border-white/10 shadow-[0_0_50px_rgba(124,58,237,0.5)] flex items-center justify-center backdrop-blur-xl z-20">
                    <WaveformCircle />
                </div>
             </div>
          </div>

        </div>
      </Reveal>
    </section>
  );
};

// --- Updated Waveform Component ---
const WaveformCircle: React.FC = () => {
    return (
      <div className="flex items-center gap-1.5 h-12">
         {[...Array(5)].map((_, i) => (
            <div 
                key={i}
                className="w-2 rounded-full bg-gradient-to-t from-purple-500 to-blue-400 animate-voice-wave"
                style={{
                    height: '100%',
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: '1s'
                }}
            />
         ))}
      </div>
    );
};

const MissedMoneySection: React.FC = () => {
  // ROOFER DEFAULTS: 
  // 5 missed calls/week (very common during storms/busy season)
  // $12,000 avg ticket (standard residential roof)
  // 30% close rate (industry standard for inbound)
  const [missedCallsWeekly, setMissedCallsWeekly] = useState<number>(5);
  const [avgJobValue, setAvgJobValue] = useState<number>(12000);
  const [closeRate, setCloseRate] = useState<number>(30);

  // Math: Weekly Calls * 4 = Monthly Calls * Close Rate * Job Value
  const monthlyRevenueLost = (missedCallsWeekly * 4) * (closeRate / 100) * avgJobValue;
  const annualRevenueLost = monthlyRevenueLost * 12;

  return (
    <section id="calculator" className="relative py-12 md:py-32 bg-[#050505]">
      {/* Background Glow for danger vibe */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest">
              <TrendingDown className="w-4 h-4" />
              Revenue Leak Detector
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Calculate your <span className="text-red-500">Cost of Silence</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Every missed call isn't just a missed conversation. It's a homeowner calling your competitor. See exactly what that silence costs you.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* LEFT: The Inputs (Interactive Sliders) */}
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm space-y-10">
              
              {/* Slider 1: Missed Calls */}
              <div className="space-y-4">
                <div className="flex justify-between text-sm font-medium">
                  <label className="text-slate-300">Missed Calls Per Week</label>
                  <span className="text-white bg-white/10 px-3 py-1 rounded-lg">{missedCallsWeekly} calls</span>
                </div>
                <input 
                  type="range" min="1" max="50" step="1"
                  value={missedCallsWeekly}
                  onChange={(e) => setMissedCallsWeekly(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500 hover:accent-purple-400 transition-all"
                />
                <p className="text-xs text-slate-500">
                  *Industry Avg: 20-30% of inbound calls go to voicemail.
                </p>
              </div>

              {/* Slider 2: Job Value */}
              <div className="space-y-4">
                <div className="flex justify-between text-sm font-medium">
                  <label className="text-slate-300">Average Job Value</label>
                  <span className="text-white bg-white/10 px-3 py-1 rounded-lg">${avgJobValue.toLocaleString()}</span>
                </div>
                <input 
                  type="range" min="1000" max="50000" step="500"
                  value={avgJobValue}
                  onChange={(e) => setAvgJobValue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400 transition-all"
                />
                <p className="text-xs text-slate-500">
                  *Standard Roof Replacement: $12k - $15k.
                </p>
              </div>

              {/* Slider 3: Close Rate */}
              <div className="space-y-4">
                <div className="flex justify-between text-sm font-medium">
                  <label className="text-slate-300">Close Rate (Inbound Leads)</label>
                  <span className="text-white bg-white/10 px-3 py-1 rounded-lg">{closeRate}%</span>
                </div>
                <input 
                  type="range" min="1" max="100" step="1"
                  value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 hover:accent-emerald-400 transition-all"
                />
                <p className="text-xs text-slate-500">
                  *Avg Inbound Close Rate: 30% - 50%.
                </p>
              </div>

            </div>

            {/* RIGHT: The Results (The "Pain") */}
            <div className="relative h-full min-h-[400px] p-10 rounded-3xl bg-gradient-to-br from-red-950/30 to-black border border-red-500/20 flex flex-col justify-center items-center text-center space-y-8">
              
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50" />

              <div>
                <p className="text-red-400 text-sm font-bold uppercase tracking-widest mb-2 animate-pulse">
                  Monthly Revenue Leaking
                </p>
                <div className="text-6xl md:text-7xl font-bold text-white tracking-tighter drop-shadow-[0_0_30px_rgba(220,38,38,0.3)]">
                  ${monthlyRevenueLost.toLocaleString()}
                </div>
              </div>

              <div className="w-full h-px bg-red-500/20" />

              <div>
                <p className="text-slate-400 text-xs uppercase tracking-wider mb-2">
                  Annual Loss (The "New Crew" Cost)
                </p>
                <div className="text-3xl md:text-4xl font-bold text-red-200">
                  ${annualRevenueLost.toLocaleString()}
                </div>
              </div>

              <div className="pt-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 text-xs">
                  <AlertTriangle className="w-4 h-4" />
                  <span>You are losing <b>{Math.round(missedCallsWeekly * 4 * (closeRate/100))} jobs</b> per month to voicemail.</span>
                </div>
              </div>

            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
};

const ServicesSplitSection: React.FC = () => {
  return (
    <section id="services" className="relative py-12 md:py-32 bg-[#050505] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Voice Autonomy</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              We don't just "answer phones". We deploy intelligent agents that handle your entire revenue cycle, from the first ring to the signed contract.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

          {/* Card 1: Inbound (Blue Theme) */}
          <Reveal delay={100}>
            <div className="group relative h-full rounded-[2.5rem] border border-white/10 bg-[#0A0A0A] p-8 md:p-12 overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_60px_rgba(59,130,246,0.1)]">
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Icon Header */}
                <div className="flex justify-between items-start mb-10">
                  <div className="h-16 w-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                    <PhoneIncoming className="h-8 w-8" />
                  </div>
                  <div className="px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs font-mono font-bold text-blue-300 uppercase tracking-widest">
                    Receptionist
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Inbound Operations</h3>
                <p className="text-slate-400 text-base leading-relaxed mb-10 border-l-2 border-white/10 pl-4">
                  Never put a customer on hold again. The AI answers immediately, handles complex scheduling, and syncs directly with your CRM.
                </p>

                {/* Feature List */}
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 text-slate-300">
                    <div className="p-1 rounded-full bg-blue-500/20 text-blue-400"><Clock className="h-4 w-4" /></div>
                    <span className="font-medium">24/7/365 Instant Availability</span>
                  </li>
                  <li className="flex items-center gap-4 text-slate-300">
                    <div className="p-1 rounded-full bg-blue-500/20 text-blue-400"><Zap className="h-4 w-4" /></div>
                    <span className="font-medium">Zero-Latency Conversation</span>
                  </li>
                  <li className="flex items-center gap-4 text-slate-300">
                    <div className="p-1 rounded-full bg-blue-500/20 text-blue-400"><Database className="h-4 w-4" /></div>
                    <span className="font-medium">Real-time CRM Data Sync</span>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Outbound (Purple Theme) */}
          <Reveal delay={200}>
            <div className="group relative h-full rounded-[2.5rem] border border-white/10 bg-[#0A0A0A] p-8 md:p-12 overflow-hidden transition-all duration-500 hover:border-purple-500/50 hover:shadow-[0_0_60px_rgba(168,85,247,0.1)]">
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Icon Header */}
                <div className="flex justify-between items-start mb-10">
                  <div className="h-16 w-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                    <PhoneOutgoing className="h-8 w-8" />
                  </div>
                  <div className="px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-xs font-mono font-bold text-purple-300 uppercase tracking-widest">
                    Sales Team
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Outbound Reactivation</h3>
                <p className="text-slate-400 text-base leading-relaxed mb-10 border-l-2 border-white/10 pl-4">
                  Turn dead leads into cash. The AI calls your old database, qualifies interest, and transfers hot leads to your closers live.
                </p>

                {/* Feature List */}
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 text-slate-300">
                    <div className="p-1 rounded-full bg-purple-500/20 text-purple-400"><Users className="h-4 w-4" /></div>
                    <span className="font-medium">Lead Database Reactivation</span>
                  </li>
                  <li className="flex items-center gap-4 text-slate-300">
                    <div className="p-1 rounded-full bg-purple-500/20 text-purple-400"><Zap className="h-4 w-4" /></div>
                    <span className="font-medium">Sub-1 Minute Speed-to-Lead</span>
                  </li>
                  <li className="flex items-center gap-4 text-slate-300">
                    <div className="p-1 rounded-full bg-purple-500/20 text-purple-400"><CheckCircle2 className="h-4 w-4" /></div>
                    <span className="font-medium">Intelligent Lead Qualification</span>
                  </li>
                </ul>
              </div>
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
        headers: { "Content-Type": "application/json" },
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
    <section id="demo" className="relative py-12 md:py-32 bg-black overflow-hidden">
      
      {/* Dynamic Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none opacity-40 mix-blend-screen" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest animate-pulse">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              System Online
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
              Test the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Speed</span>.
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Enter your number. Our AI will call you within 10 seconds. <br />
              Experience the latency (or lack thereof) for yourself.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative">
            {/* The "Command Center" Card */}
            <div className="relative rounded-3xl border border-white/10 bg-[#0A0A0A]/90 backdrop-blur-xl p-8 md:p-12 shadow-2xl shadow-purple-900/20">
              
              {/* Card Header: Connectivity */}
              <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-6">
                <div className="flex items-center gap-3 text-slate-400">
                  <div className="p-2 rounded-lg bg-white/5">
                    <Wifi className="w-5 h-5 text-emerald-500" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider">Connection: Stable</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                  <Lock className="w-3 h-3" />
                  256-BIT ENCRYPTED
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Inputs Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Your Name</label>
                    <input
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      placeholder="John Johnson"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="johnjohnson@google.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                    />
                  </div>
                </div>

                {/* The Big Phone Input */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Phone Number (For the Call)</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-slate-500 group-focus-within:text-purple-400 transition-colors" />
                    </div>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-5 text-lg text-white placeholder:text-slate-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(147,51,234,0.1)] transition-all font-mono tracking-wide"
                    />
                  </div>
                </div>

                {/* Hidden/Optional Website Input */}
                <div className="space-y-2">
                   <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Website (Optional)</label>
                   <input
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="autofuseai.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-300 placeholder:text-slate-700 focus:outline-none focus:border-purple-500/50 transition-all"
                  />
                </div>

                {/* THE BUTTON */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={!isFormValid || isLoading}
                    className={`relative w-full overflow-hidden rounded-xl py-5 text-base font-bold text-white shadow-2xl transition-all duration-300
                      ${!isFormValid || isLoading 
                        ? "bg-slate-800 text-slate-500 cursor-not-allowed" 
                        : "bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-[length:200%_auto] hover:bg-[position:right_center] shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-[1.01]"}`
                    }
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isLoading ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          INITIATING CALL...
                        </>
                      ) : (
                        <>
                          <Zap className="h-5 w-5 fill-white" />
                          DEPLOY AI AGENT
                        </>
                      )}
                    </span>
                  </button>
                  
                  {/* Legal/Trust Text */}
                  <p className="mt-4 text-center text-[10px] text-slate-500">
                    By clicking "Deploy AI Agent", you agree to our <a href="/terms" className="underline hover:text-slate-300">Terms</a> & <a href="/privacy" className="underline hover:text-slate-300">Privacy Policy</a> and consent to the call being recorded for quality assurance.
                  </p>
                </div>

                {/* Success/Error States */}
                {status === "success" && (
                  <div className="flex items-center justify-center gap-2 rounded-lg bg-emerald-500/10 p-4 border border-emerald-500/20 animate-in fade-in slide-in-from-bottom-2">
                    <CheckCircle className="h-5 w-5 text-emerald-400" />
                    <span className="text-sm font-medium text-emerald-400">Agent dispatched. Watch your phone.</span>
                  </div>
                )}
                
                {status === "error" && (
                  <div className="flex items-center justify-center gap-2 rounded-lg bg-red-500/10 p-4 border border-red-500/20">
                    <span className="text-sm font-medium text-red-400">Connection failed. Please try again.</span>
                  </div>
                )}

              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

// --- The Main Section Component ---
const CaseStudiesSection: React.FC = () => {
  const outcomes = [
    {
      company: "Cooper Roofing",
      logo: "/logos/cooper.webp",
      industry: "Roofing",
      metric: "3 Jobs",
      metricLabel: "BOOKED / WEEK",
      metricColor: "text-emerald-400",
      glowColor: "group-hover:shadow-emerald-900/20",
      borderColor: "group-hover:border-emerald-500/30",
      timeframe: "Avg. over 4 weeks",
      before: "Missed calls during estimates",
      after: "24/7 booking coverage",
      kicker: "$2.40 avg cost per booked job",
      owner: "Shane Cooper",
      role: "Owner",
      audio: "/audio/cooper.mp3",
    },
    {
      company: "Cornerstone",
      logo: "/logos/cornerstone.webp",
      industry: "Landscaping",
      metric: "6 Jobs",
      metricLabel: "BOOKED",
      metricColor: "text-blue-400",
      glowColor: "group-hover:shadow-blue-900/20",
      borderColor: "group-hover:border-blue-500/30",
      timeframe: "First 30 days",
      before: "Quote requests sitting overnight",
      after: "Same-day callback on every lead",
      kicker: "73 inquiries handled w/o staff",
      owner: "Jordon Good",
      role: "Owner",
      audio: "/audio/cornerstone.mp3",
    },
    {
      company: "NC Homebuyers",
      logo: "/logos/nc-homebuyers.webp",
      industry: "Real Estate Inv.",
      metric: "41 Sellers",
      metricLabel: "QUALIFIED",
      metricColor: "text-purple-400",
      glowColor: "group-hover:shadow-purple-900/20",
      borderColor: "group-hover:border-purple-500/30",
      timeframe: "60 Days",
      before: "Team buried in tire-kickers",
      after: "Only motivated sellers hit inbox",
      kicker: "2 wholesale deals closed from AI",
      owner: "Kevin Ramirez",
      role: "Acquisitions Lead",
      audio: "/audio/nc-homebuyers.mp3",
    },
    {
      company: "Grey Street Dentist",
      logo: "/logos/grey-street.webp",
      industry: "Dental Practice",
      metric: "0%",
      metricLabel: "MISSED CALLS",
      metricColor: "text-cyan-400",
      glowColor: "group-hover:shadow-cyan-900/20",
      borderColor: "group-hover:border-cyan-500/30",
      timeframe: "Month 1",
      before: "37% of calls going unanswered",
      after: "Every single call picked up",
      kicker: "28 new patients added to books",
      owner: "Dr. Hyun Soo Yu",
      role: "Practice Owner",
      audio: "/audio/grey-street.mp3",
    }
  ];

  return (
    <section id="case-studies" className="relative bg-[#030303] py-12 md:py-40 overflow-hidden">
      
      {/* Abstract Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent pointer-events-none" />

      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <Reveal>
          <div className="mb-20 md:mb-32 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-purple-500/30 bg-purple-500/10 text-[10px] font-mono font-bold uppercase tracking-widest text-purple-300">
              <Activity className="w-3 h-3" />
              Exposed Pipelines
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[0.95] mb-8">
              We don't sell agents. <br />
              <span className="text-slate-500">We sell booked calendars.</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed border-l-2 border-purple-500/50 pl-6">
              Every metric below came from a live agent we built. <br />
              Every number is verified. Listen for yourself.
            </p>
          </div>
        </Reveal>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {outcomes.map((item, index) => (
            <Reveal key={item.company} delay={index * 100}>
              <div className={`group relative flex flex-col h-full rounded-[2rem] border border-white/10 bg-[#080808] p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${item.borderColor} ${item.glowColor}`}>
                
                {/* Header: Logo & Badge */}
                <div className="flex justify-between items-start mb-10">
                  <div className="relative h-12 w-40 opacity-90 transition-opacity group-hover:opacity-100">
                     <Image 
                         src={item.logo} 
                         alt={item.company} 
                         fill
                         className="object-contain object-left"
                      />
                  </div>
                  <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    {item.industry}
                  </div>
                </div>

                {/* Hero Metric Section */}
                <div className="mb-10">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className={`text-6xl md:text-7xl font-bold tracking-tighter ${item.metricColor}`}>
                      {item.metric}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-mono font-medium text-slate-500 uppercase tracking-widest">
                    {item.metricLabel}
                    <span className="w-1 h-1 rounded-full bg-slate-700" />
                    {item.timeframe}
                  </div>
                </div>

                {/* Transformation Line */}
                <div className="mb-8 p-6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-white/10 to-transparent" />
                  <div className="flex flex-col gap-4 relative z-10">
                    <div className="flex items-center gap-3 text-sm text-slate-500 line-through decoration-slate-600/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500/50" />
                      {item.before}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-white font-medium">
                      <ArrowRight className="w-4 h-4 text-emerald-500" />
                      {item.after}
                    </div>
                  </div>
                </div>

                {/* Footer: Kicker & Audio */}
                <div className="mt-auto flex flex-col gap-6">
                  {/* Kicker Stat */}
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-slate-600" />
                    <span className="text-xs md:text-sm font-mono text-slate-400 uppercase tracking-wide">
                      {item.kicker}
                    </span>
                  </div>

                  {/* Audio & Attribution Row */}
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-sm font-bold text-white border border-white/10">
                        {item.owner.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 text-sm font-bold text-white">
                          {item.owner}
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-500/10" />
                        </div>
                        <div className="text-[10px] text-slate-500 uppercase font-mono tracking-wider">
                          {item.role}
                        </div>
                      </div>
                    </div>

                    <div className="shrink-0">
                      <DashboardAudioPlayer src={item.audio} />
                    </div>
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

// --- New "Dashboard" Style Audio Player ---
const DashboardAudioPlayer: React.FC<{ src: string }> = ({ src }) => {
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
    return () => audio.removeEventListener("ended", handleEnded);
  }, []);

  return (
    <button 
      onClick={togglePlay}
      className={`relative group flex items-center gap-3 pl-1 pr-4 py-1 rounded-full border transition-all duration-300 ${isPlaying ? 'bg-white/10 border-purple-500/50' : 'bg-transparent border-white/10 hover:bg-white/5 hover:border-white/20'}`}
    >
      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isPlaying ? 'bg-purple-500 text-white' : 'bg-white text-black'}`}>
        {isPlaying ? (
          <Pause className="w-3 h-3 fill-current" />
        ) : (
          <Play className="w-3 h-3 fill-current ml-0.5" />
        )}
      </div>
      
      <div className="flex flex-col items-start">
        <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">
          {isPlaying ? "Playing..." : "Hear Agent"}
        </span>
        {/* Fake waveform animation when playing */}
        {isPlaying && (
           <div className="flex gap-0.5 h-2 items-end">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-0.5 bg-purple-400 animate-voice-wave" style={{animationDelay: `${i*0.1}s`}} />
              ))}
           </div>
        )}
      </div>
      <audio ref={audioRef} src={src} preload="none" />
    </button>
  );
};

const FounderSection: React.FC = () => {
  return (
    <section className="relative bg-[#050505] py-12 md:py-32 overflow-hidden border-t border-white/5">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image & Stats */}
          <Reveal>
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 blur-2xl rounded-full opacity-50" />
              
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 aspect-[4/5] max-w-md mx-auto lg:mx-0">
                {/* PLACEHOLDER: Replace src with "/taha.jpg" once uploaded */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <Image 
                  src="/taha.webp" // <--- Make sure to upload your photo!
                  alt="Taha - Founder of AutoFuse AI"
                  fill
                  className="object-cover"
                />
                
                {/* Floating "Verified" Card */}
                <div className="absolute bottom-6 left-6 right-6 z-20 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Proven Track Record</span>
                    <div className="flex text-yellow-400 gap-0.5">
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                      <Trophy className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Top 1% Talent</p>
                      <p className="text-xs text-slate-400">100% Job Success Score</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: The Narrative */}
          <Reveal delay={200}>
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-[10px] font-mono font-bold uppercase tracking-widest text-blue-300">
                  <User className="w-3 h-3" />
                  Meet The Founder
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                  I don't build chatbots. <br />
                  <span className="text-slate-500">I build receptionists that never miss.</span>
                </h2>
                <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                  <p>
                    Hi, I'm Taha. I spent years as a Top Rated AI automation freelancer, helping 20+ businesses integrate AI & stop losing jobs to voicemail.
                  </p>
                  <p>
                    Most AI sounds like AI. Robotic pauses. Scripted responses. Falls apart the second a caller goes off-script or asks something unexpected. 
                    <strong className="text-white"> That is a mistake.</strong>
                  </p>
                  <p>
                    Mine don't. I build voice agents that handle interruptions, answer real questions about your services, and book estimates directly into your calendar, no human needed.
                  </p>
                </div>
              </div>

              {/* The "Why Me" Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <h4 className="text-white font-bold mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                    Certified Expert
                  </h4>
                  <p className="text-sm text-slate-500">Ranked top 10% of Upwork freelancers worldwide.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <h4 className="text-white font-bold mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                    Quality Obsessed
                  </h4>
                  <p className="text-sm text-slate-500">Your full satisfaction is my priority.</p>
                </div>
              </div>

              <div className="pt-6">
                <p className="text-sm text-slate-500 font-mono mb-4">
                  SPECIALIZED INDUSTRIES:
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Roofing", "Landscaping", "HVAC", "Plumbing"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      icon: <FileSearch className="w-6 h-6 text-blue-400" />,
      title: "Analysis",
      desc: "We look at your current call process. We identify exactly where you are losing leads and design the perfect solution.",
      border: "hover:border-blue-500/50",
      glow: "group-hover:shadow-blue-900/20"
    },
    {
      num: "02",
      icon: <Workflow className="w-6 h-6 text-purple-400" />,
      title: "Build",
      desc: "We build your custom AI agent. We create the script, clone the voice, and connect it directly to your calendar and CRM.",
      border: "hover:border-purple-500/50",
      glow: "group-hover:shadow-purple-900/20"
    },
    {
      num: "03",
      icon: <Rocket className="w-6 h-6 text-emerald-400" />,
      title: "Launch",
      desc: "We go live. Your AI starts answering calls, qualifying prospects, and booking appointments 24/7. You just watch the results.",
      border: "hover:border-emerald-500/50",
      glow: "group-hover:shadow-emerald-900/20"
    },
  ];

  const calUrl = "https://cal.com/taha-issaoui-g9ve4z/discovery";

  return (
    <section id="process" className="relative bg-[#050505] py-12 md:py-32 overflow-hidden">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                How It <span className="text-slate-500">Works</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                We keep it simple. From our first call to your first AI booking in less than <span className="text-white font-bold">72 hours.</span>
              </p>
            </div>
            <a
                href={calUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden md:flex items-center gap-3 text-sm font-bold text-slate-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
            >
                Start the process <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 100}>
                <div className={`group relative h-full rounded-[2rem] border border-white/10 bg-[#0A0A0A] p-8 transition-all duration-500 hover:-translate-y-2 ${step.border} ${step.glow}`}>
                    
                    {/* Giant Number Background */}
                    <div className="absolute right-4 top-4 text-8xl font-bold text-white/[0.03] select-none pointer-events-none group-hover:text-white/[0.05] transition-colors">
                        {step.num}
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                        <div className="mb-6 p-3 w-fit rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            {step.icon}
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed mb-8">
                            {step.desc}
                        </p>

                        <div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-widest">
                            <span>Step {step.num}</span>
                            <div className="flex-1 h-px bg-white/10" />
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

const FinalCTASection: React.FC = () => {
  const calUrl = "https://cal.com/taha-issaoui-g9ve4z/discovery";

  return (
    <section className="relative overflow-hidden bg-black py-12 md:py-40">
        
        {/* The "Warp Speed" Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black opacity-80" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20" />
        
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <div className="space-y-10">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-purple-600">Grow?</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed">
              Join the businesses using AutoFuse AI to answer every call and close more deals.
            </p>
            
            <div className="flex flex-col items-center gap-6 pt-8">
              <a
                href={calUrl}
                target="_blank"
                rel="noreferrer"
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-200" />
                <button className="relative px-12 py-5 bg-white text-black rounded-full text-lg font-bold tracking-wide transition-transform group-hover:scale-[1.02] active:scale-[0.98]">
                    Book Your Free Audit
                </button>
              </a>
              <p className="text-xs text-slate-600 uppercase tracking-widest">
                  No commitment required • 15-Min Intro Call
              </p>
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
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          
          {/* --- UPDATED LOGO SECTION --- */}
          <div className="flex items-center gap-0">
            <div className="relative h-8 w-8 transition-transform hover:scale-105">
               <Image 
                 src="/header-logo.png" 
                 alt="AutoFuse AI Logo"
                 fill
                 className="object-contain"
               />
            </div>
            <span className="text-sm md:text-base font-bold text-slate-200">
              AutoFuse AI
            </span>
          </div>
          {/* --------------------------- */}

          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-8 text-center text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Aleekto Ltd t/a AutoFuse AI. All rights reserved.</p>
          <p className="mt-2">71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</p>
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
