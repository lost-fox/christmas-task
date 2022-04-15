import { index } from "../.."
import { deleteChildren } from "../../utils/deleteChildren";
import { setBg } from "../../utils/setBg";
import { footerScreen } from "../footerScreen";
import { headerScreen } from "../headerScreen";
import { drawToysScreen } from "../toysScreen/drawToysScreen";
import { drawTreeScreen } from "../treeScreen/drawTreeScreen";
import { mainScreen } from "./mainScreen";

export const drawMainScreen = (): void => {
   deleteChildren(index);
   index.append(headerScreen());
   index.append(mainScreen());
   index.append(footerScreen());

   const background = <HTMLElement>document.querySelector('.background');
   const startButton = <HTMLElement>document.querySelector('.start-game');
   const buttonTabs = <NodeListOf<HTMLElement>>document.querySelectorAll('.button');

   const [, toyScreen, treeScreen] = buttonTabs;

   setBg(background);

   startButton.addEventListener('click', drawToysScreen);
   toyScreen.addEventListener('click', drawToysScreen);
   treeScreen.addEventListener('click', drawTreeScreen);
}
