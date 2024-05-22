// course code validation code
let save = document.querySelector(".save");
let check_Mark = document.querySelector(".check-mark");
let time_Section = document.querySelector(".time-section");

save.addEventListener("click", () => {
  validation();
});
function validation(params) {
  let inputs = document.querySelectorAll(".input");

  if (params == "clear") {
    // clear the one is not valid
    for (let index = 0; index < 8; index++) {
      if (document.getElementById(`input${index + 1}`).value.length < 5) {
        document.getElementById(`input${index + 1}`).value = "";
      }
    }
    // remove validation tags
    for (let index = 0; index < inputs.length; index++) {
      inputs[index].classList.remove("is-invalid");
      inputs[index].classList.remove("is-valid");
    }
  } else {
    for (let index = 0; index < inputs.length; index++) {
      inputs[index].addEventListener("input", updateValue(inputs[index]));
    }

    function updateValue(input) {
      if (input.value.length < 5) {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
      } else {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
      }
    }
  }
}

// check mark animation
function check_Mark_Func(time_left_Inseconds) {
  check_Mark.classList.add("success-checkmark");
  time_Section.classList.add("notActive");
  setTimeout(() => {
    check_Mark.classList.remove("success-checkmark");
    time_Section.classList.remove("notActive");
    validation("clear");
    time_left_Inseconds.classList.add("time-left");
  }, 800);
}
