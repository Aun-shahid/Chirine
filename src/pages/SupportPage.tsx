import { FloatingHearts } from '../components/FloatingHearts';
import { Header } from '../components/Header';
import { Mail, Sparkles } from 'lucide-react';

export const SupportPage = () => {
  return (
    <>
      <FloatingHearts />
      <div 
        className="page"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 240, 245, 0.45), rgba(255, 240, 245, 0.45)), url("https://images8.alphacoders.com/100/1006728.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <Header />
        <div className="glass-card animate-fade-in-up" style={{ textAlign: 'center', maxWidth: '650px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <Mail size={48} style={{ color: 'var(--pink-500)' }} />
          </div>

          <h1 className="gradient-text" style={{ marginBottom: '1rem', fontSize: '2.2rem' }}>
            Contact Support
          </h1>

          <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Having trouble with the puzzle or need assistance, Chirine?
            <br />
            Don't worry, Nienie is here for you!
          </p>

          <div
            style={{
              padding: '1.25rem',
              background: 'rgba(252, 231, 243, 0.5)',
              borderRadius: 'var(--radius)',
              border: '1px solid var(--pink-200)',
              marginBottom: '2rem',
            }}
          >
            <p
              style={{
                fontSize: '0.98rem',
                fontWeight: 600,
                color: 'var(--pink-600)',
              }}
            >
              We will be here to assist you shortly! 💖
            </p>
          </div>

          <a
            href="mailto:aun.shahid114@gmail.com?subject=Chirine's Birthday Puzzle Support Inquiry"
            className="btn btn-primary"
            style={{ width: '100%', gap: '0.5rem', textDecoration: 'none' }}
          >
            Send Email to Nienie <Sparkles size={18} />
          </a>
        </div>
      </div>
    </>
  );
};
