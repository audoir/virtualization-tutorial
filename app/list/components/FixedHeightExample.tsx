"use client";

import { List, useListRef } from "react-window";
import { type RowComponentProps } from "react-window";
import { useState } from "react";

function RowComponent({
  index,
  names,
  style,
}: RowComponentProps<{
  names: string[];
}>) {
  return (
    <div className="flex items-center justify-between" style={style}>
      {names[index]}
      <div className="text-slate-500 text-xs">{`${index + 1} of ${names.length}`}</div>
    </div>
  );
}

export function FixedHeightExample({ names }: { names: string[] }) {
  const listRef = useListRef(null);
  const [scrollTarget, setScrollTarget] = useState("");

  const scrollToRow = () => {
    const index = parseInt(scrollTarget, 10);
    if (!isNaN(index) && index >= 0 && index < names.length) {
      const list = listRef.current;
      list?.scrollToRow({
        align: "auto",
        behavior: "auto",
        index: index,
      });
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Fixed Row Heights Virtualized List Demo
      </h1>
      <p className="text-gray-600 mb-6">
        Displaying {names.length} names using react-window with fixed row
        heights of 25px each.
      </p>

      <div className="mb-4 flex gap-2 items-center">
        <input
          type="number"
          value={scrollTarget}
          onChange={(e) => setScrollTarget(e.target.value)}
          placeholder="Row index (0-based)"
          className="border border-gray-300 rounded px-3 py-1 text-sm"
          min="0"
          max={names.length - 1}
        />
        <button
          onClick={scrollToRow}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded text-sm"
        >
          Scroll to Row
        </button>
        <span className="text-sm text-gray-500">(0 to {names.length - 1})</span>
      </div>

      <div
        className="border border-gray-200 rounded-lg"
        style={{ height: "400px" }}
      >
        <List
          listRef={listRef}
          rowComponent={RowComponent}
          rowCount={names.length}
          rowHeight={25}
          rowProps={{ names }}
        />
      </div>
    </div>
  );
}

FixedHeightExample.tabLabel = "Fixed Heights";
