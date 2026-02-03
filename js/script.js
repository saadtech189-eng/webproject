document.addEventListener("DOMContentLoaded", () => {

  /* MOBILE MENU TOGGLE */
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });

    // Close menu when a link is clicked
    const menuLinks = menu.querySelectorAll("a");
    menuLinks.forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.add("hidden");
      });
    });
  }

  /* SLIDER */
  let slides = document.querySelectorAll(".slide");
  let dots = document.querySelectorAll(".dot");
  let index = 0;

  function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => {
      dot.classList.remove("bg-white", "opacity-100");
      dot.classList.add("bg-gray-400", "opacity-70");
    });

    if (slides[i]) {
      slides[i].classList.add("active");
    }
    if (dots[i]) {
      dots[i].classList.remove("bg-gray-400", "opacity-70");
      dots[i].classList.add("bg-white", "opacity-100");
    }
  }

  // Auto-slide every 5 seconds
  setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 5000);

  const rightArrow = document.querySelector(".arrow-right");
  const leftArrow = document.querySelector(".arrow-left");

  if (rightArrow && leftArrow) {
    rightArrow.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      showSlide(index);
    });

    leftArrow.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
    });
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      showSlide(index);
    });
  });

  /* ================= COUNTER ANIMATION ================= */

  const counters = document.querySelectorAll(".counter");

  function startCount(counter) {
    const target = Number(counter.getAttribute("data-target"));
    let count = 0;
    const speed = 20;

    const update = () => {
      const increment = Math.ceil(target / 100);
      count += increment;

      if (count < target) {
        counter.innerText = count;
        setTimeout(update, speed);
      } else {
        counter.innerText = target + "+";
      }
    };

    update();
  }

  window.addEventListener("scroll", () => {
    counters.forEach(counter => {
      const top = counter.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (top < screenHeight) {
        if (!counter.classList.contains("started")) {
          counter.classList.add("started");
          startCount(counter);
        }
      }
    });
  });
});



const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target + "+";
    }
  };
  updateCount();
});
