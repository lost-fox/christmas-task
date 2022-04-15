import { DataType } from "../types/dataType"
import { getFromLS } from "../utils/getFromLS"
import { COUNT_TOYS_CARD } from "./constants"

export const drawToysCards = (card: HTMLElement): void => {
   let dataToys: DataType[];
   if (getFromLS('chosenToys') !== '') {
      dataToys = JSON.parse(getFromLS('chosenToys'));
   } else {
      dataToys = JSON.parse(getFromLS('dataFull'));
   }

   for (let i = 0; i < COUNT_TOYS_CARD; i++) {
      const cardToy = document.createElement('div');
      const cartToyCount = document.createElement('div');
      const p = document.createElement('p');
      cartToyCount.className = 'card-toy__count';
      cartToyCount.append(p);
      cardToy.append(cartToyCount);
      card.append(cardToy);

      if (dataToys[i]) {
         const img = document.createElement('img');
         cardToy.className = 'card card-toy';
         p.textContent = `${dataToys[i].count}`;
         img.src = `${dataToys[i].url}`;
         img.alt = 'toy';
         img.draggable = true;
         cardToy.append(img);
      } else {
         cardToy.className = 'card card-toy no-active';
         p.textContent = '0';
      }

   }
   const cardsToys = <HTMLElement>document.querySelector('.cards-toys')
   const mapTree = <HTMLElement>document.querySelector('map area');


   let dragX = 0;
   let dragY = 0;

   function onDragOver(event: MouseEvent) {
      event.preventDefault();
   }

   function onDrag(event: DragEvent) {
      if (!event.dataTransfer || !event.target) {
         return;
      }

      event.dataTransfer.setData('img', event.target.src);
      dragX = event.clientX;
      dragY = event.clientY;
   }

   function onDrop(event: DragEvent) {
      if (!event.dataTransfer) {
         return;
      }

      const imgItem = event.dataTransfer.getData('img');
      const img = document.createElement('img');
      img.src = imgItem;
      img.className = 'toysOnTree';
      img.style.cssText = `position: absolute; z-index: 20; top: ${event.clientY - dragY + 100}px; left: ${event.clientX - dragX / 3}px;`;
      mapTree.append(img);
   }

   cardsToys.addEventListener('mousedown', event => {
      const target = event?.target as HTMLElement;
      if (!target) {
         return;
      }
      if (target.tagName === 'IMG') {
         const toy = target.parentNode;
         if (!toy) return;
         const countToy = <HTMLElement>toy.querySelector('.card-toy__count p');
         let count = +(countToy?.innerHTML);
         if (count > 0) {
            toy.addEventListener('dragstart', onDrag);
            mapTree.addEventListener('drop', onDrop);
            mapTree.addEventListener('dragover', onDragOver);
         }
         count--;
         countToy.innerHTML = count.toString();
         count++;
         if (count <= 0) {
            countToy.innerHTML = '0';
            target.draggable = false;
            toy.classList.add('no-active');
         }
      }
   })
}
