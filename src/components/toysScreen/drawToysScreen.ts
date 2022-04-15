import { index } from "../.."
import { setCard } from "../../utils/setCard";
import { drawMainScreen } from "../mainScreen/drawMainScreen";
import { sortCard } from "../../utils/sortCart";
import { DataType } from "../../types/dataType";
import { getData } from "../../utils/getData";
import { insertFilter } from "../../utils/filters";
import { resetFilters } from "../../utils/resetFilter";
import { getFromLS } from "../../utils/getFromLS";
import { chooseActiveButton } from "../../utils/chooseActiveButton";
import { resetSettings } from "../../utils/resetSetting";
import { setFavoriteToys } from "../../utils/setFavoriteToys";
import { setInLS } from "../../utils/setInLS";
import { searchToys } from "../../utils/searchToys";
import { drawTreeScreen } from "../treeScreen/drawTreeScreen";
import { headerScreen } from "../headerScreen";
import { deleteChildren } from "../../utils/deleteChildren";
import { footerScreen } from "../footerScreen";


export const drawToysScreen = async (): Promise<void> => {
   deleteChildren(index);

   const header = headerScreen();

   const divSearch = <HTMLDivElement>document.createElement('div');
   const searchInput = <HTMLInputElement>document.createElement('input');
   const divCountToy = <HTMLDivElement>document.createElement('div');
   const pCountToy = <HTMLDivElement>document.createElement('p');
   const buttonAudio = <HTMLButtonElement>document.createElement('button');


   divSearch.className = 'search flex';
   searchInput.type = 'search';
   searchInput.name = 'search';
   searchInput.id = 'search';
   searchInput.placeholder = 'Поиск';
   searchInput.autocomplete = 'off';
   searchInput.autofocus = true;
   divCountToy.className = 'count-toy';
   pCountToy.innerText = '0';
   buttonAudio.className = 'audio audio-off';

   divSearch.append(searchInput);
   divCountToy.append(pCountToy);
   divSearch.append(divCountToy);
   divSearch.append(buttonAudio);
   header.append(divSearch);


   index.append(header);

   index.innerHTML += `
   <main class="main">
      <div class="choose flex">
         <div class="choose-block filters">
            <h4>Фильтры по значению</h4>
            <div class="shape-toys flex">
               <p>Форма:</p>
               <button value = "шар" class="ball"></button>
               <button value = "колокольчик" class="bell"></button>
               <button value = "шишка" class="cone"></button>
               <button value = "снежинка" class="snow"></button>
               <button value = "фигурка" class="toy"></button>
            </div>
            <div class="color-toys flex">
               <p>Цвет:</p>
               <button value = "белый" class="white"></button>
               <button value = "желтый" class="yellow"></button>
               <button value = "красный" class="red"></button>
               <button value = "синий" class="blue"></button>
               <button value = "зелёный" class="green"></button>
            </div>
            <div class="size-toys flex">
               <p>Размер:</p>
               <button value = "большой" class="big"></button>
               <button value = "средний" class="average"></button>
               <button value = "малый" class="small"></button>
            </div>
            <div class="favorite-toys flex">
               <p>Только любимые:</p>
               <input type="checkbox" name="favorite-toy" id="favorite-toy">
            </div>
         </div>
         <div class="choose-block">
            <h4>Фильтры по даипазону</h4>
            <div class="range">
               <p>Количество экземпляров:</p>
               <div class="range__count flex">
                  <input type="number" name="range-count-first" id="range-count-first" min="1" max="12" value="1">
                  <p>-</p>
                  <input type="number" name="range-count-second" id="range-count-second" min="1" max="12" value="12">
               </div>
            </div>
            <div class="range">
               <p>Год приобретения:</p>
               <div class="range__year flex">
                 <input type="number" name="range-year-first" id="range-year-first" min="1940" max="2020" value="1940">
                  <p class = >-</p>
                  <input type="number" name="range-year-second" id="range-year-second" min="1940" max="2020"
                     value="2020"> 
               </div>
            </div>
         </div>
         <div class="sort-block">
            <h4>Сортировка</h4>
            <select name="sort" id="sort">
               <option selected value="sort-queue">Без сортировки</option>
               <option value="sort-name-max">По названию от «А» до «Я»</option>
               <option value="sort-name-min">По названию от «Я» до «А»</option>
               <option value="sort-count-max">По количеству по возрастанию</option>
               <option value="sort-count-min">По количеству по убыванию</option>
            </select>
            <button class="reset-filter">Сброс фильтров</button>
            <button class="reset-setting">Сброс настроек</button>
         </div>
      </div>
      <div class="catalog-toys flex">
         
      </div>
   </main>
   `;

   index.append(footerScreen());

   let data: Array<DataType> = [];
   const buttonTabs = <NodeListOf<HTMLElement>>document.querySelectorAll('.button');
   const sortValue = <HTMLSelectElement>document.querySelector('#sort');
   const buttonFilter = <HTMLButtonElement>document.querySelector('.filters');
   const resetFilter = <HTMLButtonElement>document.querySelector('.reset-filter');
   const rangeChoose = <NodeListOf<HTMLInputElement>>document.querySelectorAll('.range input');
   const rangeCount = <HTMLElement>document.querySelector('.range__count');
   const rangeYear = <HTMLElement>document.querySelector('.range__year');
   const resetSetting = <HTMLButtonElement>document.querySelector('.reset-setting');
   const favoriteToy = <HTMLInputElement>document.querySelector('#favorite-toy');
   const searchInputId = <HTMLInputElement>document.querySelector('#search');
   const audioButton = <HTMLButtonElement>document.querySelector('.audio');

   const [countFirst, countSecond, yearFirst, yearSecond] = rangeChoose;
   const [mainScreen, toyScreen, treeScreen] = buttonTabs;

   let isAudio = false;
   const audio = new Audio;


   toyScreen.classList.add('line');

   audioButton.addEventListener('click', () => {
      if (isAudio === true) {
         audioButton.classList.remove('audio-on');
         audioButton.classList.add('audio-off');
         isAudio = false;
         audio.volume = 0;

      } else {
         audioButton.classList.remove('audio-off');
         audioButton.classList.add('audio-on');
         isAudio = true;
         audio.volume = 1;
         audio.src = '../assets/audio/audio.mp3';
         audio.play();
         audio.loop = true;
      }
   })

   searchInputId.addEventListener('keyup', () => {
      searchToys(searchInputId.value)
   }
   )
   favoriteToy.addEventListener('click', () => {
      setFavoriteToys(favoriteToy.checked);
      setInLS('favoriteFilter', (favoriteToy.checked).toString());
   })


   resetFilter.addEventListener('click', resetFilters);
   resetSetting.addEventListener('click', resetSettings);

   buttonFilter.addEventListener('click', (event) => {
      const target = event.target as HTMLButtonElement;
      if (target.tagName === 'BUTTON') {
         target.classList.toggle('active');
         insertFilter(target.value)
      }
   })

   rangeCount.addEventListener('change', (event) => {
      const target = event.target as HTMLInputElement;

      if (target.tagName === 'INPUT') {
         insertFilter(countFirst.value, countSecond.value);
      }
   });

   rangeYear.addEventListener('change', (event) => {
      const target = event.target as HTMLInputElement;
      if (target.tagName === 'INPUT') {
         insertFilter(yearFirst.value, yearSecond.value);
      }
   });

   sortValue.addEventListener('click', () => { sortCard(sortValue.value, data) });

   mainScreen.addEventListener('click', drawMainScreen);
   treeScreen.addEventListener('click', drawTreeScreen);

   if (!getFromLS("dataFilter")) {
      data = await getData();
      setInLS('dataFilter', JSON.stringify(data));
   } else {
      if (!getFromLS("filters")) {
         setInLS('filters', JSON.stringify([]))
      }
      data = JSON.parse(getFromLS("dataFilter"));
      chooseActiveButton();
   }

   setCard(data);
}
