document.addEventListener("DOMContentLoaded", function () {
  // Анимация появления карточек
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("appear");
    }, index * 200);
  });

  // Подсветка кнопки при нажатии
  const orderButtons = document.querySelectorAll(".order-btn");
  orderButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.style.backgroundColor = "#ffb74d";
      setTimeout(() => {
        button.style.backgroundColor = "";
      }, 1000);
    });
  });

  // Ховер эффект для карточек
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.05)";
      card.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
      card.style.boxShadow = "";
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider-wrapper");
  const cards = document.querySelectorAll(".card");
  const dotsContainer = document.querySelector(".dots-container");
  let currentIndex = 0;

  cards.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  updateDots();

  function goToSlide(index) {
    currentIndex = index;
    const offset = -currentIndex * (350 + 30);
    slider.style.transform = `translateX(${offset}px)`;
    updateDots();
  }

  function updateDots() {
    document.querySelectorAll(".dot").forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }
  document.querySelector(".prev-btn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    goToSlide(currentIndex);
  });

  document.querySelector(".next-btn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length;
    goToSlide(currentIndex);
  });
});
