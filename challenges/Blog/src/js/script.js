const btnHearts = document.querySelectorAll(".btn-heart");

btnHearts.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const heart = e.currentTarget.children[0];
    heart.classList.toggle("fa-solid");

    console.log(heart);
  });
});
