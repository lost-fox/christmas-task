import { DataType } from "../types/dataType";
import { FilterType } from "../types/filterType";
import { getFilterData } from "./getFilterData";
import { getFromLS } from "./getFromLS";
import { setFavoriteToys } from "./setFavoriteToys";
import { setInLS } from "./setInLS";
import { sortCard } from "./sortCart";

export const resetFilters = async (): Promise<void> => {
   const buttonFilter = <NodeListOf<HTMLButtonElement>>document.querySelectorAll('.choose-block button');
   const rangeChoose = <NodeListOf<HTMLInputElement>>document.querySelectorAll('.range input');
   const sortValue = <HTMLSelectElement>document.querySelector('#sort');
   const favoriteToy = <HTMLInputElement>document.querySelector('#favorite-toy');

   const [countFirst, countSecond, yearFirst, yearSecond] = rangeChoose;

   favoriteToy.checked = false;
   setInLS('favoriteFilter', 'false');
   setFavoriteToys(false);

   buttonFilter.forEach((button => {
      button.classList.remove('active');
   }))

   countFirst.value = countFirst.min;
   countSecond.value = countSecond.max;
   yearFirst.value = yearFirst.min;
   yearSecond.value = yearSecond.max;

   let filters: FilterType[] = JSON.parse(getFromLS('filters'));
   filters = [];
   setInLS('filters', JSON.stringify(filters));

   getFilterData(filters);

   const data: DataType[] = JSON.parse(getFromLS('dataFull'));
   sortCard(sortValue.value, data);
}
