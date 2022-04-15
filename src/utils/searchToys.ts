import { DataType } from "../types/dataType";
import { getFromLS } from "./getFromLS"
import { setCard } from "./setCard";

export const searchToys = (search: string): void => {
  const dataToys: DataType[] = JSON.parse(getFromLS('dataFilter'));
  const searchData: DataType[] = [];

  dataToys.map(data => {
    if (data.name.toLowerCase().search(search.toLowerCase()) !== -1) {
      searchData.push(data);
    }
  });

  setCard(searchData);
}
