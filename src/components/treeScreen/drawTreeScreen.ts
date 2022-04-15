import { index } from "../.."
import { addChristmasLight } from "../../utils/addChristmasLight";
import { deleteChildren } from "../../utils/deleteChildren";
import { getFromLS } from "../../utils/getFromLS";
import { resetSettingTree } from "../../utils/resetSettingTree";
import { setInLS } from "../../utils/setInLS";
import { drawBgCards } from "../drawBgCards";
import { drawToysCards } from "../drawToysCards";
import { drawTreeCards } from "../drawTreeCards";
import { footerScreen } from "../footerScreen";
import { headerScreen } from "../headerScreen";
import { drawMainScreen } from "../mainScreen/drawMainScreen";
import { drawToysScreen } from "../toysScreen/drawToysScreen";

export const drawTreeScreen = (): void => {
   deleteChildren(index);
   const header = headerScreen();

   const divSearch = <HTMLDivElement>document.createElement('div');
   const buttonSnow = <HTMLButtonElement>document.createElement('button');
   const buttonAudio = <HTMLButtonElement>document.createElement('button');

   divSearch.className = 'search flex';
   buttonSnow.className = 'snowflake snow-off';
   buttonAudio.className = 'audio audio-off';

   divSearch.append(buttonSnow);
   divSearch.append(buttonAudio);
   header.append(divSearch);
   index.append(header);

   index.innerHTML += `   
   
   <main class="flex">
      <div class="favorites-menu">
         <div class="choose-tree">
            <h3>выберите елку</h3>
            <div class="cards-tree flex">
           
            </div>
         </div>
         <div class="choose-bg">
           <h3>выберите фон</h3>
           <div class="cards-bg flex">
              
           </div>
         </div>
         <div class="choose-light">
           <h3>гирлянда</h3>
           <button class="yellow" value="yellow"></button>
           <button class="red" value = "red"></button>
           <button class="blue" value="blue"></button>
           <button class="green" value="green"></button>
           <button class="multicolor" value="multicolor"></button>
           <button class="no-color" value="no-color"></button>
         </div>
         <button class="reset-setting">Сброс настроек</button>
      </div>
      <div class="main-tree-container">
         <section class="snow">
           <div class="snow-little"></div>
           <div class="snow-average"></div>
           <div class="snow-big"></div>
         </section>
         <div class = garland></div>
         <map name="tree-map">
             <area coords="365,699,189,706,113,683,31,608,2,555,2,539,18,437,73,351,106,224,161,134,243,-1,306,75,353,144,399,221,424,359,452,459,496,550,444,664" shape="poly"></area>
         </map> 
      </div>
      <div class="favorites-aside">
         <div class="choose-toys">
            <h3>игрушки</h3>
            <div class="cards-toys flex">
            </div>
         </div>
      </div>
   </main>
   `

   index.append(footerScreen());

   const buttonTabs = <NodeListOf<HTMLElement>>document.querySelectorAll('.button');
   const cardsTree = <HTMLElement>document.querySelector('.cards-tree');
   const cardsBg = <HTMLElement>document.querySelector('.cards-bg');
   const cardsToys = <HTMLElement>document.querySelector('.cards-toys');
   const snowflake = <HTMLElement>document.querySelector('.snowflake');
   const audioButton = <HTMLButtonElement>document.querySelector('.audio');
   const snow = <HTMLElement>document.querySelector('.snow');
   const resetSetting = <HTMLElement>document.querySelector('.reset-setting');
   const buttonLight = <NodeListOf<HTMLButtonElement>>document.querySelectorAll('.choose-light button');
   const [mainScreen, toyScreen, treeScreen] = buttonTabs;

   treeScreen.classList.add('line');

   let isSnow = false;
   let isAudio = false;

   const audio = new Audio('../assets/audio/audio.mp3');

   if (getFromLS('isSnow') === 'true') {
      snowflake.classList.remove('snow-off');
      snowflake.classList.add('snow-on');
      snow.style.display = 'block';
      isSnow = true;
   }

   snowflake.addEventListener('click', () => {
      if (isSnow === true) {
         snowflake.classList.remove('snow-on');
         snowflake.classList.add('snow-off');
         isSnow = false;
         snow.style.display = 'none';
      } else {
         snowflake.classList.remove('snow-off');
         snowflake.classList.add('snow-on');
         isSnow = true;
         snow.style.display = 'block';
      }
      setInLS('isSnow', (isSnow).toString());
   })

   audioButton.addEventListener('click', () => {
      if (isAudio === true) {
         audioButton.classList.remove('audio-on');
         audioButton.classList.add('audio-off');
         isAudio = false;
         audio.volume = 0;
      } else {
         audio.currentTime = 0;
         audioButton.classList.remove('audio-off');
         audioButton.classList.add('audio-on');
         isAudio = true;
         audio.volume = 1;
         audio.play();
         audio.loop = true;
      }
      setInLS('isAudio', (isAudio).toString())
   });

   buttonLight.forEach((light) => {
      light.addEventListener('click', () => {
         addChristmasLight(light.value);
      })
   })


   mainScreen.addEventListener('click', drawMainScreen);
   toyScreen.addEventListener('click', drawToysScreen);
   resetSetting.addEventListener('click', resetSettingTree);
   drawTreeCards(cardsTree);
   drawBgCards(cardsBg);
   drawToysCards(cardsToys);

}
