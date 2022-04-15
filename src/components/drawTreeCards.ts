import { getFromLS } from "../utils/getFromLS";
import { getImage } from "../utils/getImage";
import { setInLS } from "../utils/setInLS";
import { COUNT_TREE } from "./constants"

export const drawTreeCards = async (cards: HTMLElement): Promise<void> => {
   for (let i = 1; i <= COUNT_TREE; i++) {
      const imgTree = getImage(i,'tree', 'png');
      const data = await fetch(imgTree);
      const card = document.createElement('div');
      const cardImg = document.createElement('div');
      const img = document.createElement('img');

      card.className = 'card card-tree';
      cardImg.className = 'card-tree__img';
      img.src = data.url;
      img.alt = 'tree';
      cardImg.append(img);
      card.append(cardImg);
      cards.append(card);
   }

   const cardsTree = <HTMLElement>document.querySelector('.cards-tree');
   const main = <HTMLElement>document.querySelector('.main-tree-container');
   const img = document.createElement('img');

   if (getFromLS('chooseTree') !== '') {
      img.src = getFromLS('chooseTree');
      img.className = "spruce";
      img.useMap = "#tree-map";
      img.alt = "tree";
      main.append(img);
   }

   cardsTree.addEventListener('click', (event) => {
      const target = event.target as HTMLImageElement;
      if(target.tagName === 'IMG') {
         img.src = target.src;
         img.className = "spruce";
         img.alt = "tree";
         img.useMap = "#tree-map";
         main.append(img);
         setInLS('chooseTree', target.src);
      }
      
   });
}
