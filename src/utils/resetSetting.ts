import { drawToysScreen } from "../components/toysScreen/drawToysScreen";

export const resetSettings = (): void => {
   localStorage.clear();
   drawToysScreen();
}
