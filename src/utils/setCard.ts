import { MAX_COUNT_CHOSEN_TOYS } from "../components/constants";
import { drawCards } from "../components/drawCards";
import { DataType } from "../types/dataType";
import { chosenToys } from "./chosenToys";
import { getFromLS } from "./getFromLS";
import { setInLS } from "./setInLS";

export const setCard = async (data: DataType[]): Promise<void> => {
  const catalog = <HTMLElement>document.querySelector('.catalog-toys');
  catalog.innerHTML = '';
  if (data.length === 0) {
    catalog.innerHTML = `<div class ="no-toy">Извините, совпадений не обнаружено! </div>`;
  } else {
    for (let i = 0; i < data.length; i++) {
      catalog.innerHTML += drawCards(data[i]);
    }
  }
  const cardsToys = <NodeListOf<HTMLElement>>document.querySelectorAll('.card');
  const countToy = <HTMLElement>document.querySelector('.count-toy');
  const catalogToys = <HTMLElement>document.querySelector('.catalog-toys')

  let chosenNum: string[] = [];

  if (getFromLS('chosenToys') === '') {
    chosenNum = [];
  } else {
    chosenNum = (getFromLS('chosenNum').split(','));
    countToy.innerHTML = `<p>${chosenNum.length}</p>`
  }

  if (getFromLS('chosenToys')) {
    const chosenToy: DataType[] = JSON.parse(getFromLS("chosenToys"));
    cardsToys.forEach((card) => {
      for (let i = 0; i < chosenToy.length; i++) {
        if (chosenToy[i].num === card.getAttribute('value')) {
          card.classList.add('chosen');
        }
      }
    })
  }

  catalogToys.addEventListener('click', event => {
    const target = event.target as HTMLDivElement;
    if (!target) return;
    if (target.tagName === 'DIV') {
      if (chosenNum.length == MAX_COUNT_CHOSEN_TOYS) {
        target.classList.remove('chosen');
      } else {
        target.classList.toggle('chosen');
      }
      data.forEach((toy) => {
        if (target.getAttribute("value") == toy.num) {
          if (chosenNum.indexOf(toy.num) == -1) {

            if (chosenNum.length < MAX_COUNT_CHOSEN_TOYS) {
              chosenNum.push(toy.num);
            } else {
              alert('Извините, все слоты заполнены')
            }
          } else {
            chosenNum.splice(chosenNum.indexOf(toy.num), 1)
          }
        }
      })
      setInLS('chosenNum', chosenNum.toString());
      chosenToys(chosenNum);
    }
  });
}
