// menu toggle awal
const navToggleBtn = document.querySelector(".nav-toggle"),
    aside = document.querySelector(".aside"),
    navList = document.querySelectorAll("li.link");

navToggleBtn.addEventListener("click", () => {
    asideSection();
});

navList.forEach((nav, index) => {
    const a = nav.querySelector("a");
    a.addEventListener("click", function () {
        asideSection();
    })
});

function asideSection() {
    aside.classList.toggle("open");
    navToggleBtn.classList.toggle("open");
}
// menu toggle akhir

