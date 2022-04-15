import { getFromLS } from "../utils/getFromLS";
import { DataType } from "../types/dataType"

const data: DataType[] = JSON.parse(getFromLS('dataFull'));
const countToy: number[] = [];
const yearToy: number[] = [];
data.forEach(toy => {
   countToy.push(Number(toy.count));
   yearToy.push(Number(toy.year));
});

export const MIN_COUNT_TOYS = Math.min(...countToy);
export const MAX_COUNT_TOYS = Math.max(...countToy);
export const MIN_YEAR_BUY_TOY = Math.min(...yearToy);
export const MAX_YEAR_BUY_TOY = Math.max(...yearToy);
export const MAX_COUNT_CHOSEN_TOYS = 20;
export const COUNT_TREE = 6;
export const COUNT_BG = 10;
export const COUNT_TOYS_CARD = 20;
