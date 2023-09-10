document.addEventListener("DOMContentLoaded", function () {
  const socialMediaIcons = document.querySelectorAll(".intro .social-media a");

  gsap.from(socialMediaIcons, {
    opacity: 0,
    y: 20,
    stagger: 0.2,
    duration: 1.5,
    delay: 0.5,
    ease: "power3.out",
  });

  const introText = document.querySelector(".intro h2");
  const subTitle = document.querySelector(".intro h3");
  const introDescription = document.querySelector(".intro p");
  const moreAboutBtn = document.querySelector(".more-about-btn");

  gsap.from(introText, {
    opacity: 0,
    y: 20,
    duration: 1.5,
    ease: "power3.out",
  });

  gsap.from(subTitle, {
    opacity: 0,
    y: 20,
    duration: 1.5,
    delay: 0.3,
    ease: "power3.out",
  });

  gsap.from(introDescription, {
    opacity: 0,
    y: 20,
    duration: 1.5,
    delay: 0.6,
    ease: "power3.out",
  });

  gsap.from(moreAboutBtn, {
    opacity: 0,
    y: 20,
    duration: 1.5,
    delay: 0.9,
    ease: "power3.out",
  });
  
})