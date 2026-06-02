import { useState, useEffect } from 'react';
import { FloatingHearts } from '../components/FloatingHearts';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';
import {
  HelpCircle,
  ArrowLeft,
  SkipForward,
  MoveRight,
  HeartCrack,
  ListChecks,
  CheckSquare,
  FileText,
  Smile,
  Zap,
  LockOpen,
  PenTool,
  Send,
  Heart,
  Coffee,
  ThumbsUp,
  Camera,
  ArrowRight,
  Gift,
  Wind
} from 'lucide-react';

export const SkipGauntlet = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  // ---- Per-step state ----
  const [sliderVal, setSliderVal] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(320); // starts small
  const [pumpPressure, setPumpPressure] = useState(0);
  const [isPumping, setIsPumping] = useState(false);
  const [checks, setChecks] = useState<boolean[]>(Array(10).fill(false));
  const [checkboxTrickPlayed, setCheckboxTrickPlayed] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState('');
  const [toggleOn, setToggleOn] = useState(false);
  const [giveUpText, setGiveUpText] = useState('');
  const [loveRating, setLoveRating] = useState(5);
  const [confirmed, setConfirmed] = useState(false);
  const [btnOffset, setBtnOffset] = useState({ x: 0, y: 0 });


  const nextStep = () => {
    if (step >= 10) {
      navigate('/AlifetoLive');
    } else {
      setStep((s) => s + 1);
    }
  };

  // Slider for step 2: doubles card width when she gets close to 80%
  const handleSliderChange = (val: number) => {
    if (val >= 80 && sliderWidth === 320) {
      setSliderWidth(640);
      setSliderVal(40); // drops handle relative position back to 40%
      return;
    }
    if (val >= 80 && sliderWidth === 640) {
      setSliderWidth(1200);
      setSliderVal(43); // drops handle relative position back to 43%
      return;
    }
    setSliderVal(val);
    if (val >= 98 && sliderWidth === 1200) {
      nextStep();
    }
  };

  // Pump logic for step 3: leaks air over time
  useEffect(() => {
    if (step !== 3) return;

    const interval = setInterval(() => {
      setPumpPressure((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.max(0, p - 1.8); // leaks 1.8% every 100ms
      });
    }, 100);

    return () => clearInterval(interval);
  }, [step]);

  const handlePumpClick = () => {
    setIsPumping(true);
    setTimeout(() => setIsPumping(false), 80);
    setPumpPressure((p) => {
      const nextP = Math.min(100, p + 9);
      if (nextP >= 100) {
        setTimeout(() => {
          nextStep();
          setPumpPressure(0);
        }, 150);
      }
      return nextP;
    });
  };

  const floatAway = () => {
    // Generate a random translation offset to escape the cursor
    const newX = (Math.random() - 0.5) * 300; // -150px to 150px
    const newY = (Math.random() - 0.5) * 200; // -100px to 100px
    setBtnOffset({ x: newX, y: newY });
  };

  const renderStep = () => {
    switch (step) {
      /* ---- STEP 1: Big Button ---- */
      case 1:
        return (
          <>
            <HelpCircle size={48} className="animate-pulse" style={{ color: 'var(--pink-500)', marginBottom: '1rem' }} />
            <h2 style={{ marginBottom: '1rem' }}>
              Are you SURE you want to skip the puzzle?
            </h2>
            <p style={{ marginBottom: '2rem' }}>
              You know, the puzzle was made with love… just like everything
              else here.
            </p>
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <button
                className="btn btn-primary"
                onClick={() => window.history.back()}
              >
                <ArrowLeft size={18} /> Go Back to Puzzle
              </button>
              <button className="btn btn-secondary" onClick={nextStep}>
                <SkipForward size={18} /> Yes, Skip It
              </button>
            </div>
          </>
        );

      /* ---- STEP 2: Slider that stretches over the card ---- */
      case 2:
        return (
          <>
            <MoveRight size={48} style={{ color: 'var(--pink-500)', marginBottom: '1rem' }} />
            <h2 style={{ marginBottom: '1rem' }}>
              Slide to confirm you're a quitter
            </h2>
            <p style={{ marginBottom: '1.5rem', minHeight: '3rem' }}>
              {sliderWidth === 320 && 'Go ahead… if you dare.'}
              {sliderWidth === 640 && 'Whoa! The card just doubled! 🤨'}
              {sliderWidth === 1200 && 'Stretching to the max! Catch it if you can! 😱'}
            </p>
            <div style={{ padding: '0 0.5rem', marginBottom: '1.5rem', width: '100%' }}>
              <input
                type="range"
                min="0"
                max="100"
                value={sliderVal}
                onChange={(e) => handleSliderChange(Number(e.target.value))}
                style={{ width: '100%' }}
              />
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>
              Slide all the way to the right →
            </p>
          </>
        );

      /* ---- STEP 3: Pump Air challenge ---- */
      case 3:
        return (
          <>
            <HeartCrack
              size={64}
              className="animate-pulse"
              style={{ color: 'var(--pink-500)', marginBottom: '1rem' }}
            />
            <h2 style={{ marginBottom: '1rem' }}>
              But… I worked SO hard on this puzzle for you
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Do you know how many hours went into hiding those QR codes? My
              fingers are still cramping…
            </p>

            {/* Balloon / Air Leak visual container */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
              position: 'relative'
            }}>
              {/* Balloon */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                <svg
                  viewBox="0 0 24 24"
                  style={{
                    width: '60px',
                    height: '60px',
                    fill: 'var(--pink-400)',
                    stroke: 'var(--pink-500)',
                    strokeWidth: 1.5,
                    transform: `scale(${0.6 + (pumpPressure / 150)})`,
                    transition: 'transform 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  }}
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>

              {/* Bicycle Pump */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <svg width="60" height="90" viewBox="0 0 60 90" style={{ overflow: 'visible' }}>
                  {/* Pump hose line */}
                  <path
                    d="M 38 80 Q 55 80 50 35 Q 45 -10 30 10"
                    fill="none"
                    stroke="var(--text-light)"
                    strokeWidth="2"
                    strokeDasharray="4 2"
                  />
                  {/* Base */}
                  <rect x="10" y="80" width="40" height="8" rx="4" fill="var(--text-dark)" />
                  {/* Barrel */}
                  <rect x="22" y="35" width="16" height="45" rx="2" fill="var(--pink-300)" stroke="var(--pink-500)" strokeWidth="2" />
                  {/* Rod */}
                  <line
                    x1="30"
                    y1={isPumping ? "35" : "15"}
                    x2="30"
                    y2="37"
                    stroke="var(--text-medium)"
                    strokeWidth="4"
                    style={{ transition: 'all 0.08s ease' }}
                  />
                  {/* Handle */}
                  <rect
                    x="12"
                    y={isPumping ? "29" : "9"}
                    width="36"
                    height="8"
                    rx="4"
                    fill="var(--pink-600)"
                    style={{ transition: 'all 0.08s ease' }}
                  />
                </svg>
              </div>
            </div>

            <div style={{
              width: '100%',
              height: '16px',
              background: 'rgba(252, 231, 243, 0.5)',
              borderRadius: 'var(--radius-full)',
              overflow: 'hidden',
              border: '1.5px solid var(--pink-200)',
              marginBottom: '0.75rem',
              position: 'relative'
            }}>
              <div style={{
                width: `${pumpPressure}%`,
                height: '100%',
                background: 'linear-gradient(90deg, var(--pink-400), var(--pink-500))',
                transition: 'width 0.08s linear',
                borderRadius: 'var(--radius-full)'
              }} />
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-light)', marginBottom: '1.5rem' }}>
              ⚠️ The balloon is leaking air! Pump fast! ⚠️
            </p>

            <button
              className="btn btn-primary"
              onClick={handlePumpClick}
              style={{ gap: '0.5rem' }}
            >
              <Wind size={18} className="animate-bounce" /> Pump Balloon! 💨
            </button>
          </>
        );

      /* ---- STEP 4: Checkboxes ---- */
      case 4:
        return (
          <>
            <ListChecks size={48} style={{ color: 'var(--pink-500)', marginBottom: '1rem' }} />
            <h2 style={{ marginBottom: '1.5rem' }}>
              Confirm ALL to proceed
            </h2>
            
            {checkboxTrickPlayed && !checks.every(Boolean) && (
              <p style={{ color: 'var(--pink-500)', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: 500 }} className="animate-fade-in">
                Wait... did they just all uncheck themselves? 😲 Try checking them all again!
              </p>
            )}

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem',
                marginBottom: '1.5rem',
                textAlign: 'left',
              }}
            >
              {[
                "I'm too lazy for puzzles 🥱",
                "I prefer eating croissants over finding clues 🥐",
                "My curly hair is too fabulous for this stress 🧕✨",
                "I choose sleep over adventure 😴",
                "I'd rather be watching a movie with you right now 🎬🍿",
                "I want the easy way out 🤷‍♀️",
                "I promise to look at the letter later ✍️",
                "I acknowledge that I am skipping the best puzzle ever 💔",
                "I don't appreciate Aun's hard work (completely false but I'll check it anyway) 🥺",
                "I hereby declare myself a certified puzzle quitter 🏆",
              ].map((label, i) => (
                <label key={i} className="cute-checkbox">
                  <input
                    type="checkbox"
                    checked={checks[i]}
                    onChange={() => {
                      setChecks((prev) => {
                        const next = [...prev];
                        const wasChecked = prev[i];
                        next[i] = !next[i];

                        // Count how many were checked before this toggle
                        const checkedCountBefore = prev.filter(Boolean).length;

                        // If 9 checkboxes were checked, and she is checking the 10th one, trigger trick
                        if (checkedCountBefore === 9 && !wasChecked && !checkboxTrickPlayed) {
                          const reset = Array(10).fill(false);
                          reset[i] = true;
                          setCheckboxTrickPlayed(true);
                          return reset;
                        }

                        return next;
                      });
                    }}
                  />
                  {label}
                </label>
              ))}
            </div>
            <button
              className="btn btn-primary"
              disabled={!checks.every(Boolean)}
              onClick={nextStep}
            >
              <CheckSquare size={18} /> I Accept My Fate
            </button>
          </>
        );

      /* ---- STEP 5: Radio buttons ---- */
      case 5:
        return (
          <>
            <FileText size={48} style={{ color: 'var(--pink-500)', marginBottom: '1rem' }} />
            <h2 style={{ marginBottom: '1.5rem' }}>Pick your excuse</h2>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem',
                marginBottom: '1.5rem',
                textAlign: 'left',
              }}
            >
              {[
                "I'm too pretty for puzzles 💅",
                "My brain needs beauty sleep 😴",
                "I ate too many croissants to think 🥐",
                "The hijab is too fabulous today 🧕✨",
              ].map((label) => (
                <label key={label} className="cute-radio">
                  <input
                    type="radio"
                    name="excuse"
                    value={label}
                    checked={selectedRadio === label}
                    onChange={() => setSelectedRadio(label)}
                  />
                  {label}
                </label>
              ))}
            </div>
            <button
              className="btn btn-primary"
              disabled={!selectedRadio}
              onClick={nextStep}
            >
              <Smile size={18} /> That's My Story
            </button>
          </>
        );

      /* ---- STEP 6: Toggle ---- */
      case 6:
        return (
          <>
            <Zap size={48} className="animate-bounce" style={{ color: 'var(--pink-500)', marginBottom: '1rem' }} />
            <h2 style={{ marginBottom: '1.5rem' }}>
              Toggle to accept defeat
            </h2>
            <p style={{ marginBottom: '2rem' }}>
              One small flip for you, one giant loss for puzzle-kind
            </p>
            <div className="toggle-container" style={{ marginBottom: '1.5rem' }}>
              <span>Fighter</span>
              <div
                className={`toggle ${toggleOn ? 'active' : ''}`}
                onClick={() => setToggleOn(!toggleOn)}
                role="switch"
                aria-checked={toggleOn}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setToggleOn(!toggleOn);
                }}
              />
              <span>Quitter</span>
            </div>
            {toggleOn && (
              <button
                className="btn btn-secondary animate-fade-in"
                onClick={nextStep}
              >
                <LockOpen size={18} /> Proceed as a quitter
              </button>
            )}
          </>
        );

      /* ---- STEP 7: Type "I give up" ---- */
      case 7:
        return (
          <>
            <PenTool size={48} style={{ color: 'var(--pink-500)', marginBottom: '1rem' }} />
            <h2 style={{ marginBottom: '1rem' }}>
              Type "I give up" to continue
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Go ahead. Say it. I dare you.
            </p>
            <input
              type="text"
              className="input-cute"
              value={giveUpText}
              onChange={(e) => setGiveUpText(e.target.value)}
              placeholder='Type "I give up"…'
              style={{ marginBottom: '1.25rem' }}
            />
            <button
              className="btn btn-primary"
              disabled={giveUpText.toLowerCase().trim() !== 'i give up'}
              onClick={nextStep}
            >
              <Send size={18} /> Submit My Defeat
            </button>
          </>
        );

      /* ---- STEP 8: Love rating slider ---- */
      case 8:
        return (
          <>
            <Heart size={48} className="animate-heartbeat" style={{ color: 'var(--pink-500)', fill: 'var(--pink-500)', marginBottom: '1rem' }} />
            <h2 style={{ marginBottom: '1rem' }}>
              Rate how much you love me
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              {loveRating < 10
                ? 'Hmm… are you sure? Only 10 unlocks the next step 😏'
                : "That's more like it! 🥰"}
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                justifyContent: 'center',
                marginBottom: '1rem',
                padding: '0 0.5rem',
              }}
            >
              <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>1</span>
              <input
                type="range"
                min="1"
                max="10"
                value={loveRating}
                onChange={(e) => setLoveRating(Number(e.target.value))}
                style={{ flex: 1 }}
              />
              <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>10</span>
            </div>
            <div
              style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}
              className="animate-pulse"
            >
              {loveRating >= 10
                ? '😍'
                : loveRating >= 7
                  ? '🥰'
                  : loveRating >= 4
                    ? '😐'
                    : '💔'}
            </div>
            <div
              style={{
                fontSize: '2rem',
                fontWeight: 700,
                color: 'var(--pink-500)',
                marginBottom: '1rem',
              }}
            >
              {loveRating}/10
            </div>
            {loveRating >= 10 && (
              <button
                className="btn btn-primary animate-fade-in"
                onClick={nextStep}
              >
                <Heart size={18} fill="currentColor" /> Continue with Full Love
              </button>
            )}
          </>
        );

      /* ---- STEP 9: Croissant confirmation ---- */
      case 9:
        return (
          <>
            <Coffee size={48} style={{ color: 'var(--pink-500)', marginBottom: '1rem' }} />
            <h2 style={{ marginBottom: '1rem' }}>
              Fine… but you owe me a croissant
            </h2>
            <p style={{ marginBottom: '2rem' }}>
              Actually, make that two. And a pain au chocolat. No, three
              croissants and a crème brûlée. Final offer.
            </p>
            {!confirmed ? (
              <button
                className="btn btn-primary"
                onClick={() => setConfirmed(true)}
              >
                <ThumbsUp size={18} /> I Promise!
              </button>
            ) : (
              <div className="animate-fade-in" style={{ textAlign: 'center' }}>
                <p
                  style={{
                    color: 'var(--pink-500)',
                    fontWeight: 600,
                    marginBottom: '1.25rem',
                    fontSize: '1rem',
                  }}
                >
                  <Camera size={16} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> Screenshot this as proof!
                </p>
                <button className="btn btn-secondary" onClick={nextStep}>
                  Alright, alright… next <ArrowRight size={18} />
                </button>
              </div>
            )}
          </>
        );

      /* ---- STEP 10: Final dramatic reveal ---- */
      case 10:
        return (
          <>
            <div
              style={{
                display: 'inline-flex',
                justifyContent: 'center',
                cursor: 'pointer',
                marginBottom: '1rem',
                position: 'relative',
                zIndex: 10
              }}
              onClick={nextStep}
              title="Click me to proceed!"
            >
              <Gift
                size={48}
                className="animate-heartbeat"
                style={{ color: 'var(--pink-500)' }}
              />
            </div>
            <h2 style={{ marginBottom: '1rem' }}>
              Okay, okay… you win.
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              I can't stay mad at that face. Even though you skipped my
              beautiful puzzle that I spent ages making.
            </p>
            <p
              style={{
                fontStyle: 'italic',
                marginBottom: '1.5rem',
                color: 'var(--pink-500)',
                fontWeight: 500,
              }}
            >
              But you know what? I love you anyway. 💗
            </p>
            <div style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>
              <p style={{ marginBottom: '1rem', fontWeight: 600, color: 'var(--text-dark)' }}>
                Are you ready to see your surprise?
              </p>
              <button
                className="btn btn-primary"
                onMouseEnter={floatAway}
                onClick={(e) => {
                  e.preventDefault();
                  floatAway();
                }}
                style={{
                  transform: `translate(${btnOffset.x}px, ${btnOffset.y}px)`,
                  transition: 'transform 0.18s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  display: 'inline-flex',
                  padding: '0.6rem 2.2rem',
                  fontSize: '0.95rem',
                  gap: '0.5rem',
                }}
              >
                Yes
              </button>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <FloatingHearts />
      <div className="page">
        <div
          className="glass-card animate-fade-in-up"
          style={{
            textAlign: 'center',
            maxWidth: step === 2
              ? (sliderWidth === 1200 ? 'calc(100vw - 3rem)' : `${sliderWidth}px`)
              : '520px',
            transition: 'max-width 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Current step content */}
          {renderStep()}
        </div>
        <Footer />
      </div>
    </>
  );
};
