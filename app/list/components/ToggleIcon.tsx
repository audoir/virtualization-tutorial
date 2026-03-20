interface ToggleIconProps {
  isCollapsed: boolean;
}

export function ToggleIcon({ isCollapsed }: ToggleIconProps) {
  return (
    <span className="inline-block w-4 text-center font-mono text-sm">
      {isCollapsed ? "+" : "-"}
    </span>
  );
}
