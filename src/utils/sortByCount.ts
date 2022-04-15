import { DataType } from "../types/dataType";

export const sortByCount = (data: DataType[]): DataType[] => {
  const sortCount: DataType[] = data.sort((a, b) => +(a.count) - (+(b.count)));
  return sortCount;
}