// alert("Hi")
const grids = document.querySelectorAll(".card");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
}
,{
  rootMargin: "-500px"
},
{
  threshold: .2
}
);

grids.forEach((grid) => {
  observer.observe(grid);
});
