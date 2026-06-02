import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { WrongPage } from './pages/WrongPage';
import { PasswordPage } from './pages/PasswordPage';
import { SkipGauntlet } from './pages/SkipGauntlet';

function App() {
  return (
    <Router>
      <Routes>
        {/* ---- Homepage ---- */}
        <Route path="/" element={<Home />} />

        {/* ---- CORRECT PATHS ---- */}
        <Route path="/AlifetoLive" element={<PasswordPage />} />
        <Route path="/ALifetoPaint" element={<SkipGauntlet />} />

        {/* ---- WRONG PATHS (8 decoys) ---- */}
        <Route
          path="/Miles"
          element={
            <WrongPage
              iconName="Heart"
              emoji="💕"
              message="Oops, not this one!"
              subMessage="But hey, at least you're trying! Keep hunting 🔍"
            />
          }
        />
        <Route
          path="/judy"
          element={
            <WrongPage
              iconName="HeartHandshake"
              emoji="💗"
              message="Hey, ik u got the spirit, keep trying love"
              subMessage="You're getting warmer… or are you? 🤔"
            />
          }
        />
        <Route
          path="/Gwen"
          element={
            <WrongPage
              iconName="Wind"
              emoji="🧕💨"
              message="Hey, take a break or ur hijab will fly off!"
              subMessage="Seriously though, breathe and try another code 😂"
            />
          }
        />
        <Route
          path="/Coraline"
          element={
            <WrongPage
              iconName="Key"
              emoji="💫"
              message="Go back to your childhood love and u will find it"
              subMessage="This isn't the right door, Coraline… 🚪"
            />
          }
        />
        <Route
          path="/Chirine"
          element={
            <WrongPage
              iconName="Smile"
              emoji="😘"
              message="Haha nice try using your own name!"
              subMessage="You're adorable but the answer isn't that easy! Try again 💋"
            />
          }
        />
        <Route
          path="/Aun"
          element={
            <WrongPage
              iconName="User"
              emoji="🥹"
              message="Aww you tried my name? That's sweet!"
              subMessage="But the answer isn't me this time. I'm just the messenger of love 💌"
            />
          }
        />
        <Route
          path="/TwoYears"
          element={
            <WrongPage
              iconName="CalendarDays"
              emoji="💑"
              message="Two years of us… but this isn't it!"
              subMessage="Our love story is beautiful, but the answer lies elsewhere 💕"
            />
          }
        />
        <Route
          path="/TwentyFive"
          element={
            <WrongPage
              iconName="Gift"
              emoji="🎂"
              message="25 and still falling for my tricks!"
              subMessage="Happy Birthday detour! Now go find the real path, birthday girl 🎉"
            />
          }
        />

        {/* ---- Catch-all for unknown paths ---- */}
        <Route
          path="*"
          element={
            <WrongPage
              iconName="HelpCircle"
              emoji="🤷‍♀️"
              message="This path doesn't exist!"
              subMessage="Nice try though. Scan a QR code from the image! 📱"
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
