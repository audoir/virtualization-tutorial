"use client";

import { Grid } from "react-window";
import { type CellComponentProps } from "react-window";
import { Contact } from "@/public/model";

const COLUMNS = [
  "job_title",
  "first_name",
  "last_name",
  "email",
  "gender",
  "address",
  "city",
  "state",
  "zip",
  "timezone",
] as const;

function indexToColumn(index: number): keyof Contact {
  return COLUMNS[index];
}

function columnWidth(index: number) {
  switch (indexToColumn(index)) {
    case "address": {
      return 250;
    }
    case "email": {
      return 300;
    }
    case "job_title": {
      return 150;
    }
    case "timezone": {
      return 200;
    }
    case "zip": {
      return 75;
    }
    default: {
      return 100;
    }
  }
}

function CellComponent({
  contacts,
  columnIndex,
  rowIndex,
  style,
}: CellComponentProps<{
  contacts: Contact[];
}>) {
  const contact = contacts[rowIndex];
  const content = contact[indexToColumn(columnIndex)];

  return (
    <div
      className="truncate border-r border-b border-gray-200 px-2 py-1 text-sm"
      style={style}
    >
      {content}
    </div>
  );
}

export function GridExample({ contacts }: { contacts: Contact[] }) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Grid Virtualization Demo</h1>
      <p className="text-gray-600 mb-6">
        Displaying {contacts.length} contacts using react-window Grid with{" "}
        {COLUMNS.length} columns. Each cell is virtualized for optimal
        performance with large datasets.
      </p>

      <div className="mb-4">
        <div className="text-sm text-gray-500 mb-2">
          Columns: {COLUMNS.join(", ")}
        </div>
      </div>

      <div
        className="border border-gray-200 rounded-lg overflow-hidden"
        style={{ height: "400px", width: "100%" }}
      >
        <Grid
          cellComponent={CellComponent}
          cellProps={{ contacts }}
          columnCount={COLUMNS.length}
          columnWidth={columnWidth}
          rowCount={contacts.length}
          rowHeight={25}
        />
      </div>
    </div>
  );
}

GridExample.tabLabel = "Grid Example";
