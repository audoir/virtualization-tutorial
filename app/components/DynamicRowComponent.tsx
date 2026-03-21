import { type RowComponentProps } from "react-window";
import { ListState } from "../hooks/useListState";
import { ToggleIcon } from "./ToggleIcon";

export function DynamicRowComponent({
  index,
  listState,
  style,
}: RowComponentProps<{
  listState: ListState;
}>) {
  const isCollapsed = listState.isRowCollapsed(index);
  const text = listState.getText(index);

  return (
    <div
      className={`p-2 cursor-pointer ${index % 2 === 0 ? "bg-white/10" : ""} ${isCollapsed ? "truncate" : ""}`}
      onClick={() => listState.toggleRow(index)}
      style={style}
    >
      <ToggleIcon isCollapsed={isCollapsed} /> {index}: {text}
    </div>
  );
}
