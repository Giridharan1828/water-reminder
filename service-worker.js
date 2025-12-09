// Activate immediately
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());

  // Create hourly repeating alarm
  if (typeof chrome !== "undefined" && chrome.alarms) {
    chrome.alarms.create("waterReminder", { periodInMinutes: 60 });
  }
});

// Listen for alarm trigger
if (typeof chrome !== "undefined" && chrome.alarms) {
  chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "waterReminder") {
      sendHydrationNotification();
    }
  });
}

function sendHydrationNotification() {
  const messages = [
      "Hi Akshuuu 💗 thanni kudichiyaa illa 🥺?",
      "Hydration time jii, pleachh drink water 💞",
      "A gentle reminder for drinking water angel 💧",
      "Sipyyy sipyyy water sippyyy, pretty girl 💖",
      "Stay hydrated for yourselves , myself and for the best days ahead🤩💗",
      "Oii have some water for me na 🥺💗",
      "Water break jiiii, ipoveyy neer parugu 💧✨",
      "Beautiful soul need water to stay hydrated always 💖",
      "Drink a little water,and mover little sharper💗",
      "Akshu, thanni kudichidu golden peacock 🥺💞",
      "Small reminder: water is waiting for youuuu 💧💗",
      "Pretty princess, hydration is important maa 💖",
      "Please drink water and stay glowy glowyyy ✨💞",
      "Kutty, oru sip kudichidu vaa 🥺💧",
      "Angel, sent to H2o goo get him 💗",
      "Hydration check, neenga thanni kudichingala? 💞",
      "Cute girl deserves the best—start with water 💙",
      "Sippy sippy time daa maa💖",
      "Wanna see you healthy and happy, drink water okay daa maa? 💗💧",
      "Soft reminder from your biggest fan: DRINK WATER 😘",
      "Hello sunshine, time to hydrate 🩷💧",
      "Thanni kudichaa face will glow glow  vaam🤩💗",
      "Drink water maa, your body loves you 💞",
      "You're too precious, so no skipping water okay 🥺💗",
      "Water ta poi ‘I’m back’ nu sollu da maa 😂💧",
      "Hydration hug from me to youuuu 🤗💗",
      "Pattu ru sip panna, naan happy 🥺💞",
      "Pretty girl, your bottle is calling 💧💖",
      "Break time = water time jii 💗",
      "Healthy habits start with one sip daa laddoo💞",
      "Go drink water,my superstar ✨💧",
      "Dearest Akshu, thanni kudichaa proudest ah irupen 🥹💗",
      "Hydration goddess mode ON after one sip ?😍💞",
      "Nalla paadum la enakaaga , apo thanni kudikanum la? 🥺💖",
      "Take care of yourself , start with water 💧💗",
      "Thanni kudichaa headache um varadhu daa pattu 💗",
      "You glow more than the sun… but water helps 😌💞",
      "Please sippyyy sippyyy water for me 💧💗",
      "Angel wings need hydration too la muhh💖",
      "Drink water, or else you will be brutally bitten🥰🥰✨💧",
      "Pretty soul, stay hydrated always 💗",
      "Sip water, breathe, smile… repeat 💞",
      "Hydration queen entry loading… after one sip 💖",
      "Oru tiny sip for body, one big smile for me 😘💗",
      "Stay soft, stay sweet, stay hydrated always angel 💧💞"
  ];

  const msg = messages[Math.floor(Math.random() * messages.length)];

  self.registration.showNotification("💧 Hydration Reminder 💗", {
    body: msg,
    icon: "/icons/water.png",
    badge: "/icons/water.png",
    vibrate: [200, 100, 200]
  });
}
