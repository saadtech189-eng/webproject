document.addEventListener("DOMContentLoaded", () => {

  /* SLIDER */
  let slides = document.querySelectorAll(".slide");
  let dots = document.querySelectorAll(".dot");
  let index = 0;

  function showSlide(i){
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[i].classList.add("active");
    dots[i].classList.add("active");
  }

  const rightArrow = document.querySelector(".arrow.right");
  const leftArrow = document.querySelector(".arrow.left");

  if(rightArrow && leftArrow){
    rightArrow.onclick = () => {
      index = (index + 1) % slides.length;
      showSlide(index);
    };

    leftArrow.onclick = () => {
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
    };
  }

  dots.forEach((dot, i) => {
    dot.onclick = () => {
      index = i;
      showSlide(index);
    };
  });

  /* ================= COUNTER ANIMATION ================= */

  const counters = document.querySelectorAll(".counter");

  function startCount(counter){
    const target = Number(counter.getAttribute("data-target"));
    let count = 0;
    const speed = 20;

    const update = () => {
      const increment = Math.ceil(target / 100);
      count += increment;

      if(count < target){
        counter.innerText = count;
        setTimeout(update, speed);
      }else{
        counter.innerText = target + "+";
      }
    };

    update();
  }

  window.addEventListener("scroll", () => {
    counters.forEach(counter => {
      const top = counter.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if(top < screenHeight){
        if(!counter.classList.contains("started")){
          counter.classList.add("started");
          startCount(counter);
        }
      }
    });
  });

});
/* product by category */

  const cards = document.querySelectorAll('.category-card');

  window.addEventListener('scroll', () => {
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if(cardTop < window.innerHeight - 80){
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }
    });
  });

  cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all .6s ease";
  });

