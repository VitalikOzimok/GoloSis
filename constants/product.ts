export const mapProductSize = {
  1: "XX-Small",
  2: "Medium",
  3: "X-Large",
  4: "Large",
} as const;
export const mapColorType = {
  1: "чёрный",
  2: "белый",
  3: "синий",
  4: "красный",
} as const;

export const productSizes = Object.entries(mapProductSize).map(
  ([value, name]) => ({
    name,
    value,
  })
);
export const colorTypes = Object.entries(mapColorType).map(([value, name]) => ({
  name,
  value,
}));

export type ProductSize = keyof typeof mapProductSize;
export type ColorType = keyof typeof mapColorType;
