import { deleteChildren } from "./deleteChildren";

export const addChristmasLight = (value: string): void => {
   const garland = <HTMLDivElement>document.querySelector('.garland');

   let widthGarland = 180;
   let heightGarland = 180;
   const rotate = 60;
   let finishAngle = 113;
   let distanseBetweenBuibs = 10;
   let firstAngle = 60;

   const countLineGarland = 7;
   const increaseDistance = 70;
   const increaseFinishAngle = 3;
   const increaseFirstAngle = 25;

   deleteChildren(garland);

   if (value !== 'no-color') {
      for (let i = 0; i < countLineGarland; i++) {
         const ul = document.createElement('ul');
         ul.className = 'garland__branch';
         ul.style.width = widthGarland.toString() + 'px';
         ul.style.height = heightGarland.toString() + 'px';
         let count = rotate;

         while (count <= finishAngle) {
            const li = document.createElement('li');
            li.className = 'garland__branch-light ';
            li.className += value;
            li.style.transform = `rotate(${count}deg) translate(${firstAngle}px) rotate(-${count}deg)`;
            li.style.animationName = value !== 'multicolor' ? value + 'Light' : '';
            ul.append(li);
            count += distanseBetweenBuibs;
         }
         garland.append(ul);
         widthGarland += increaseDistance;
         heightGarland += increaseDistance;
         finishAngle += increaseFinishAngle;
         distanseBetweenBuibs--;
         firstAngle += increaseFirstAngle;
      }
   }
}
