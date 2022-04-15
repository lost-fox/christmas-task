import { getFromLS } from "../utils/getFromLS";
import { getImage } from "../utils/getImage";
import { setInLS } from "../utils/setInLS";
import { COUNT_BG } from "./constants"

export const drawBgCards = async (cards: HTMLElement): Promise<void> => {
   for (let i = 1; i <= COUNT_BG; i++) {
      const imgBg = getImage(i, 'bg', 'jpg')
      const data = await fetch(imgBg);
      cards.innerHTML += `
      <div class="card card-bg">
               <div class="card-bg__img">
                  <img src="${data.url}" alt="bg">
                </div>
              </div>
      `
   }

   const card = <NodeListOf<HTMLImageElement>>document.querySelectorAll('.card-bg__img img');
   const bgImage = <HTMLElement>document.querySelector('.main-tree-container');

   if (getFromLS('chooseBg') !== '') {
      bgImage.style.backgroundImage = `url(${getFromLS('chooseBg')})`
   } else {
      bgImage.style.backgroundImage = `url(${card[0].src})`
   }

   card.forEach(bg => {
      bg.addEventListener('click', () => {
         bgImage.style.backgroundImage = `url(${bg.src})`;
         setInLS('chooseBg', bg.src);
      });
   })
}
