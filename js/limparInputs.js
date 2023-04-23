const cadastroBtn = document.getElementById("cadastro-btn");

cadastroBtn.addEventListener("click", function (event) {
  event.preventDefault(); 
  const inputs = document.querySelectorAll("input");
  inputs.forEach(function (input) {
    input.value = "";
  });
});
