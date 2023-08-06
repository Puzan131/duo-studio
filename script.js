function locomotive() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".container"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy(".container", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector(".container").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

function navborder() {
  var list = document.querySelectorAll("li");
  list.forEach((e) => {
    e.addEventListener("click", () => {
      list.forEach((li) => {
        li.style.borderBottom = "none";
      });
      e.style.borderBottom = "2px solid white";
    });
  });
}
navborder();

gsap.to(".page1 h1", {
  x: -80,

  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".container",
    start: "top 20%",
    end: "top 0%",
    scrub: 2,
  },
});
gsap.to(".page1 h2", {
  x: 80,

  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".container",
    start: "top 20%",
    end: "top 0%",
    scrub: 2,
  },
});
gsap.to(".page1 video", {
  width: "90%",
  ease: Power2.easeIn,

  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".container",
    start: "top 20%",
    end: "top 0%",
    scrub: 2,
  },
});
gsap.to(".container", {
  backgroundColor: "white",
  color: "#0F0D0D",

  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".container",
    start: "top -120%",
    end: "top -100%",
    scrub: 2,
  },
});
let tl = gsap.timeline();
tl.from(".page1 h1, .page1 h2", {
  rotate: "5deg",
  y: "20vh",
  opacity: 0.1,
});
tl.to(".page1 h2, .page1 h1", {
  roate: "0deg",
  duration: 1.5,
  y: 0,
  opacity: 1,
  ease: Expo.easeOut,
});
tl.from(".page1 video", {
  opacity: 0,
});
tl.to(".page1 video", {
  opacity: 1,
  delay: -2.5,
  duration: 1.5,
});
tl.from(".nav", {
  opacity: 0,
});
tl.to(".nav", {
  opacity: 1,
  duration: 1,
  delay: -3,
});

let cursor = document.querySelector(".cursor");
document.querySelector(".container").addEventListener("mousemove", (dets) => {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
});

let v1 = document.querySelector(".v1");
v1.addEventListener("mouseenter", () => {
  cursor.innerHTML = "Sound on";
  cursor.style.width = "100px";
  cursor.style.height = "20px";
  cursor.style.fontFamily = "'Poppins', sans-serif";
  cursor.style.borderRadius = "10px";
});
v1.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";
  cursor.style.width = "15px";
  cursor.style.height = "15px";
  cursor.style.borderRadius = "50%";
});
let v2 = document.querySelector(".v2")
v2.addEventListener("mouseenter", () => {
  cursor.innerHTML = "view";
  cursor.style.width = "70px";
  cursor.style.height = "20px";
  cursor.style.fontFamily = "'Poppins', sans-serif";
  cursor.style.borderRadius = "10px";
});
v2.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";
  cursor.style.width = "15px";
  cursor.style.height = "15px";
  cursor.style.borderRadius = "50%";
});


