import { FilterType } from "../types/filterType";

export const insertFilterWithFieldName = (value: string, fieldName: string, filters: FilterType[]): void => {
   const res = filters.findIndex((filter) => filter.fieldName == fieldName);
   if (res === -1) {
      const filter: FilterType = {
         type: "multiSelect",
         fieldName: fieldName,
         multiSelect: [value]
      };
      filters.push(filter);
   } else {
      const multiFilter = filters[res].multiSelect;
      if (multiFilter?.indexOf(value) === -1) {
         multiFilter?.push(value);
      } else {
         multiFilter?.splice((multiFilter)!.indexOf(value), 1);
      }
   }
}
