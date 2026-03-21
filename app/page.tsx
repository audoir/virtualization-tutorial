"use client";

import { useState } from "react";
import { sampleLocations, sampleNames, sampleLoremIpsum, sampleContacts } from "@/public/data";
import { FixedHeightExample } from "./components/FixedHeightExample";
import { VariableHeightExample } from "./components/VariableHeightExample";
import { DynamicHeightExample } from "./components/DynamicHeightExample";
import { GridExample } from "./components/GridExample";

type TabType = "fixed" | "variable" | "dynamic" | "grid";

export default function ListPage() {
  const [activeTab, setActiveTab] = useState<TabType>("fixed");

  const tabs = [
    {
      id: "fixed" as TabType,
      label: FixedHeightExample.tabLabel,
      component: <FixedHeightExample names={sampleNames} />,
    },
    {
      id: "variable" as TabType,
      label: VariableHeightExample.tabLabel,
      component: <VariableHeightExample items={sampleLocations} />,
    },
    {
      id: "dynamic" as TabType,
      label: DynamicHeightExample.tabLabel,
      component: <DynamicHeightExample lorem={sampleLoremIpsum} />,
    },
    {
      id: "grid" as TabType,
      label: GridExample.tabLabel,
      component: <GridExample contacts={sampleContacts} />,
    },
  ];

  const activeTabData = tabs.find((tab) => tab.id === activeTab)!;

  return (
    <div className="p-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div>{activeTabData.component}</div>
    </div>
  );
}
