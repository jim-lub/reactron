import { doSomething } from './lib/doSomething';

const doSomethingButton = document.getElementById("doSomething");

export const init = () => {
  const handleClick = () => {
    console.log('Clicked button..')
    doSomething();
  }

  doSomethingButton.addEventListener("click", handleClick);

  console.log('Initialized..');
}
