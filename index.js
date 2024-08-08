const display = document.getElementById("inputt");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const buttonText = button.innerText;

    if (buttonText === 'C') {
      display.value= '';
    }

    else if(buttonText === 'X')
{    display.value = display.value.slice(0, -1);

}
    else if(buttonText === '='){
  try {
    display.value=eval(display.value)
  } catch (err) {
    display.value=err
  }

 
    }
    else {
      display.value += buttonText;
    }
  });
});
