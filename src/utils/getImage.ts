export const getImage = (i: number, field: string, exp: string): string => {
  return `https://raw.githubusercontent.com/lost-fox/christmas-task-data/main/assets/${field}/${i}.${exp}`
}
