/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { tabs } from "../../constants/constant";
import Tab from "./Tab";
import useApi from "../../hooks/useApi";
import { Result } from "../Result/Result";

const MainTabs = ({ tabs, onTabClick, activeTab }) => (
  <div style={{ marginBottom: "10px" }}>
    {tabs.map((tab, index) => (
      <Tab
        key={index}
        label={tab.label}
        onClick={() => onTabClick(index)}
        isActive={activeTab === index}
      />
    ))}
  </div>
);

const SubTabs = ({ subTabs, onSubTabClick, activeSubTab }) => (
  <div>
    {subTabs.map((subTab, index) => (
      <Tab
        key={index}
        label={subTab.label}
        onClick={() => onSubTabClick(index)}
        isActive={activeSubTab === index}
      />
    ))}
  </div>
);

const Tabs = () => {
  const { data, error, loading, setUrl } = useApi();
  const [activeTab, setActiveTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setActiveSubTab(0); // Reset sub-tab when switching main tabs
  };

  const handleSubTabClick = (index) => {
    setActiveSubTab(index);
  };

  useEffect(() => {
    console.log("change in active SubTab");
  }, [activeTab, activeSubTab]);

  useEffect(() => {
    const endpoint = tabs[activeTab].subTabs[activeSubTab]?.endpoint;
    if (endpoint) {
      setUrl(`https://www.reddit.com/${endpoint}`);
    } else {
      setUrl(null);
    }
  }, [activeTab, activeSubTab, setUrl]);

  return (
    <div>
      <MainTabs tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} />
      <SubTabs
        subTabs={tabs[activeTab].subTabs}
        activeSubTab={activeSubTab}
        onSubTabClick={handleSubTabClick}
      />
      <Result data={data} error={error} loading={loading} />
    </div>
  );
};

export default Tabs;
