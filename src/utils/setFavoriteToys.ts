import { DataType } from "../types/dataType";
import { FilterType } from "../types/filterType";
import { getFilterData } from "./getFilterData";
import { getFromLS } from "./getFromLS";
import { setCard } from "./setCard";
import { setInLS } from "./setInLS";

export const setFavoriteToys = (value: boolean): void => {
   let data: DataType[] = JSON.parse(getFromLS('dataFilter'));
   const filters: FilterType[] = JSON.parse(getFromLS('filters'));
   const dataFavorite: DataType[] = [];
   if (value) {
      for (let i = 0; i < data.length; i++) {
         if (data[i].favorite) {
            dataFavorite.push(data[i]);
         }
      }
      data = dataFavorite;
      setInLS('dataFilter', JSON.stringify(data));
      setCard(data);
   } else {
      getFilterData(filters);
   }
}
