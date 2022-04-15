import { DataType } from "../types/dataType";
import { FilterType } from "../types/filterType";
import { getFromLS } from "./getFromLS";
import { matchFilter } from "./matchFilter";
import { setCard } from "./setCard";
import { setInLS } from "./setInLS";

export const getFilterData = (filters: FilterType[]): void => {
  const data: DataType[] = JSON.parse(getFromLS('dataFull'));
  const filterCard: DataType[] = [];

  data.map((toy: DataType) => {
    if (matchFilter(filters, toy)) {
      filterCard.push(toy);
    }
  });

  setInLS('dataFilter', JSON.stringify(filterCard));
  setCard(filterCard);
}
