import { useState } from 'react';
import { FloatingHearts } from '../components/FloatingHearts';
import { LetterReveal } from './LetterReveal';
import { LockKeyhole, Sparkles } from 'lucide-react';
import { Header } from '../components/Header';

const SECRET_PASSWORD = 'carrots';

export const PasswordPage = () => {
  const [password, setPassword] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [attempts, setAttempts] = useState(0);

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
      <div className="page">
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
            Almost There!
          </h1>

          <p
            style={{
              marginBottom: '2rem',
              fontSize: '1.05rem',
            }}
          >
            You found the right path! ✨
            <br />
            Now enter the secret password to unlock your surprise.
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
        </div>
      </div>
    </>
  );
};
