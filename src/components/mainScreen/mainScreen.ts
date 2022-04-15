export const mainScreen = (): HTMLElement => {
  const main = <HTMLElement>document.createElement('main');
  const divTitle = <HTMLDivElement>document.createElement('div');
  const h1 = <HTMLHeadingElement>document.createElement('h1');
  const button = <HTMLButtonElement>document.createElement('button');

  main.className = 'background';
  divTitle.className = 'title';
  h1.innerText = 'Помогите бабушке нарядить елку';
  button.className = 'start-game';
  button.innerText = 'Начать';

  divTitle.append(h1);
  main.append(divTitle);
  main.append(button);

  return main;
}
