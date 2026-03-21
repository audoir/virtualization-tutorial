import { List, useDynamicRowHeight } from "react-window";
import { DynamicRowComponent } from "./DynamicRowComponent";
import { useListState } from "../hooks/useListState";

interface DynamicHeightExampleProps {
  lorem: string[];
}

export function DynamicHeightExample({ lorem }: DynamicHeightExampleProps) {
  const listState = useListState(lorem);

  const rowHeight = useDynamicRowHeight({
    defaultRowHeight: 50,
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Dynamic Row Heights Virtualized List Demo
      </h1>
      <p className="text-gray-600 mb-6">
        Displaying {lorem.length} lorem ipsum texts of varying sizes. Each row
        can be toggled collapsed/expanded by clicking on the "+"/"-" button.
        Heights are measured dynamically as content changes.
      </p>
      <div
        className="border border-gray-200 rounded-lg"
        style={{ height: "400px" }}
      >
        <List
          rowComponent={DynamicRowComponent}
          rowCount={lorem.length}
          rowHeight={rowHeight}
          rowProps={{ listState }}
        />
      </div>
    </div>
  );
}

DynamicHeightExample.tabLabel = "Dynamic Heights";
