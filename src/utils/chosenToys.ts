import { DataType } from "../types/dataType";
import { getFromLS } from "./getFromLS";
import { setInLS } from "./setInLS";

export const chosenToys = (chosenNum: string[]): void => {
   const countToy = <HTMLElement>document.querySelector('.count-toy');
   const dataToys: DataType[] = JSON.parse(getFromLS('dataFilter'));
   const chosenToy: DataType[] = [];

   chosenNum.map((num) => {
      for (let i = 0; i < dataToys.length; i++) {
         if (num === dataToys[i].num) {
            chosenToy.push(dataToys[i]);
         }
      }
   })

   setInLS('chosenToys', JSON.stringify(chosenToy));
   countToy.innerHTML = `<p>${chosenToy.length}</p>`
}
