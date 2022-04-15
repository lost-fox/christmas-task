import { FilterType } from "../types/filterType";

export const insertFilterWithRangeMin = (min: number, max: number, fieldName: string, filters: FilterType[]): void => {
   const res = filters.findIndex((filter) => filter.fieldName == fieldName);
   if (res === -1) {
      const filter: FilterType = {
         type: "range",
         fieldName: fieldName,
         min: min,
         max: max
      };
      filters.push(filter);
   } else {
      filters[res].min = min;
      filters[res].max = max;
   }
}
