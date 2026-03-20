import { useState } from "react";

const Tab = () => {
  const [tab, setTab] = useState("tab1");

  const handleTabChange = (id: string) => {
    setTab(id);
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button id="tab1" onClick={() => handleTabChange("tab1")}>
          Tab 1
        </button>
        <button id="tab2" onClick={() => handleTabChange("tab2")}>
          Tab 2
        </button>
        <button id="tab3" onClick={() => handleTabChange("tab3")}>
          Tab 3
        </button>
      </div>

      {tab === "tab1" && <h2>I am tab 1</h2>}
      {tab === "tab2" && <h2>I am tab 2</h2>}
      {tab === "tab3" && <h2>I am tab 3</h2>}
    </div>
  );
};

export default Tab;
