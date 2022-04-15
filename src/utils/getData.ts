import { DataType } from "../types/dataType";
import { setInLS } from "./setInLS";

export const getData = async (): Promise<DataType[]> => {
   const url = 'https://raw.githubusercontent.com/lost-fox/christmas-task-data/main/data.json';
   const res = await fetch(url);
   const data: DataType[] = await res.json();
   for (let i = 0; i < data.length; i++) {
      const imageToy = `https://raw.githubusercontent.com/lost-fox/christmas-task-data/main/assets/toys/${data[i].num}.png`;
      const imageData = await fetch(imageToy);
      data[i].url = imageData.url
   }
   setInLS('dataFull', JSON.stringify(data))
   return data
}
