import { Sort } from "../enum/enum";
import { DataType } from "../types/dataType"
import { getFromLS } from "./getFromLS";
import { setCard } from "./setCard";
import { setInLS } from "./setInLS";
import { sortByCount } from "./sortByCount";
import { sortByName } from "./sortByName";

export const sortCard = (value: string, data: DataType[]): void => {
   if (getFromLS('dataFilter')) {
      data = JSON.parse(getFromLS('dataFilter'));
   }
   let sortData: DataType[] = [];
   switch (value) {
      case Sort.SortQueue: sortData = data.sort((a, b) => +(a.num) - +(b.num)); break;
      case Sort.SortNameMax: sortData = sortByName(data); break;
      case Sort.SortNameMin: sortData = sortByName(data).reverse(); break;
      case Sort.SortCountMax: sortData = sortByCount(data); break;
      case Sort.SortCountMin: sortData = sortByCount(data).reverse(); break;
   }
   setInLS('dataFilter', JSON.stringify(sortData));
   setInLS('sort', value);
   setCard(sortData);
}
