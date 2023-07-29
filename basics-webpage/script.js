//Adding animations using gsap!

let tl = gsap.timeline();

tl.from("#logo, .nav-links h3, .nav-logins h4,.nav-logins button", {
  y: -100,
  duration: 1,
  delay: 0.5,
  opacity: 0,
  stagger: 0.2,
});

tl.from(".main h1", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
});

tl.from(".main>img", {
  duration: 0.8,
  opacity: 0,
  scale: 0,
  stagger: 0.2,
});

tl.from(".main h5", {
  y: 30,
  duration: 0.5,
  repeat: -1,
  yoyo: true,
  opacity: 0,
});
