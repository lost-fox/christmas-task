import '../css/style.css';
import { drawMainScreen } from "./components/mainScreen/drawMainScreen";
import { FilterType } from "./types/filterType";
import { getData } from './utils/getData';

export const index = <HTMLBodyElement>document.querySelector('body');

export const filter: FilterType = {
   type: '',
   fieldName: '',
   min: 0,
   max: 0,
   multiSelect: []
}

console.log(`
С Новым годом! Желаю выбросить и носки с дырками, и мысли с глупостями, и сомнения по любому поводу. Надеюсь, твоё поведение было прилежным, и Дед Мороз подарит тебе что-то хорошее.

score:165/200

Нельзя возвращать игрушку в свой слот, перетягивать игрушку в пределах елки.
Частично выполнено: "когда игрушку "вешают на ёлку" количество игрушек в слоте уменьшается, когда игрушку "снимают с ёлки", количество игрушек в слоте увеличивается, когда все экземпляры игрушки помещаются на ёлку, отображается пустой слот"

`)

getData();
drawMainScreen();
