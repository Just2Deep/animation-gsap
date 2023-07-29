// gsap has two methods from and to
// gsap.to( element, object(props and values) )

gsap.to(".box", {
  x: 700,
  y: 200,
  duration: 1.5,
  delay: 1,
  backgroundColor: "#000",
  rotate: 360,
  scale: 1.5,
});

// gsap.from(".box", {
//   x: 700,
//   y: 200,
//   duration: 1.5,
//   delay: 1,
//   backgroundColor: "#000",
//   rotate: 360,
//   scale: 1.5,
// });

/*
gsap.to("h1", {
  x: 300,
  color: "#8dd742",
  duration: 2,
  delay: 1,
  stagger: 0.5,
});

gsap.to("h2", {
  x: 300,
  color: "#f91b47",
  duration: 2,
  delay: 2,
});

gsap.to("h3", {
  x: 300,
  color: "blueviolet",
  duration: 2,
  delay: 3,
  repeat: -1,
  yoyo: true,
  //use -1 for repeating forever
});

*/

// Creating timelines so animation happens synchronously

let tl = gsap.timeline();

tl.to("h1", {
  x: 400,
  duration: 1,
});

tl.to("h2", {
  x: 400,
  duration: 1,
});

tl.to("h3", {
  x: 400,
  duration: 1,
});
