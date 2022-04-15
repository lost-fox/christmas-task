import { drawTreeScreen } from "../components/treeScreen/drawTreeScreen";

export const resetSettingTree = () => {
  localStorage.removeItem('isSnow');
  localStorage.removeItem('isAudio');
  localStorage.removeItem('chooseBg');
  localStorage.removeItem('chooseTree');
  drawTreeScreen();
}