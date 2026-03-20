import { useState, useCallback } from "react";

export interface ListState {
  isRowCollapsed: (index: number) => boolean;
  toggleRow: (index: number) => void;
  getText: (index: number) => string;
}

export function useListState(texts: string[]): ListState {
  const [collapsedRows, setCollapsedRows] = useState<Set<number>>(new Set());

  const isRowCollapsed = useCallback((index: number) => {
    return collapsedRows.has(index);
  }, [collapsedRows]);

  const toggleRow = useCallback((index: number) => {
    setCollapsedRows(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  }, []);

  const getText = useCallback((index: number) => {
    return texts[index] || "";
  }, [texts]);

  return {
    isRowCollapsed,
    toggleRow,
    getText
  };
}
