const doSomethingButton = document.getElementById("doSomething");
const init = () => {
  handleClick = () => {
    console.log('Clicked button..')
    doSomething();
  }

  doSomethingButton.addEventListener("click", handleClick);

  console.log('Initialized..');
}

init();
