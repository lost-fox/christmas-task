import { MAX_COUNT_TOYS, MAX_YEAR_BUY_TOY, MIN_COUNT_TOYS, MIN_YEAR_BUY_TOY } from "../components/constants";
import { Filter } from "../enum/enum";
import { FilterType } from "../types/filterType";
import { getFromLS } from "./getFromLS"
import { setFavoriteToys } from "./setFavoriteToys";

export const chooseActiveButton = (): void => {
   const buttonFilter = <NodeListOf<HTMLButtonElement>>document.querySelectorAll('.choose-block button');
   const rangeChoose = <NodeListOf<HTMLInputElement>>document.querySelectorAll('.range input');
   const sortValue = <NodeListOf<HTMLOptionElement>>document.querySelectorAll('#sort option');
   const favoriteToy = <HTMLInputElement>document.querySelector('#favorite-toy');

   const [countFirst, countSecond, yearFirst, yearSecond] = rangeChoose;
   const filters: FilterType[] = JSON.parse(getFromLS('filters'));
   const sort = getFromLS('sort');
   const favoriteFliter = getFromLS('favoriteFilter');

   buttonFilter.forEach((button) => {
      for (let i = 0; i < filters.length; i++) {
         if (button.value === filters[i].multiSelect?.toString()) {
            button.classList.add('active');
         }
         if (filters[i].fieldName === Filter.Count) {
            countFirst.value = MIN_COUNT_TOYS.toString();
            countSecond.value = MAX_COUNT_TOYS.toString();
         }
         if (filters[i].fieldName === Filter.Year) {
            yearFirst.value = MIN_YEAR_BUY_TOY.toString();
            yearSecond.value = MAX_YEAR_BUY_TOY.toString();
         }
      }
   })

   for (let i = 0; i < sortValue.length; i++) {
      if (sortValue[i].value === sort) {
         sortValue[i].selected = true;
      }
   }

   if (favoriteFliter === 'true') {
      favoriteToy.checked = true;
      setFavoriteToys(true);
   }
}
