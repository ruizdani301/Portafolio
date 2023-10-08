/* The code is adding an event listener to the element with the id "cvesp". When that element is
clicked, the function inside the event listener will be executed. Inside the function, it sets the
variable `ruta` to a specific URL. Then, it changes the `window.location.href` to the value of
`ruta`, effectively redirecting the user to that URL. */

document.querySelector("#cvesp").addEventListener("click", function () {
  const ruta =
    "https://docs.google.com/document/d/144Pzlmlp8IvcApLCeoQg_c_JJtbA3qFRHSS__CElujA/edit?usp=sharing";
  window.open(ruta, "_blank");
});

/* The code is adding an event listener to the element with the id "cving". When that element is
clicked, the function inside the event listener will be executed. */

document.querySelector("#cving").addEventListener("click", function () {
  const ruta_ing =
    "https://docs.google.com/document/d/1jCM6oU_5WigTrpTtbZE-FIo8oOxK_b3OoUtJtNfIZMM/edit?usp=sharing";
  //window.location.href = ruta_ing;
  window.open(ruta_ing, "_blank");
});
