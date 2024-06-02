// src/components/UserTabs.js
import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import FollowUpTab from "./FollowUpTab";
import SmartResponsesTab from "./SmartResponsesTab";
import DailyShotsTab from "./DailyShotsTab";
import PolicySOPDraftingTab from "./PolicySOPDraftingTab";

const NavTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={value} onChange={handleChange} aria-label="service tabs">
        <Tab label="Follow Up" />
        <Tab label="Smart Responses" />
        <Tab label="Daily Shots" />
        <Tab label="Policy & SOP Smart Drafting" />
      </Tabs>
      <Box sx={{ p: 3 }}>
        {value === 0 && <FollowUpTab />}
        {value === 1 && <SmartResponsesTab />}
        {value === 2 && <DailyShotsTab />}
        {value === 3 && <PolicySOPDraftingTab />}
      </Box>
    </Box>
  );
};

export default NavTabs;
