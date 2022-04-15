export const getRandomNum = (first: number, second: number): number => {
   return Math.floor(Math.random() * (first - second) + second)
}
