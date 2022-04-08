import { v4 } from "uuid";

export function generateCategory(name: string, color: string) {
  const category = {
    id: v4(),
    name,
    color,
    transactions: [],
  };

  return category;
}
