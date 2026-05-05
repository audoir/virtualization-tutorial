"use client";

import { useEffect, useRef, useState } from "react";
import { List, RowComponentProps, useDynamicRowHeight } from "react-window";
import { Contact } from "@/public/model";

// Mirrors Tailwind's default breakpoints
function getColumnCount(width: number): number {
  if (width >= 1280) return 4; // xl
  if (width >= 1024) return 3; // lg
  if (width >= 640) return 2; // sm
  return 1;
}

function useColumnCount(): number {
  const [columnCount, setColumnCount] = useState(1);

  useEffect(() => {
    function update() {
      setColumnCount(getColumnCount(window.innerWidth));
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return columnCount;
}

function GridRow({
  index,
  contacts,
  columnCount,
  style,
}: RowComponentProps<{
  contacts: Contact[];
  columnCount: number;
}>) {
  const rowRef = useRef<HTMLDivElement>(null);

  const startIndex = index * columnCount;
  const rowContacts = contacts.slice(startIndex, startIndex + columnCount);

  return (
    <div style={style}>
      <div
        ref={rowRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 px-2 py-1"
      >
        {rowContacts.map((contact, i) => (
          <div
            key={startIndex + i}
            data-row-item
            className="border border-gray-200 rounded-lg p-3 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
          >
            <div className="font-semibold text-sm text-gray-900 truncate">
              {contact.job_title} {contact.first_name} {contact.last_name}
            </div>
            <div className="text-xs text-blue-600 truncate mt-1">
              {contact.email}
            </div>
            <div className="text-xs text-gray-500 mt-1 truncate">
              {contact.address}
            </div>
            <div className="text-xs text-gray-500 truncate">
              {contact.city}, {contact.state} {contact.zip}
            </div>
            <div className="text-xs text-gray-400 mt-1 truncate">
              {contact.timezone}
            </div>
            <div className="mt-1">
              <span className="inline-block text-xs bg-gray-100 text-gray-600 rounded px-1 py-0.5">
                {contact.gender}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface ResponsiveGridExampleProps {
  contacts: Contact[];
}

export function ResponsiveGridExample({
  contacts,
}: ResponsiveGridExampleProps) {
  const columnCount = useColumnCount();
  const rowCount = Math.ceil(contacts.length / columnCount);

  const rowHeight = useDynamicRowHeight({
    defaultRowHeight: 160,
    key: columnCount,
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Responsive Grid Virtualization Demo
      </h1>
      <p className="text-gray-600 mb-2">
        Displaying {contacts.length} contacts in a responsive virtualized grid.
        The number of columns adjusts automatically based on window width using
        Tailwind breakpoints. Row heights are measured dynamically.
      </p>
      <p className="text-sm text-gray-400 mb-6">
        1 col (default) · 2 cols (sm ≥640px) · 3 cols (lg ≥1024px) · 4 cols (xl
        ≥1280px)
      </p>

      <div
        className="border border-gray-200 rounded-lg overflow-hidden"
        style={{ height: "480px" }}
      >
        <List
          rowComponent={GridRow}
          rowCount={rowCount}
          rowHeight={rowHeight}
          rowProps={{ contacts, columnCount }}
        />
      </div>
    </div>
  );
}

ResponsiveGridExample.tabLabel = "Responsive Grid";
