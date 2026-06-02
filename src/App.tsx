import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { WrongPage } from './pages/WrongPage';
import { PasswordPage } from './pages/PasswordPage';
import { SkipGauntlet } from './pages/SkipGauntlet';
import { LetterPage } from './pages/LetterPage';
import { HintPage } from './pages/HintPage';
import { SupportPage } from './pages/SupportPage';

function App() {
  useEffect(() => {
    const imagesToPreload = [
      'https://images5.alphacoders.com/138/thumb-1920-1383701.jpg',
      'https://cdn.mos.cms.futurecdn.net/JUhtp5khvqdw8ZYfNBJVU6.jpg',
      'https://assetsio.gnwcdn.com/paint-effect-artwork-for-Clair-Obscur-Expedition-33-showing-two-characters-holding-hands-while-looking-towards-eachother.jpg?width=1920&height=1920&fit=bounds&quality=70&format=jpg&auto=webp',
      'https://th.bing.com/th/id/R.e7ecc82b87ae437c5c049c715d66d24a?rik=kgp2M6jhlWE8YQ&pid=ImgRaw&r=0',
      'https://tse2.mm.bing.net/th/id/OIP.Ye0VzayEbOT5ppOqQnhrcAHaDj?rs=1&pid=ImgDetMain&o=7&rm=3',
      'https://tse3.mm.bing.net/th/id/OIP.x2AxYRzCLEpsctdjepJbOQHaDt?rs=1&pid=ImgDetMain&o=7&rm=3',
      'https://images6.alphacoders.com/112/1129972.jpg',
      'https://images7.alphacoders.com/800/800653.jpg',
      'https://i.pinimg.com/originals/a0/3a/95/a03a9503396d9dcb9be81a54ab4e55ab.jpg',
      'https://i.pinimg.com/originals/c9/8f/d4/c98fd431803dee5e72e5ff9da937f6cf.jpg',
      'https://i.pinimg.com/originals/46/9a/2d/469a2de3e67779535239caca71b4272d.jpg',
      'https://i.pinimg.com/originals/e6/93/0a/e6930ae3a84541460c001e512918c98d.jpg',
      'https://image.tmdb.org/t/p/original/dwYTOBKQj1OO6RiaWN5RjW3FDyT.jpg',
      'https://static1.srcdn.com/wordpress/wp-content/uploads/2024/08/coraline-holding-excitedly-onto-other-wybie-as-they-sit-in-a-theater-audience.jpg',
      'https://i.pinimg.com/736x/e9/c5/e6/e9c5e6db988890ced71acfcc8d073da2.jpg',
      'https://wallpapers.com/images/hd/nick-wilde-looking-at-judy-hopps-ka49nkvhdclhem0y.jpg'
    ];
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <Router>
      <Routes>
        {/* ---- Homepage ---- */}
        <Route path="/" element={<Home />} />

        {/* ---- CORRECT PATHS ---- */}
        <Route path="/AlifetoLive" element={<PasswordPage />} />
        <Route path="/ALifetoPaint" element={<SkipGauntlet />} />

        {/* ---- FOOTER NAVIGATION PATHS ---- */}
        <Route path="/letter" element={<LetterPage />} />
        <Route path="/hint" element={<HintPage />} />
        <Route path="/support" element={<SupportPage />} />

        {/* ---- WRONG PATHS (8 decoys) ---- */}
        <Route
          path="/Miles"
          element={
            <WrongPage
              iconName="Heart"
              emoji="💕"
              message="Oops, not this one!"
              subMessage="But hey, at least you're trying! Keep hunting 🔍"
              bgImage="https://i.pinimg.com/originals/a0/3a/95/a03a9503396d9dcb9be81a54ab4e55ab.jpg"
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
              subMessage="Getting there, i believe in u"
              bgImage="https://i.pinimg.com/originals/c9/8f/d4/c98fd431803dee5e72e5ff9da937f6cf.jpg"
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
              subMessage="Man maybe js take the easy way atp"
              bgImage="https://i.pinimg.com/originals/46/9a/2d/469a2de3e67779535239caca71b4272d.jpg"
            />
          }
        />
        <Route
          path="/Coraline"
          element={
            <WrongPage
              iconName="Key"
              emoji="💫"
              message="You're trying to find it in the easy places arent you?"
              subMessage="Another wrong pick and ill replace your eyes with buttons!"
              bgImage="https://static1.srcdn.com/wordpress/wp-content/uploads/2024/08/coraline-holding-excitedly-onto-other-wybie-as-they-sit-in-a-theater-audience.jpg"
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
              bgImage="https://i.pinimg.com/originals/e6/93/0a/e6930ae3a84541460c001e512918c98d.jpg"
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
              subMessage="But the answer isn't me this time. I'm just the guy that fell madly in love with you"
              bgImage="https://i.pinimg.com/736x/e9/c5/e6/e9c5e6db988890ced71acfcc8d073da2.jpg"
            />
          }
        />
        <Route
          path="/TwoYears"
          element={
            <WrongPage
              iconName="CalendarDays"
              emoji="💑"
              message="Two and a half years of us… but this isn't it!"
              subMessage="Our love story is beautiful, but the answer lies elsewhere 💕"
              bgImage="https://image.tmdb.org/t/p/original/dwYTOBKQj1OO6RiaWN5RjW3FDyT.jpg"
            />
          }
        />
        <Route
          path="/TwentyFive"
          element={
            <WrongPage
              iconName="Gift"
              emoji="🎂"
              message="24 and still falling for my tricks granny!"
              subMessage="Happy Birthday detour! Now go find the real path, birthday girl 🎉"
              bgImage="https://wallpapers.com/images/hd/nick-wilde-looking-at-judy-hopps-ka49nkvhdclhem0y.jpg"
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
              subMessage="Nice try though. Follow the clues from the image! 📱 Whole ass clown bro"
              bgImage="data:image/webp;base64,UklGRlIdAABXRUJQVlA4IEYdAABQmwCdASrWAQoBPp1KnkslpDAqJ/O6agATiWNu4XE4GhJfF29vYzOD6uc/fvv7/xux17LHr38xrz2+rP/zc+P0o/VXejn5sP/u9q61B28HoG0xtx91v7t/v+gjAX+Nxc+MOpYnh+11J7l9Rx14HpD2JqiccT0xJfvcbuYVE6SvwXQAVSq3JRSMWBt4SLpXIPfTm6r1LHChg1w7H3L6jjrzi3Kn3UHCA5rCokQPXPYeLKUtoE+LJZna57NJDEO9utG9BeuOWkm67DSwBIXXRFT1Oh3H17x1B2xG+BHYEki3cUl+POLcqikea0ITPlUFnyQOzruxPWEft5b6aItXk0rklYGR9nd+Xw/3NzKk4lJvIoHnUaCfFy5lvcvqOOvOLccCp2Z1g4peJjCZWX+dYta0AnAzlZMwVmARrcoHrdq0EMIS1O6dsITQ9JOVRSPNaFXSxbeeFAw4qAcQ9h4K7NZTeEIVPZoQZDxwA1RIE0t70M/SIRjGM+gI7BWNXBdkuGyItoY+5fUcdea/PM1YedGhVluAK3KgHQ0/utaBFke3rKMeWFOQ/l6KGbPYjPin4zaFZdYuDzZQlTbWJOCLn/g9NUbCpy1vQDzi3KopHmWybIvUgxEyix0UkJdI3M5JV3IEseSwMXa7Tq21H8hONv9RxiaysOfbwHZPlH6KrpMLmLaqBZ9/vwGezI81oVnXl/fNPYtTfyfyOF02qR4xOd0XpJek/YB72ZPDF1CRFiaM1TyKpEGqKNVdddOj5zz3KedfWDMQW2CMpa48n9A6CoNaFZ15xb01TFrZubGr3Ckf8jBXrXvf3q/wlIpUp3KWWMK8w2wxHSlXUkvTlJaP0KNsXJ8WSaxZyXe5bywxHSyI/o6RZ7FqhC+VHHXnFuVPpSFTumY8mrn//tk66wEhXNNyRLnvncUtU2xFkr+LCFpaW/DZbrEqXbQSPB2ZcpovVqi8v+LZkea0KzSVViesx21SCuuCJNNKhHkiy79orJAE8QYaflkxLP6bF9Y823LqE3FDD6EoTz0m3B6ihGZPdMyww5VFI81IWyQxXFq363mnt7Ar/1IXMpDcYUN74ckMWlmM/QMgPgNMVyYu7HUvYeHCC29F5b0pQ6iiOx9y+o47CAFnRUZrCph+lwzVIFZaRa6tBDw8FstPT5d3ba4hg7+iTUZoyDUKVIzaDZmi3ks39bn+6H/MMV5PG0MW5VFI81nRg97uE2eFIkHfx4yjuJOpqqoc/QepgutywZhVAtibgzqcw3T2s6wshSQxt9Myjz+ww2vWggL1y5+Hos5S9Rx15xblU3bO6tRrBSlNGR4y/6zVPRuj5uNHT3SIPbGwIYW3hce0iirFfHMKsT8OoZMUDjBZsAO+1nGtomoepz00iEFvE+LqZNPFUTU4pLwIhIdPO1A70C58A1oVnXnFuRDJjCI06DPcw7zjlZ3RUBWQUjohWSDKT7j9Fr5e6bwhu00IVucv+PHhiZ4uT+EsMgbdl1hELDToTIt4IHDe+8AFoqStr1Y2P3umXTHInaeTmcnXbc77izjos/k8EjBHkuDakcnotCOvNwgh3/WulQFpAWM/LulrZz6DROZNdwQu6Y8WpTUiSCtryOyTodCPzdv4unjnqevm3wr8gt3tR2blJfhdfwh8sGM81Kl4/d4IUL4djgAA/v76gAf1x1PTEEisLfYWqrN3tOVtqGasHLJmW3v0gQrAV2fZyN1Mz//Wf4lqfcgRhjyxS3Uz1JvdJUHwMydqEB2ZxgBMDqjti9WphAvEnqNRKZsSHyQ7slxctwtwL2gmwoxuqi0g0Kb4a4WRY3jp8iOqxPnh2/6UeeP/HXfqvG/cEGoK2kjFMkGyOAxBc8399Pg90rvr/eouc4TAPxo7laQizk1M/O0o1hCAVzBN0057alVPsrAkq1b9oXF3nPdZg2wMHeA6utzxhIZTm9XkI1sfhRBhKPs7+Xej3Zugg4m3q/AZYlcuuVYKJUILSboLO+Hp1TQJ4G8srCv5uRxL/n85ZEw66gBliTLyn++s9XjUT3jB0+POToQCigACBrDoS/v3SwdCKXxV08PUCFkg3cQ185XZPkG71V+l7KGSYBlAqzvcVbDC/vocJLxEAD4ipn9AWDtfxlZicjQvQ8KEENdOfcxI6Vfl68WulkiDKVAhKC6hLEHBd6XKqziCq4Yswqj4emQZJ55IYaQ0Hvdnb2qDgTk302HC6TkldBBNh5TeE1OFfrps4LT+8AIg63KdzR2GYitSULf8ooHpsdXCzfwc0f+QI0s79IxT05dzIYe+s100ZHkLBv8bSm/Kd3p0lMLzEJpbaW3oJV5T4Gw+2f5sLii2sgxmEqSjJBJ/VYRCCB6bd3kf075bb9B7EefggaF6Peew56U2rljZTt52JO+ZXUjyAXlZgqZbuohWDw17KGCfzLg3PxAACA365PdkIqp9Up1Hrn/2TXkw8ryU7Itx/Z6pzqz/Up/V0rlWDRZNKaPTpmZfU+CAzGq4kMuD0pCLSj0WWpfVU7Tju6iXEXkrfUajokVHDWROOPYN7vSHle/LhSQ765rmF0iNttGcbs1nC+JfOKfW6wVl499dF53BNPsBsBjs8rqwuqhMyjORVeCSEZJdTzG0lqL5NKqB9QKyt4MMEbZS0q8Y3sp4P4uGAN1Py9HD9E8OoGtUmbsWnx3GhXFrG+beE3RMn21f13Fk07Lb4ANN0ITNvr5GB11S2KxPT1LrYavEjptrIXOa/VD9mR7Pqykhy4/zcS2lvzBpp3lWFoKxUy/cVott63TzgI2NUPi/j8QBP4wAAIAVy/eySAKJW/s9BeEvzLxn35oa93F6DaIMIoi8vZb3v7chGz8VaxwVSc6p9TximpyIdjhLDXAQRP/het/vO0nqH9dk0yfI45eIR3jQhtpuRAS0UXpCf2oQ58kpG7TbNW3pUvEN2WyhHX0PAiHGuLvT1RlXTG1GGNRKrGjIGWfx9HjlPG816FPnzLboj9e5ak7pSL5OOhJzuzxPxbODnF1kGppQgbfxBCtXepvvYZoV08yEcloenc0oaJeaGgMyE861aMR8r/1bTOLlfYxcU1pTEjJXeIaBi5iiwqkb9oGntjuKwuYBDznWQ+09PkEVgtBzVJg7yfgVIfyKDIgNLhIXwhKPhxbK68Z8exdC1b8OYnMsABB1v011dbGFfqmSm3nTeG4eRV90WE+OIw+JsfrMTzsoE3uWRgd8DjArgZVhOgzQBjKMzO2g8Yww/U17Bz8kXnv2REKUn+qhIEdJmoA1OSP+TJdaseYt0P5MGwYSv+KKe+WoK8MxDiuGglSXAkAFpVyBGcFxN51e9VKZjQ2W6G/kbbVxglG1TULPCcv2EUDmd/8Ipu9N7lIh/3KNepEZ1e7RjCkUEHK1DMAj1PS14cTDudCN0Fo6CGnmrEV7lkHWg0dk/yWpg4QPjEwTD8y1GXOFEAWZksDsqbt5i4ID9fcbJpPbSrxYOEvhF9tviOzZ+nUjktP/0kACYlIKqNl+8mH4aGlHk6ToQ7hcPCY/N4ldQK+SG+DyMTA0ekM0ELtOHQ0jIzAAA36lEr0v7IY+nWoR9ardjUx/Z6juRHXvESbenwuu+BUtTeNPSYIWw867SFAgBBbyYXU1G7TdozDDBKu+hXVWLcuvdEQlw3EB+aE18GJ2agnbbF38jalmob7TWlXZfR8RcEjHGenQQ7QraQ+niTPsbbxl7hWPVd8rzNNr4QCFqAR6WmhESQ3KH2aTHEPFEPSk0enc8J2GB8MGi3klANGK1/GJFMb8l6trMPPQ/9xY424E25iTgHJORDw4gtw8bXBblKls8RYOfsjtqdsRcoTYL1sD6iDGJJ7lgYDgetQTi+oF+uZKch7w6J7kuzFs0fMk2vU6+oRW0BKc56RskGDje2xapI3Yo4Gt5qGXdQJXI+HJco4L0usj5l+eyaqUT1zLnagsgvJRnIZrAlf3HVBaEErK2FJkzvA8NUbBv/DXOkswCa61sHW6op9A/0ruSKIUSAaxnHWre3lgg6SY0r49Ihtil9EO9O4lY2r1cpswKinoQY3S0movdsMTTc1jDPACin7oml6dIyB1FZoUec0aYZ2dPx46tnGlnYS5t4MtpYJXI558OY/zwEhH9RuYqNpiYa6DM0fAHflkjS2ksXnyLG7tdmSxoyNz3G3K2c8GJ4HsYOCMluoKF237u+6kwVN4Vj+TOHEeAHmVDA+lIxgIOaYJOkDETdofoIsEKHy8MBwdjxHxnRTeKiduoKquzcRKg1nubhsHeeiatMl7cJb3pgrZ9BexuQ8PZpZGMHOkMnCDBOFR9vAzo6GuBrVsaHWk77wIREKawqhimc7ib4nsw9EnFfeJBvTZrc5aWpJskeXKffLD76ebatqvMnTzXFngAE0yBpgXjzfgLFqe4yHX6QvVDPCABuY1XGAH+SmAkd231f2yd8UyIulxj1K2qO5zald/5Yv9mxLuNt/F/riYVYWGqXEy4B4Hvq9g51Jl2Q19jmwKQKwABf1gHe5TV9VveqcT49FnVWu6DksdwEQGFdWpu+K4QkigGyOdQGK5++qJUUryeU2NxeNioRUP6yb5P1xLQfEteinDG6Bu5ltM28I0A/Kn6ZaspDWnCBsg8xPpHXugUlVpC5tH86gr2Ipl0CB6MHzNu3tg5rnsji9aCFhMinyp25jsnmbw967Gudsr9Z7KrpMCYZrNajIMfDW/fTjFZ5fNoNQGTR3Y1+1yDUgwYvRsyKq5nnFuAY5XfBtZ00dRnTeg0qD8Gg3MISls0btSZhXVrY1kIkR/lqHnUrc5w3+ZLC3t51Fm/zgmRnGsK6Xx2x5LE8IDjw2xYjGLqcl84TsLcOXcMl+ApZ8ZPT2R36tI2INk+wtlVNj6n+rmHIHdwvp/bf04PyctQifrH3FW6T4fNV5Wckdg7HgABTvXd/Ldylxjd5AbGLwremvI4a1VQTT0YCyTKm7ocyZMqUWM7QPj2yyE+YSm7HUg4xTdtymAGFyBIKjMjhCb6JvC6EHEANlEs6IfG9gwGoJIuVyaJg0SPyi3k1boq9YzY4o8D10/PpqKZW6go++tVIhG/WF3b+5t1PM9chEHZuIsCNpupbcePiR4d9tS/45XBsb37gDwZwGTAekvlySvyk61w+KwLo2qHitCHaIicnJX9QVxZ1QTmSIKol6NwCT57Ub/A/MPaUxO3Igp72xU0dkwfq385qotgwKc2BA6mhFE+lXvAnFQU1F1is/SY20NXoIqT9cVdb6I7ZfDNCB2tIaUq/hiZuy1gRV03Fza/HmWvMpkd9Cb3aNbZC03TRtlHGRekvc5w6nWyAgFhpwV1iERZwvqyigZMfmgDdF/6j7RZ0f9j3Lso5EUGulV+jeMTJXMKC5/eWlDOgoGFjgOCVfdqqw+CcgAP7F1uG6NgtoXsBNmi1GLOVbsLGJBytH20Lss7umeJuyiivRMRZlnuI85P9Pf3TOl5M3jTejvEjaUuk9fBnUxXlaBPmVpz57VLF6xYqZlyJUYEjHYVuW1R1fNnI3/wWQLLeC6xKCzoQaTNezdERdSqBQu6yIipNNUFqa7+zSDDed64Ev25XlOyXSRwfEvWUv577cJuo4+QVcmeYOy+8Wj9/kBjQ+NlEXTbLPYIed/KZAl2WYJPkSDcPElOs2UyyjclSXcfzYlzq6clI6svH51uKNQqT8XHcNXuKuWoz3JZZ3wGKet5+Ge/BCFXPnGW6RaXFTt54ZvFkVpnpXVl9wWB6ttH7HpxdQGxOFp7JeqBA4+8Qs5dBp/EfhVGxKS0nO4JBATwYko+pX8PiflDyM6so1rzojPYAtE7dEvsRHf0tE2yffA5ne4TlVYicChM4V+alss8HXZryUFfQnl+ZzYH99d05nnmD6d2tELs/oKgU1ZK48vwYqhLv8VmWFmyxu2UQXVKAPJjmDRixctQHafQEFZJatEJRlByjpnKzvWlgzeh4yQnUU1JaiQvCBCeXbYmhE4O+shF4PLgDFkLi73FfL81kgxhdav1zKKy10AOgK6pzzIiZd3TlVK0kG4RSztKTGo5CYDsLL95TuDjIbm7UZk6EShPYmh+jMKtaJSnHF22sdtHAJ23xAtpQdxEVKyw1XZTfLDJ/Gki8Ub0zvxSU9ajiS5WPaKUCBcwAvZ29WMPsnmaghk3jgjsxUSeciLgrHyPxBZqAAeX1LA9V4NZECnE71RxzyBZQzeyXk3SIzxtkmniHBxmG3LhzwImlWPAaiFBVw4j38cIMcxH1JEW6yf8ymTpodAPk7sYfEDhLpU+auvOelznFaCxrLum+YqGBCzBYpQbxMoLidSRq3YFzuvRpBtmr0GIi+OsiKtYWHY2BkD14y9SVP/dJ67gYBGCxHtTQyN6P8uiCmxYc9ltyv25dX4nMq5yYXVW8xS8RQMWskSF39l3fWtUTzfFMhoEyJ35/FEzy0TT9sSRAoZrEDXTggNQVnMpYyMfwmQuoU5/y4R6kZ2uwaPw/Ggk8gs/sredoabmLE/FxltazUdFSRIuHIMBgPGQdQWHczuc3nplHXkOghUU8dLGpJ810bPlaax/hWw9MhXz0tNGyE/DXtZ6D72wzkAJO6l/8obmDarQrwuuGq7drZZZ10AdX/MRsDob+HIy7ddqxVMd1ZyG6+ULYymZYOk+XXtKNiVpw1UV+rH7bBqGXmvpTGtPQgmfA3x7eMVTp8m7s7mYGbGxaCHAsWDvY/EgsjBndX3nT2ZeRVIdZYMPLppSihhXPcBK3y98LM/9ZznQ0hImdcMv4Moxpu2CCRxu/ANnDYAAFmUtnNeBr4zOg7EQcJoJQ68XApbd63xvaJOObRfaxtSV9OyqU6Q+w3eXrjeDpExIVgcsyQS1j44osFlulWquKv36tDm5wEJEm7ByII6j3VifhDVo8SpuEDRsOzBk4XkTKALKLEYmsQ6EeeCBGmQzwO5LRUf185BtrHsDrRqHIJunl5azd9ti2+6PX6rXUFubOI4tXyutvzck2o2TnsDXBBZFxgx5W5HvU8KOoQNWlk0SeAPEtB1I2q9SuW6t69pnW18ZWI0aqRwVIqUPkzk2fOSpT7f6slQOjvfRow7MnGZrdt56HKy7tdJ7qgsO1+rw4yauKuI1TIkv12vHnz5knqPBpuYqu6KKqmzP9JUYk/VHfTJbz3TGIk+BU8WTIwFtLLF5TwAqJwOsQ30QOhBb2PoJOncTsrcCC6GXO3iDkHw7XF3BwuKQpaKBgBRSDECJJqMrfKNzcM+v+8Nfjjokmi5GHItlctxJpRNuxxQWx9DivthwiWQ529s/g1fqL43+ZSsrmonpRJSqVzRgt7N0pbPAlRf+PUU4BLnSoCGJoFArMQFnX8LoA66i+BZi4mLQ+ueF90MgOvMk4ybjcBwmJtvWza5P81TNYZRc8RWQU+EIL0N/gcMLtxkllozBImduVn2aOqevIn4l97sgL+c/G1TZIRpCJnZSMFp90K02A4+MYFayiz2iyJ7JUxYY9RC6tnnj6JEdyAPwDRzkBH8u5i+vFenfTmcJyS9hEwSELBeczjOzor2sCMMzXfBxd02x9t4f6NQYTRy+YNjVCVMdDAUTNQispZ+kBm5K8lGACUXggZ8oAmLgctp9DvYOGzeungKvE45ynthkORAYvWaNwmAaDtf9LDL47MpshFJygpwq/LQRLD6NUALNkbdxolUUdZayopUjLxpPce4GXEGUPovNbyFDZkCVXv6DQx2Xj8l9Wb3/l9G2Lvqj013xgJkt84e+mROUSITSyZaNeWusvvQIuEJgDnxpD3tVuc/NIN1DbbsPBqfd4iNeW8BcH2Guv+PlU4Al4OaHMnUm2CsA+JXPFxFiGN2KBoitnT/SqkZfKoKlm90jdFVfvlNtm9KqzLQ/NipDQ6rpqaekuitM64S02ZTBzfSMl5Tnm6h8tk3tNdHj3TuPURileELTKGZ6/IbgTrY76sry3I8TdYmdhQS7ctD3LMHCiNzHyXjdDKo62sCg6k/y4jrUa0ru+rjk/jnt0VDeWpD8qjt5XzeyGd+v6TSEagkD0KfpHhZ3Cm7yyKz4LdMeRFkvZYSxAowt6wFuqVzNRG5OZ+1d2bblcZs7v5brrNgdJwliv25UraBjP/5t/G0yT+MPvzPizDrZ119HesFbJxQp8+9qBZ8roKaoYBYuZvz41bBtGUrgyAYzZ5eY3ggXig53DuPsAxQFz02YxVFEA+s9QM3WJSsMCAgYpWz+d7OwFgbmJ+NL0NGG7tg+6K0dTAye4QLZXw2AjmNFRfEmMNSBBUitpG8sH/IxpyeCRw9viT5WTpMTknRhhROAnKXivtEhsGRc5pq2LmTRSp0rt6ssRIpx2eA2R15p34AoyaJWPt49x5vfuRrSwnzcWulIqAOp1z4+W0ZNeQLGs1bTQtJGMQ1b33K9777d1+gY3TSXE0Cp4jS9o/nR6wFutlq1cB7NS6cqXzPSKTVuJMaFGTMMetRj5iV3PBYdpFyKpbnqvdK/MmGbXVvn7G/pJ2vu/8/9qvn79bvycBr+6Ax89Ff8ud8Bb9wj6/tQrSeBBRpHq5LUA3IpWCaqr8TkpzyRp/ta4loutak/VbRfxxD6ufY9vnFivaqVnr4c8pJS2tR3ORiMoR8PSqA/gEo2b0k9RDayPyaxycxSUVhxJF1XMhYXn57Y29bQK0G0kHBDEo2d/kycSnqekUAe28lfq930fftG9Nq0KYuIZazBM78xJ3oW5Gnya2JV2WywZRWnQ4sEAEVDsqxmf2QeUDgOnfXf5S+DFhzrjpRnX7rCZjdtugmDdMQDHYyhjhWc1xO56mzR8gKrRYbTfVp7Lz4Fd0R8qTVfrtxZsIT7skZ7ox4Qqc9lRR93JXYeP6i6UY0c3WcbNLw6UMxF+/DVDD3ycVjNUg82KsRQicBPIZe7wPgVX/iHD9BV1dSnZdz+V7E2sEl75IN8aGlE/xPrefdjrGi1sQNzgyHfAfCMdyXaSrRRE2ffM248CJQMpTTt06sVAuS+fMyo+6/5ntEAm0SipUXrhA5dJRdex9tnrNfILKILUuDVAIxFHg/NToWgWx7K5ktNSbtY9SRytknQhvSej6yfZnmuZ133Afwsby9QG9dvC0tZTKwny5JQhlaFS6lCIA4X7X+fALIGCA6f0eIBKTGus0sd263DgIPHC3pJfLlAjTgq9qPuhhYsCbwOzlZD+fWPC3EZxVigUp1PkAqZ0cCr1qWZNvxZLI91jNly2R3qrkSV3f7wDqNoKWNBvH5cREXKFqI4CJrMrDEr99Gx+vGEq9EAppXM1CfzB1/qtYaxJC8yd9trZbT5ZWvjBVnotu8ZvuQ6cn0dOWutCJR+EaWcDiA+hOxmXWXdEc+f9R7KLbQGIcqBEPxHpbven1/NMF3HyAGWLtrJm++0I3kk88sLThcgVqUbIZj2YlUriU+XSDxbRFBhiC0CqEz5dNXynBl8Dt93yQVF1ZcKCTaHwABq+OsKJ+FMuOufBEA2Zol2qet0rFwCY5LnY4IOxByvfnZv0WqSL7B6DQGvAszqZF+LzwL818GNnkYYBZuDmpMEScfFUuBhpGlPibo5PAcIreYkwNMICwNUW2KzV+7KlyG4WqeHpaQFkRFUbkqM/Q/1jnD9eTE5F10DhAw3Dtru9jeCF8wmdeg/Qt7mtG3MzFuP4X01lQXhvwpDe5forGJwEFRHaJ2fa7ddnRiWWM6Icb61DpbezjAyaDQcO56JyiObKf8052OsT/urlfoHCDjkSuXhNLB3aHcu4iAdnqlcApnHI3Ea6JeuvSO9Ee6zClQlfhWe6XLgcjzRKhdNnnP+hRNhn5Eqif/CFjfsVDi+zemmWqaxInwOeJ6kcEh/Yh7E8b85lqCro2nCX1+BykGTUlWfhlwZgVI2SDlXMJ2kP2wlhf1+hxs77MVAsx/7+u+/QlxWFLybypLwq2aETQu/Ayx1K06/TDaSWQrPszjDGSe8F0wxQHsdGQA9gYAiPkrwiXQe6cF7tnPNL4AAAA="
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
