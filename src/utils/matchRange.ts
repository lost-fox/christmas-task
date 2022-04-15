import { DataType } from "../types/dataType"
import { FilterType } from "../types/filterType"

export function matchRange(filter: FilterType, toy: DataType): boolean {

   if (!filter.min || !filter.max) {
      return false
   }

   if (filter.min <= +(toy[filter.fieldName]) && filter.max >= +(toy[filter.fieldName])) {
      return true
   }
   return false
}
