import { useState } from 'react';
import { Save, Trash2, Copy, Sliders, FileText, Check } from 'lucide-react';

export const Tools = () => {
  // State for Notepad
  const [note, setNote] = useState<string>(() => {
    return localStorage.getItem('chirine_note') || '';
  });
  const [notepadStatus, setNotepadStatus] = useState<string>('');

  // State for HSL Generator
  const [hue, setHue] = useState<number>(250);
  const [saturation, setSaturation] = useState<number>(90);
  const [lightness, setLightness] = useState<number>(65);
  const [colorCopied, setColorCopied] = useState<boolean>(false);

  // State for Text Transformer
  const [text, setText] = useState<string>('');
  const [textCopied, setTextCopied] = useState<boolean>(false);

  // Auto-save notepad
  const saveNote = () => {
    localStorage.setItem('chirine_note', note);
    setNotepadStatus('Saved successfully!');
    setTimeout(() => setNotepadStatus(''), 2000);
  };

  const clearNote = () => {
    if (window.confirm('Are you sure you want to clear your note?')) {
      localStorage.removeItem('chirine_note');
      setNote('');
      setNotepadStatus('Cleared!');
      setTimeout(() => setNotepadStatus(''), 2000);
    }
  };

  // Copy HSL Value to Clipboard
  const copyColorToClipboard = () => {
    const hslString = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    navigator.clipboard.writeText(hslString);
    setColorCopied(true);
    setTimeout(() => setColorCopied(false), 2000);
  };

  // Text Case Transformations
  const transformText = (action: 'upper' | 'lower' | 'title' | 'reverse') => {
    if (!text) return;
    let result = '';
    if (action === 'upper') {
      result = text.toUpperCase();
    } else if (action === 'lower') {
      result = text.toLowerCase();
    } else if (action === 'title') {
      result = text.replace(/\b\w/g, (char) => char.toUpperCase());
    } else if (action === 'reverse') {
      result = text.split('').reverse().join('');
    }
    setText(result);
  };

  const copyTextToClipboard = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setTextCopied(true);
    setTimeout(() => setTextCopied(false), 2000);
  };

  return (
    <div className="container animate-fade-in-up" style={{ paddingTop: '1rem' }}>
      <header style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
        <h1 className="gradient-text" style={{ fontSize: '2.8rem', marginBottom: '0.5rem' }}>Interactive Workspace</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Experiment with interactive tools powered by React state variables.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
        
        {/* Widget 1: Persistent Notepad */}
        <section className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }} aria-labelledby="notepad-heading">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#c084fc' }}>
            <FileText size={22} />
            <h2 id="notepad-heading" style={{ fontSize: '1.4rem', fontWeight: 600 }}>Quick Scratchpad</h2>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Your notes are saved instantly to your local browser storage.
          </p>
          <textarea
            id="notepad-textarea"
            className="input-field"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Type your notes or scripts here..."
            style={{ minHeight: '180px', resize: 'vertical', fontFamily: 'inherit' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button id="btn-save-note" className="btn btn-primary" onClick={saveNote} style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                <Save size={14} /> Save
              </button>
              <button id="btn-clear-note" className="btn btn-secondary" onClick={clearNote} style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', color: '#ef4444' }}>
                <Trash2 size={14} /> Clear
              </button>
            </div>
            {notepadStatus && (
              <span style={{ fontSize: '0.85rem', color: '#10b981', fontWeight: 500 }}>{notepadStatus}</span>
            )}
          </div>
        </section>

        {/* Widget 2: HSL Color Generator */}
        <section className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }} aria-labelledby="color-generator-heading">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#6366f1' }}>
            <Sliders size={22} />
            <h2 id="color-generator-heading" style={{ fontSize: '1.4rem', fontWeight: 600 }}>HSL Palette Maker</h2>
          </div>

          {/* Color Preview Block */}
          <div 
            style={{ 
              height: '100px', 
              borderRadius: 'var(--radius-md)', 
              background: `hsl(${hue}, ${saturation}%, ${lightness}%)`, 
              boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
              transition: 'background-color 0.1s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              color: lightness > 60 ? '#0f172a' : '#ffffff',
              textShadow: '0 1px 2px rgba(0,0,0,0.15)'
            }}
          >
            <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>hsl({hue}, {saturation}%, {lightness}%)</span>
          </div>

          {/* Sliders */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.2rem' }}>
                <label htmlFor="hue-slider">Hue</label>
                <span>{hue}°</span>
              </div>
              <input 
                id="hue-slider"
                type="range" 
                min="0" 
                max="360" 
                value={hue} 
                onChange={(e) => setHue(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'hsl(250, 89%, 65%)' }}
              />
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.2rem' }}>
                <label htmlFor="saturation-slider">Saturation</label>
                <span>{saturation}%</span>
              </div>
              <input 
                id="saturation-slider"
                type="range" 
                min="0" 
                max="100" 
                value={saturation} 
                onChange={(e) => setSaturation(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'hsl(250, 89%, 65%)' }}
              />
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.2rem' }}>
                <label htmlFor="lightness-slider">Lightness</label>
                <span>{lightness}%</span>
              </div>
              <input 
                id="lightness-slider"
                type="range" 
                min="10" 
                max="90" 
                value={lightness} 
                onChange={(e) => setLightness(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'hsl(250, 89%, 65%)' }}
              />
            </div>
          </div>

          <button 
            id="btn-copy-color"
            className="btn btn-secondary" 
            onClick={copyColorToClipboard}
            style={{ width: '100%', display: 'flex', gap: '0.5rem', justifyContent: 'center', padding: '0.6rem 1rem' }}
          >
            {colorCopied ? <><Check size={16} style={{ color: '#10b981' }} /> Copied!</> : <><Copy size={16} /> Copy HSL Code</>}
          </button>
        </section>

        {/* Widget 3: Text Transformer */}
        <section className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }} aria-labelledby="transformer-heading">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ec4899' }}>
            <FileText size={22} />
            <h2 id="transformer-heading" style={{ fontSize: '1.4rem', fontWeight: 600 }}>Text Case Transformer</h2>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Instantly format text, copy the outputs, and see length statistics.
          </p>

          <input 
            id="txt-transformer-input"
            type="text" 
            className="input-field" 
            value={text} 
            onChange={(e) => setText(e.target.value)}
            placeholder="Type or paste text..."
          />

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <button className="btn btn-secondary" onClick={() => transformText('upper')} style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', flexGrow: 1 }}>UPPER</button>
            <button className="btn btn-secondary" onClick={() => transformText('lower')} style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', flexGrow: 1 }}>lower</button>
            <button className="btn btn-secondary" onClick={() => transformText('title')} style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', flexGrow: 1 }}>Title Case</button>
            <button className="btn btn-secondary" onClick={() => transformText('reverse')} style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', flexGrow: 1 }}>Reverse</button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            <span>Words: {text.trim() === '' ? 0 : text.trim().split(/\s+/).length} | Characters: {text.length}</span>
            <button 
              id="btn-copy-transformed"
              className="btn btn-secondary" 
              onClick={copyTextToClipboard}
              disabled={!text}
              style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
            >
              {textCopied ? <Check size={14} style={{ color: '#10b981' }} /> : <Copy size={14} />}
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
