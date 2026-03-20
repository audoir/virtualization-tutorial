// Variable height demo components

export type Item =
  | { type: "state"; state: string }
  | { type: "zip"; city: string; zip: string };
