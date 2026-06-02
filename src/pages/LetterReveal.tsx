import { Confetti } from '../components/Confetti';
import { FloatingHearts } from '../components/FloatingHearts';

export const LetterReveal = () => {
  return (
    <>
      <Confetti />
      <FloatingHearts />
      <div
        className="page"
        style={{
          paddingTop: '3rem',
          paddingBottom: '4rem',
          backgroundImage: 'linear-gradient(rgba(255, 240, 245, 0.4), rgba(255, 240, 245, 0.4)), url("https://assetsio.gnwcdn.com/paint-effect-artwork-for-Clair-Obscur-Expedition-33-showing-two-characters-holding-hands-while-looking-towards-eachother.jpg?width=1920&height=1920&fit=bounds&quality=70&format=jpg&auto=webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          width: '100%',
          minHeight: '100vh',
        }}
      >
        {/* Birthday header */}
        <div
          style={{ fontSize: '3.5rem', marginBottom: '0.75rem' }}
          className="animate-heartbeat"
        >
          🎂
        </div>
        <h1
          className="gradient-text"
          style={{ marginBottom: '2.5rem', fontSize: '2.8rem' }}
        >
          Happy Birthday, Chirine!
        </h1>

        {/* The Letter */}
        <div
          className="letter-container"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url("/LetterBackground.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <p
            style={{
              fontStyle: 'italic',
              color: 'var(--pink-500)',
              fontWeight: 600,
              fontSize: '1.15rem',
              textAlign: 'center',
              marginBottom: '1.5rem',
            }}
          >
            Joyeux Anniversaire, mon amour! 🎂
          </p>

          <p>
            If you're reading this, it means you either cracked the puzzle
            (smart girl i always believed in you! 🧠) or you took the skip route… and honestly, I
            still love you either way 😘
          </p>

          <p>
            Two and a Half years. 906 days of you, your infectious laugh, your gorgeous
            curly hair, the way your eyes light up when you talk about things
            you love. Every single day with you has been a gift I never knew I
            needed.
          </p>

          <p>
            You came into my life like a breeze from the streets of France, and
            suddenly everything made more sense. The world became more colorful,
            more beautiful, more worth being in. I never knew love could be so beautiful.
          </p>

          <p>Today you turn 24, and I want you to know something:</p>

          <p
            style={{
              fontWeight: 700,
              color: 'var(--text-dark)',
              fontSize: '1.12rem',
              textAlign: 'center',
              padding: '1.25rem 1rem',
              background: 'rgba(252, 231, 243, 0.4)',
              borderRadius: 'var(--radius)',
              border: '1px solid var(--pink-200)',
              margin: '1rem 0',
            }}
          >
            If I could go back in time and choose anyone in the entire
            universe, across every lifetime and every reality I would still
            find my way to you. Every. Single. Time. 💕
          </p>

          <p>You are my favorite person, my best friend, my everything.</p>

          <p>Happy Birthday, beautiful. Here's to forever. 🎀</p>

          <div className="signature">
            With all my love,
            <br />
            Nienie 💖
          </div>
        </div>

        {/* Extra hearts decoration below the letter */}
        <div
          style={{
            marginTop: '2.5rem',
            fontSize: '2rem',
            display: 'flex',
            gap: '0.75rem',
          }}
          className="animate-bounce"
        >
          <span>💗</span>
          <span>💖</span>
          <span>💝</span>
          <span>💕</span>
          <span>💗</span>
        </div>
      </div>
    </>
  );
};
