
import { MAX_COUNT_TOYS, MAX_YEAR_BUY_TOY, MIN_COUNT_TOYS, MIN_YEAR_BUY_TOY } from "../components/constants";
import { Filters } from "../enum/enum";
import { FilterType } from "../types/filterType";
import { getFilterData } from "./getFilterData";
import { getFromLS } from "./getFromLS";
import { insertFilterWithFieldName } from "./insertFilterWithFieldName";
import { insertFilterWithRangeMin } from "./insetFilterWithRangeMin";
import { setInLS } from "./setInLS";

export const insertFilter = (value: string, valueMax?: string): void => {
   
   let filters: FilterType[];
   if (!getFromLS("filters")) {
      filters = []
   } else {
      filters = JSON.parse(getFromLS('filters'))
   }

   switch (value) {
      case Filters.Ball:
      case Filters.Bell:
      case Filters.Cone:
      case Filters.Snow:
      case Filters.Toy:
         insertFilterWithFieldName(value, 'shape', filters)
         break;
      case Filters.White:
      case Filters.Yellow:
      case Filters.Red:
      case Filters.Blue:
      case Filters.Green:
         insertFilterWithFieldName(value, 'color', filters)
         break;
      case Filters.Big:
      case Filters.Average:
      case Filters.Small:
         insertFilterWithFieldName(value, 'size', filters)
         break;
   }

   if (+value >= MIN_COUNT_TOYS && Number(valueMax) <= MAX_COUNT_TOYS) {
      insertFilterWithRangeMin(+value, Number(valueMax), 'count', filters)
   }
   if (+value >= MIN_YEAR_BUY_TOY && Number(valueMax) <= MAX_YEAR_BUY_TOY) {
      insertFilterWithRangeMin(+value, Number(valueMax), 'year', filters)
   }

   setInLS('filters', JSON.stringify(filters));
   getFilterData(filters);
}
