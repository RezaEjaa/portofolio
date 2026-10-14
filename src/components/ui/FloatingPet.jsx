/**
 * FloatingPet — bottom-bar walking pet
 * • Enters from off-screen left on load
 * • 2-foot walk animation, body bobs
 * • Touches both screen edges (pixel-based boundary)
 * • Auto actions: sit, lookLeft, lookRight, sleep, spin
 * • Click → jump + speech bubble (plain text)
 * • Random auto-speech
 */
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── SVG: 2 feet ──────────────────────────────────────────────────────── */
function PetBody({ expr, step, action, blinking }) {
  const sleeping  = action === "sleep";
  const sitting   = action === "sit" || sleeping;
  const lookLeft  = action === "lookLeft";
  const lookRight = action === "lookRight";
  const isHappy   = expr === "happy";
  const isTalk    = expr === "talking";
  const isSleepy  = expr === "sleepy" || sleeping;
  const eyeShift  = lookLeft ? -4 : lookRight ? 4 : 0;

  // 2-foot alternating Y
  const fL = step === 0 ?  0 : -5;
  const fR = step === 0 ? -5 :  0;

  return (
    <svg viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full" aria-hidden="true">

      {/* shadow */}
      <ellipse cx="40" cy="94" rx="20" ry="3" fill="#000" opacity="0.08"/>

      {/* body */}
      <path
        d={sitting
          ? "M13 46C13 26 22 12 40 12C58 12 67 26 67 46L67 70C67 76 62 81 55 81L25 81C18 81 13 76 13 70Z"
          : "M11 42C11 20 21 6 40 6C59 6 69 20 69 42L69 70C69 77 64 84 57 84L23 84C16 84 11 77 11 70Z"}
        fill="white" stroke="#000" strokeWidth="3"
      />

      {/* ears */}
      <ellipse cx="22" cy={sitting?17:13} rx="6" ry="8" fill="white" stroke="#000" strokeWidth="2.5"/>
      <ellipse cx="58" cy={sitting?17:13} rx="6" ry="8" fill="white" stroke="#000" strokeWidth="2.5"/>
      <ellipse cx="22" cy={sitting?15:11} rx="3" ry="4.5" fill="#ffbce2"/>
      <ellipse cx="58" cy={sitting?15:11} rx="3" ry="4.5" fill="#ffbce2"/>

      {/* eyes */}
      {isSleepy ? (
        <>
          <path d={`M${24+eyeShift} 37 Q${30+eyeShift} 32 ${36+eyeShift} 37`}
            stroke="#000" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          <path d={`M${44+eyeShift} 37 Q${50+eyeShift} 32 ${56+eyeShift} 37`}
            stroke="#000" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        </>
      ) : blinking ? (
        <>
          <path d={`M${25+eyeShift} 36 L${35+eyeShift} 36`} stroke="#000" strokeWidth="3" strokeLinecap="round"/>
          <path d={`M${45+eyeShift} 36 L${55+eyeShift} 36`} stroke="#000" strokeWidth="3" strokeLinecap="round"/>
        </>
      ) : (
        <>
          <ellipse cx={30+eyeShift} cy={sitting?38:36} rx="5" ry={isTalk?3.5:5} fill="#000"/>
          <ellipse cx={50+eyeShift} cy={sitting?38:36} rx="5" ry={isTalk?3.5:5} fill="#000"/>
          <circle  cx={32+eyeShift} cy={sitting?36:34} r="1.5" fill="white"/>
          <circle  cx={52+eyeShift} cy={sitting?36:34} r="1.5" fill="white"/>
        </>
      )}

      {/* blush */}
      <ellipse cx="19" cy={sitting?50:47} rx="4.5" ry="3" fill="#ffbce2" opacity={isHappy?0.9:0.5}/>
      <ellipse cx="61" cy={sitting?50:47} rx="4.5" ry="3" fill="#ffbce2" opacity={isHappy?0.9:0.5}/>

      {/* mouth */}
      {!sleeping && (
        isTalk  ? <ellipse cx="40" cy={sitting?55:54} rx="5" ry="4" fill="#000"/> :
        isHappy ? <path d="M30 52 Q40 63 50 52" stroke="#000" strokeWidth="2.5" strokeLinecap="round" fill="none"/> :
        isSleepy? <path d="M34 55 Q40 59 46 55" stroke="#000" strokeWidth="2"   strokeLinecap="round" fill="none"/> :
                  <path d="M33 53 Q40 50 47 53" stroke="#000" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      )}

      {/* ── 2 FEET ── */}
      {sitting ? (
        <>
          <ellipse cx="30" cy="83" rx="10" ry="6" fill="white" stroke="#000" strokeWidth="3"/>
          <ellipse cx="50" cy="83" rx="10" ry="6" fill="white" stroke="#000" strokeWidth="3"/>
        </>
      ) : (
        <>
          <ellipse cx="27" cy={84+fL} rx="9" ry="6" fill="white" stroke="#000" strokeWidth="3"/>
          <ellipse cx="53" cy={84+fR} rx="9" ry="6" fill="white" stroke="#000" strokeWidth="3"/>
        </>
      )}

      {/* zzz */}
      {sleeping && (
        <>
          <text x="60" y="30" fontSize="9"  fill="#725feb" fontWeight="bold" opacity="0.9">z</text>
          <text x="65" y="21" fontSize="12" fill="#725feb" fontWeight="bold" opacity="0.7">z</text>
          <text x="71" y="11" fontSize="15" fill="#725feb" fontWeight="bold" opacity="0.5">z</text>
        </>
      )}
    </svg>
  );
}

/* ─── Speech bubble ────────────────────────────────────────────────────── */
function Bubble({ text, flipped }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.7 }}
      animate={{ opacity: 1, y: 0,  scale: 1 }}
      exit={{    opacity: 0, y: 10, scale: 0.8 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      style={{ transform: `scaleX(${flipped ? -1 : 1})` }}
      className="absolute bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap pointer-events-none z-10"
    >
      <div className="relative rounded-2xl border-2 border-ink bg-white px-3.5 py-2 text-[13px] font-bold text-ink shadow-hard-sm">
        {text}
        <span className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 border-l-[7px] border-r-[7px] border-t-[10px] border-l-transparent border-r-transparent border-t-black"/>
        <span className="absolute -bottom-[7px]  left-1/2 -translate-x-1/2 border-l-[5px] border-r-[5px] border-t-[7px]  border-l-transparent border-r-transparent border-t-white"/>
      </div>
    </motion.div>
  );
}

/* ─── Constants ─────────────────────────────────────────────────────────── */
const PHRASES = [
  "Hallo", "Semangat", "Hai", "Hei",
  "Selamat datang",
  "Klik aku lagi",
  "Terima kasih sudah mampir",
  "Tetap semangat",
  "Sudah capek? Istirahat dulu",
  "Kamu pasti bisa",
  "Lagi scroll apa?",
  "Psst, lihat ke bawah",
  "Jangan lupa minum air",
  "Semangat terus ya",
];

const AUTO_ACTIONS = [
  { id: "walk",      weight: 6 },
  { id: "sit",       weight: 2 },
  { id: "lookLeft",  weight: 1 },
  { id: "lookRight", weight: 1 },
  { id: "sleep",     weight: 1 },
  { id: "spin",      weight: 1 },
];
const pickAction = () => {
  const pool = AUTO_ACTIONS.flatMap((a) => Array(a.weight).fill(a.id));
  return pool[Math.floor(Math.random() * pool.length)];
};
const ACTION_DUR = { sit: 5000, lookLeft: 2500, lookRight: 2500, sleep: 7000, spin: 700 };

const PET_W = 80; // px, matches w-20

// pixel boundary helpers
const getMaxX  = () => (typeof window !== "undefined" ? window.innerWidth - PET_W : 800);
const clampX   = (v) => Math.max(0, Math.min(v, getMaxX()));
const randomX  = () => clampX(Math.random() * (getMaxX() + 1));

/* ─── Component ─────────────────────────────────────────────────────────── */
export default function FloatingPet() {
  // position in PIXELS so boundary math is exact
  const [xPx,     setXPx]    = useState(-PET_W);
  const [entered, setEntered]= useState(false);

  const [facing,   setFacing]  = useState(true);
  const [step,     setStep]    = useState(0);
  const [action,   setAction]  = useState("walk");
  const [expr,     setExpr]    = useState("normal");
  const [paused,   setPaused]  = useState(false);
  const [jumping,  setJumping] = useState(false);
  const [bubble,   setBubble]  = useState(null);
  const [blinking, setBlink]   = useState(false);

  // refs hold live values for RAF / setTimeout closures
  const xRef      = useRef(-PET_W);
  const targetRef = useRef(-PET_W);
  const pausedRef = useRef(false);
  const rafRef    = useRef(null);
  const stepRef   = useRef(null);
  const actionRef = useRef(null);
  const bubbleRef = useRef(null);
  const blinkRef  = useRef(null);

  useEffect(() => { pausedRef.current = paused; }, [paused]);

  /* helper: move to new x target */
  const moveTo = useCallback((nx, faceDir) => {
    const clamped = clampX(nx);
    targetRef.current = clamped;
    if (faceDir !== undefined) setFacing(faceDir);
    else setFacing(clamped >= xRef.current);
  }, []);

  /* ── 1. RAF drift ────────────────────────────────────────── */
  useEffect(() => {
    const SPEED = 0.007;
    const tick = () => {
      if (!pausedRef.current) {
        const diff = targetRef.current - xRef.current;
        if (Math.abs(diff) > 0.4) {
          xRef.current += diff * SPEED;
          setXPx(xRef.current);
        } else {
          xRef.current = targetRef.current;
          setXPx(targetRef.current);
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  /* ── 2. Intro: walk in from left ────────────────────────── */
  useEffect(() => {
    const t1 = setTimeout(() => {
      const land = clampX(60 + Math.random() * (getMaxX() * 0.35));
      moveTo(land, true);
      const t2 = setTimeout(() => setEntered(true), 5500);
      return () => clearTimeout(t2);
    }, 700);
    return () => clearTimeout(t1);
  }, [moveTo]);

  /* ── 3. Step bob ─────────────────────────────────────────── */
  useEffect(() => {
    stepRef.current = setInterval(() => {
      if (!pausedRef.current) setStep((s) => 1 - s);
    }, 420);
    return () => clearInterval(stepRef.current);
  }, []);

  /* ── 4. Auto-action scheduler ───────────────────────────── */
  useEffect(() => {
    if (!entered) return;
    const schedule = () => {
      actionRef.current = setTimeout(() => {
        const picked = pickAction();
        if (picked === "walk") {
          const nx = randomX();
          moveTo(nx);
          setAction("walk"); setExpr("normal"); setPaused(false);
          schedule();
        } else if (picked === "spin") {
          setPaused(true); setAction("spin");
          setTimeout(() => {
            setAction("walk"); setPaused(false);
            moveTo(randomX()); schedule();
          }, ACTION_DUR.spin);
        } else {
          setPaused(true); setAction(picked);
          setExpr(picked === "sleep" ? "sleepy" : "normal");
          setTimeout(() => {
            setPaused(false); setAction("walk"); setExpr("normal");
            moveTo(randomX()); schedule();
          }, ACTION_DUR[picked] || 3000);
        }
      }, 3500 + Math.random() * 5000);
    };
    schedule();
    return () => clearTimeout(actionRef.current);
  }, [entered, moveTo]);

  /* ── 5. Speech ───────────────────────────────────────────── */
  const showBubble = useCallback((text, dur = 2800) => {
    clearTimeout(bubbleRef.current);
    setBubble(text); setExpr("talking");
    setTimeout(() => setExpr("happy"), Math.min(1100, dur * 0.4));
    bubbleRef.current = setTimeout(() => { setBubble(null); setExpr("normal"); }, dur);
  }, []);

  useEffect(() => {
    if (!entered) return;
    const schedule = () => {
      bubbleRef.current = setTimeout(() => {
        showBubble(PHRASES[Math.floor(Math.random() * PHRASES.length)], 3000);
        schedule();
      }, 10000 + Math.random() * 12000);
    };
    schedule();
    return () => clearTimeout(bubbleRef.current);
  }, [entered, showBubble]);

  /* ── 6. Blink ────────────────────────────────────────────── */
  useEffect(() => {
    const go = () => {
      blinkRef.current = setTimeout(() => {
        setBlink(true);
        setTimeout(() => { setBlink(false); go(); }, 130);
      }, 2500 + Math.random() * 3500);
    };
    go();
    return () => clearTimeout(blinkRef.current);
  }, []);

  /* ── 7. Click → jump ─────────────────────────────────────── */
  const handleClick = useCallback(() => {
    if (jumping) return;
    setJumping(true); setExpr("happy");
    showBubble(PHRASES[Math.floor(Math.random() * PHRASES.length)], 2200);
    setTimeout(() => { setJumping(false); setExpr("normal"); }, 600);
  }, [jumping, showBubble]);

  /* ── 8. Resize: re-clamp ─────────────────────────────────── */
  useEffect(() => {
    const onResize = () => {
      const cx = clampX(xRef.current);
      xRef.current = cx; setXPx(cx);
      targetRef.current = clampX(targetRef.current);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const bodyBob = (!paused && step === 0) ? -4 : 0;

  return (
    <div
      className="pointer-events-none fixed bottom-0 left-0 right-0 z-50"
      style={{ height: 96 }}
      aria-label="Site mascot"
    >
      <motion.div
        className="pointer-events-auto absolute bottom-0"
        /* left in px — touches true screen edges */
        style={{ width: PET_W, left: xPx }}
        animate={jumping ? { y: [-2, -30, -30, -2, 0] } : { y: bodyBob }}
        transition={
          jumping
            ? { duration: 0.55, ease: [0.22, 1, 0.36, 1], times: [0, 0.3, 0.5, 0.85, 1] }
            : { duration: 0.12, ease: "linear" }
        }
      >
        <motion.div
          animate={action === "spin" ? { rotate: [0, 360] } : { rotate: 0 }}
          transition={action === "spin" ? { duration: 0.6, ease: "easeInOut" } : {}}
          style={{ scaleX: facing ? 1 : -1, display: "block", transformOrigin: "center" }}
        >
          {/* bubble: counter-flip so text stays readable */}
          <div style={{ transform: `scaleX(${facing ? 1 : -1})` }}>
            <AnimatePresence>
              {bubble && <Bubble text={bubble} flipped={!facing} />}
            </AnimatePresence>
          </div>

          <div
            className="w-20 h-20 cursor-pointer select-none"
            style={{ filter: "drop-shadow(3px 3px 0 rgba(0,0,0,0.8))" }}
            onClick={handleClick}
          >
            <PetBody expr={expr} step={step} action={action} blinking={blinking} />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
