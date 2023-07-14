const faqCard = document.querySelectorAll(".faq__card");

faqCard.forEach((card) => {
  card.addEventListener("click", () => {
    card.firstElementChild.lastElementChild.classList.toggle("show");

    if (card.firstElementChild.lastElementChild.classList.contains("show")) {
      card.lastElementChild.firstElementChild.classList.add("down");
    } else {
      card.lastElementChild.firstElementChild.classList.remove("down");
    }
  });
});
