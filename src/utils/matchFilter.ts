import { FiltersType } from "../enum/enum";
import { DataType } from "../types/dataType";
import { FilterType } from "../types/filterType";
import { matchMultiSelect } from "./matchMultiSelect";
import { matchRange } from "./matchRange";

export const matchFilter = (filters: FilterType[], toy: DataType): boolean => {
   for (let i = 0; i < filters.length; i++) {
      switch (filters[i].type) {
         case FiltersType.MultiSelect:
            if (!matchMultiSelect(filters[i], toy)) {
               return false
            }
            break;
         case FiltersType.Range:
            if (!matchRange(filters[i], toy)) {
               return false
            }
      }
   }
   return true;
}
