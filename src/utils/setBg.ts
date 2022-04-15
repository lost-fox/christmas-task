import { getRandomNum } from "./getRandomNum";

export const setBg = async (background: HTMLElement): Promise<void> => {
  const getImageFromGitHub = `https://raw.githubusercontent.com/lost-fox/christmas-task-data/main/bg/${getRandomNum(0, 9)}.jpg`;
  const data = await fetch(getImageFromGitHub);
  background.style.backgroundImage = `url(${data.url})`;
}
