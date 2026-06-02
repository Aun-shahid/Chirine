import { FloatingHearts } from '../components/FloatingHearts';
import { Heart, Search } from 'lucide-react';
import { Header } from '../components/Header';

export const Home = () => {
  return (
    <>
      <FloatingHearts />
      <div 
        className="page"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 240, 245, 0.3), rgba(255, 240, 245, 0.3)), url("https://images6.alphacoders.com/731/731739.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <Header />
        <div className="glass-card animate-fade-in-up" style={{ textAlign: 'center' }}>
          <div
            style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}
            className="animate-heartbeat"
          >
            <Heart size={64} fill="var(--pink-400)" style={{ color: 'var(--pink-500)' }} />
          </div>

          <h1 style={{ marginBottom: '0.3rem' }}>
            <span className="gradient-text">Something Special</span>
          </h1>
          <h2
            style={{
              fontWeight: 400,
              fontSize: '1.4rem',
              color: 'var(--text-medium)',
              marginBottom: '1.5rem',
            }}
          >
            awaits you...
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}
          >
            A surprise has been prepared just for you, Chirine. 🎀
            <br />
            Follow the clues in the letter to unlock your gift.
          </p>

          <div
            style={{
              padding: '1rem 1.5rem',
              background: 'rgba(252, 231, 243, 0.5)',
              borderRadius: 'var(--radius)',
              border: '1px solid var(--pink-200)',
              marginBottom: '1.5rem',
            }}
          >
            <p
              style={{
                fontSize: '0.92rem',
                fontStyle: 'italic',
                color: 'var(--text-light)',
              }}
            >
              ✨ The adventure begins with the letter and the image...
              <br />
              Follow the clues, and your surprise will be waiting. ✨
            </p>
          </div>

          <div
            style={{ display: 'inline-flex', justifyContent: 'center', marginTop: '0.5rem' }}
            className="animate-bounce"
          >
            <Search size={32} style={{ color: 'var(--pink-400)' }} />
          </div>
        </div>
      </div>
    </>
  );
};
