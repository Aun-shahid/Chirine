import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FloatingHearts } from '../components/FloatingHearts';
import { LetterReveal } from './LetterReveal';
import { LockKeyhole, Sparkles, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Header } from '../components/Header';

const SECRET_PASSWORD = 'carrots';

export const PasswordPage = () => {
  const location = useLocation();
  const fromGauntlet = location.state?.fromGauntlet || false;

  const [password, setPassword] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password.trim().toLowerCase() === SECRET_PASSWORD) {
      setUnlocked(true);
    } else {
      setAttempts((a) => a + 1);
      setError(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
      setTimeout(() => setError(false), 2500);
    }
  };

  if (unlocked) {
    return <LetterReveal />;
  }

  const errorMessages = [
    'Nope! Try again, cutie 💕',
    'Still not it! Think harder, beautiful 🤔',
    "Think crunchy and orange... 🥕",
    'So close (maybe)! One more try 💪',
    "I'll wait forever for you to get this 💗",
  ];

  return (
    <>
      <FloatingHearts />
      <div 
        className="page"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 240, 245, 0.4), rgba(255, 240, 245, 0.4)), url("https://cdn.mos.cms.futurecdn.net/JUhtp5khvqdw8ZYfNBJVU6.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <Header />
        <div
          className={`glass-card animate-fade-in-up ${shaking ? 'animate-shake' : ''}`}
          style={{ textAlign: 'center' }}
        >
          <div
            style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}
            className="animate-heartbeat"
          >
            <LockKeyhole size={56} style={{ color: 'var(--pink-500)' }} />
          </div>

          <h1
            className="gradient-text"
            style={{ marginBottom: '0.5rem', fontSize: '2.3rem' }}
          >
            {fromGauntlet ? "Aha! You Quitter! 😜" : "Almost There! ✨"}
          </h1>

          <p
            style={{
              marginBottom: '2rem',
              fontSize: '1.05rem',
            }}
          >
            {fromGauntlet ? (
              <>
                You tried to skip the puzzle, didn't you?
                <br />
                Fine, I will still let you unlock your surprise, but you must enter the secret password first!
              </>
            ) : (
              <>
                You Are here finally! ✨
                <br />
                Now enter the secret password to unlock your surprise.
              </>
            )}
          </p>

          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <input
              id="password-input"
              type="text"
              className="input-cute"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter the secret password..."
              autoFocus
              autoComplete="off"
            />

            <button
              id="btn-unlock"
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', gap: '0.5rem' }}
            >
              Unlock My Surprise <Sparkles size={18} />
            </button>

            {error && (
              <p
                style={{
                  color: '#e11d48',
                  fontSize: '0.92rem',
                  fontWeight: 500,
                }}
                className="animate-fade-in"
              >
                {errorMessages[Math.min(attempts - 1, errorMessages.length - 1)]}
              </p>
            )}
          </form>

          <div style={{ marginTop: '1.5rem', borderTop: '1px dashed var(--pink-200)', paddingTop: '1rem' }}>
            <button
              type="button"
              onClick={() => setShowHint(!showHint)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--pink-600)',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
                padding: '0.25rem 0.5rem',
                borderRadius: 'var(--radius)',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--pink-50)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <HelpCircle size={16} /> Need a hint? {showHint ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            
            {showHint && (
              <div 
                className="animate-fade-in"
                style={{
                  marginTop: '0.75rem',
                  padding: '0.75rem 1rem',
                  backgroundColor: 'rgba(255, 241, 242, 0.7)',
                  border: '1px solid var(--pink-100)',
                  borderRadius: 'var(--radius)',
                  color: 'var(--pink-800)',
                  fontSize: '0.9rem',
                  lineHeight: '1.4',
                  textAlign: 'left',
                }}
              >
                <p style={{ margin: 0, fontWeight: 500 }}>Patience is virtue.</p>
                <p style={{ margin: '0.25rem 0 0.5rem 0', fontWeight: 500 }}>You may not have all the pieces yet.</p>
                <p style={{ 
                  margin: 0, 
                  fontSize: '0.8rem', 
                  opacity: 0.8, 
                  borderTop: '1px dashed rgba(244, 63, 94, 0.2)', 
                  paddingTop: '0.4rem', 
                  marginTop: '0.4rem', 
                  fontStyle: 'italic' 
                }}>
                  PS: Something i'd love to eat one day.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
