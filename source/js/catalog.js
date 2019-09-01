var cartLinks = document.querySelectorAll(".catalog__button");
var modal = document.querySelector(".modal");
var backdrop = document.querySelector(".modal-backdrop");

for (var i = 0; i < cartLinks.length; i = i + 1) {
  cartLinks[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      modal.classList.add("modal-show");
      backdrop.classList.add("backdrop-show");
    });
}

backdrop.addEventListener("click", function (evt) {
    modal.classList.remove("modal-show");
    backdrop.classList.remove("backdrop-show");
});
