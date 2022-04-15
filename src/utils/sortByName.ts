import { DataType } from "../types/dataType";

export const sortByName = (data: DataType[]): DataType[] => {
  const sortName: DataType[] = data.sort((a, b) => a.name.localeCompare(b.name));
  return sortName;
}
