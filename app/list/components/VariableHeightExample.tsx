"use client";

import { Item } from "@/public/model";
import { List } from "react-window";
import { type RowComponentProps } from "react-window";

type RowProps = {
  items: Item[];
};

function VariableRowComponent({
  index,
  items,
  style,
}: RowComponentProps<RowProps>) {
  const item = items[index];

  return (
    <div className="flex items-center justify-between px-2" style={style}>
      {item.type === "state" ? (
        <div className="font-semibold text-blue-600">{item.state}</div>
      ) : (
        <div className="text-sm">
          <span className="font-medium">{item.city}</span>
          <span className="text-gray-500 ml-2">{item.zip}</span>
        </div>
      )}
      <div className="text-slate-500 text-xs">{`${index + 1} of ${items.length}`}</div>
    </div>
  );
}

function rowHeight(index: number, { items }: RowProps) {
  switch (items[index].type) {
    case "state": {
      return 30;
    }
    case "zip": {
      return 25;
    }
  }
}

export function VariableHeightExample({ items }: { items: Item[] }) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Variable Row Heights Virtualized List Demo
      </h1>
      <p className="text-gray-600 mb-6">
        Displaying {items.length} items with variable heights: states (30px) and
        cities with zip codes (25px).
      </p>
      <div
        className="border border-gray-200 rounded-lg"
        style={{ height: "400px" }}
      >
        <List<RowProps>
          rowComponent={VariableRowComponent}
          rowCount={items.length}
          rowHeight={rowHeight}
          rowProps={{ items }}
        />
      </div>
    </div>
  );
}

VariableHeightExample.tabLabel = "Variable Heights";
