import { FloatingHearts } from '../components/FloatingHearts';
import * as Icons from 'lucide-react';
import { Header } from '../components/Header';

interface WrongPageProps {
  emoji?: string;
  iconName?: string;
  message: string;
  subMessage?: string;
}

export const WrongPage = ({ emoji, iconName, message, subMessage }: WrongPageProps) => {
  // Resolve Lucide icon dynamically from its string name
  const IconComponent = iconName ? (Icons as any)[iconName] : null;

  return (
    <>
      <FloatingHearts />
      <div className="page">
        <Header />
        <div className="glass-card animate-fade-in-up" style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            {IconComponent ? (
              <IconComponent
                size={64}
                className="animate-pulse"
                style={{ color: 'var(--pink-500)' }}
              />
            ) : (
              <div
                style={{ fontSize: '4rem' }}
                className="animate-pulse"
              >
                {emoji}
              </div>
            )}
          </div>

          <h2 style={{ marginBottom: '1rem', lineHeight: 1.4 }}>{message}</h2>

          {subMessage && (
            <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
              {subMessage}
            </p>
          )}

          <div
            style={{
              marginTop: '1.5rem',
              padding: '0.75rem 1.25rem',
              background: 'rgba(252, 231, 243, 0.4)',
              borderRadius: 'var(--radius)',
              border: '1px dashed var(--pink-300)',
            }}
          >
            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--text-light)',
                fontStyle: 'italic',
              }}
            >
              Go back to the image and try another QR code 🔍💕
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
