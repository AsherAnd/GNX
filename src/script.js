// set animation of elements at start
gsap.set(".title .char", { y: "20vw" });
gsap.set("#Kendrick", { x: "100vw" });
gsap.set(".song-list", { opacity: "0" });

const tl = gsap.timeline();

tl.to("#Kendrick", { duration: 1.5, x: "0", ease: "power1.inOut" });
tl.to(".title .char", {
  duration: 1.5,
  stagger: 0.25,
  y: "0",
  ease: "back.out",
});
tl.to(".song-list", {
  opacity: "1",
  ease: "power1.in",
});
