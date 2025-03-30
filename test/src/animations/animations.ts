window.addEventListener("scroll", () => {
  let figure1 = document.getElementById("figure1");
  let value = window.scrollY;
  // console.log(value);

  if (figure1) {
    figure1.style.right = value * 0.23 + "px";
    figure1.style.transition = "linear";
  }
});

window.addEventListener("scroll", () => {
  let slide1 = document.getElementById("slide1");
  let slide2 = document.getElementById("slide2");
  let slide3 = document.getElementById("slide3");
  let slide4 = document.getElementById("slide4");
  let home = document.getElementById("home");

  let value = window.scrollY;
  if (!home) {
    return;
  }
  const viewHeight100 = home.getBoundingClientRect().height;
  //slider animation
  if (slide1 && slide2 && slide3 && slide4 && home) {
    if (value >= viewHeight100) {
      slide1.style.position = "sticky";
      slide1.style.top = "calc(50vh - 175px)";
      slide1.style.opacity = "1";
    } else {
      slide1.style.position = "sticky";
      slide1.style.top = "100vh";
      slide1.style.opacity = "0";
    }

    if (value >= viewHeight100 * 2) {
      slide2.style.position = "sticky";
      slide2.style.top = "calc(50vh - 175px)";
      slide2.style.opacity = "1";
    } else {
      slide2.style.position = "sticky";
      slide2.style.top = "100vh";
      slide2.style.opacity = "0";
    }

    if (value >= viewHeight100 * 3) {
      slide3.style.position = "sticky";
      slide3.style.top = "calc(50vh - 175px)";
      slide3.style.opacity = "1";
    } else {
      slide3.style.position = "sticky";
      slide3.style.top = "100vh";
      slide3.style.opacity = "0";
    }

    if (value >= viewHeight100 * 4) {
      slide4.style.position = "sticky";
      slide4.style.top = "calc(50vh - 175px)";
      slide4.style.opacity = "1";
    } else {
      slide4.style.position = "sticky";
      slide4.style.top = "100vh";
      slide4.style.opacity = "0";
    }
    console.log(value);
    console.log(viewHeight100);
    console.log(slide2.getBoundingClientRect().height);
    console.log(slide2.getBoundingClientRect().top);
  }

  let about1 = document.getElementById("about-tripo");
  let about2 = document.getElementById("about-tripo-description");
  let about3 = document.getElementById("about-tripo-learnmore");

  if (about1 && about2 && about3) {
    if (value >= viewHeight100 * 5.5) {
      about1.style.opacity = "1";
    } else {
      about1.style.opacity = "0";
    }
    if (value >= viewHeight100 * 5.8) {
      about2.style.opacity = "1";
    } else {
      about2.style.opacity = "0";
    }
    if (value >= viewHeight100 * 6) {
      about3.style.opacity = "1";
    } else {
      about3.style.opacity = "0";
    }
  }

  let game1 = document.getElementById("game1");
  let game2 = document.getElementById("game2");
  let game3 = document.getElementById("game3");
  let figure2 = document.getElementById("figure2");
  if (game1 && game2 && game3 && figure2) {
    if (value >= viewHeight100 * 7.5) {
      game1.style.opacity = "1";
      game1.style.left = "100px";

      game2.style.opacity = "1";
      game2.style.right = "100px";
    } else {
      game1.style.opacity = "0";
      game1.style.left = "0px";

      game2.style.opacity = "0";
      game2.style.right = "0px";
    }

    if (value >= viewHeight100 * 8.4) {
      game3.style.opacity = "1";
      game3.style.left = "100px";

      figure2.style.opacity = "1";
    } else {
      game3.style.opacity = "0";
      game3.style.left = "0px";

      figure2.style.opacity = "0";
    }
  }
  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll(".header-navigation li");
  var current: string = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    console.log(sectionTop);
    if (value >= sectionTop - 15) {
      current = section.getAttribute("id") || "";
      console.log(current);
    }
  });
  if (navLi) {
    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        console.log(li.classList.contains(current));
        li.classList.add("active");
      }
    });
  }

  let banner1 = document.getElementById("banner1");
  let banner2 = document.getElementById("banner2");
  let figure3 = document.getElementById("figure3");
  let contact = document.getElementById("contact");
  if (banner1 && banner2 && figure3 && contact) {
    if (contact.getBoundingClientRect().top <= viewHeight100) {
      banner1.style.top = -contact.getBoundingClientRect().top * 0.7 + "px";
      banner1.style.transition = "linear";
    } else {
      banner1.style.top = "0px";
    }
    console.log(contact.getBoundingClientRect().top);

    if (contact.getBoundingClientRect().top <= 200) {
      console.log(1);

      figure3.style.transform = "translateY(0px)";
      figure3.style.opacity = "1";
    } else {
      figure3.style.transform = "translateY(500px)";
      figure3.style.opacity = "0";
    }
    if (banner2.getBoundingClientRect().top <= viewHeight100) {
      console.log(banner2.getBoundingClientRect().top);
      banner2.style.top = -banner2.getBoundingClientRect().top * 0.7 + "px";
      banner2.style.transition = "linear";
    }
  }
});

import { gsap } from "gsap";

window.addEventListener("mousemove", (e) => {
  let circle = document.getElementById("cursor");
  if (!circle) return;
  gsap.to(circle, {
    x: e.clientX - 15,
    y: e.clientY - 15,
    duration: 0.5,
    ease: "power1.out",
  });

  // console.log(mouseX, mouseY);
  // circle.style.left = mouseX + "px";
  // circle.style.top = mouseY + "px";
});
