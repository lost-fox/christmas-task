import { DataType } from "../types/dataType";

export const drawCards = (cardValue: DataType): string => {
   const drawCard = `
   <div class="card" value = "${cardValue.num}">
   <h2>${cardValue.name}</h2>
   <img class ="card__image" src="${cardValue.url}" alt="toys">
   <p class="card__dec">Количество: <span>${cardValue.count}</span></p>
   <p class="card__dec">Год покупки: <span>${cardValue.year}</span> год</p>
   <p class="card__dec">Форма игрушки: <span>${cardValue.shape}</span></p>
   <p class="card__dec">Цвет игрушки: <span>${cardValue.color}</span></p>
   <p class="card__dec">Размер игрушки: <span>${cardValue.size}</span></p>
   <button class="card__favorite ${cardValue.favorite ? 'favorite' : 'no-favorite'}"></button>
</div>
   `
   return drawCard;
}
