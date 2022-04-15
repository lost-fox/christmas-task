import { DataType } from "../types/dataType";
import { FilterType } from "../types/filterType";

export const matchMultiSelect = (filter: FilterType, toy: DataType): boolean => {
   const multiSelect = filter.multiSelect
   const nameToy = filter.fieldName;

   if (!multiSelect || !nameToy) {
      return false;
   }

   if ((multiSelect.length) > 0) {
      let propMatched = false
      for (let i = 0; i < multiSelect.length; i++) {
         if (multiSelect[i] == toy[nameToy]) {
            propMatched = true;
            break;
         }
      }
      if (!propMatched) {
         return false;
      }
   }
   return true;
}
