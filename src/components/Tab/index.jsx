import React from "react";
import { TabsText, Wrapper } from "./styles";
const Tab = ({ title, src }) => {
  return (
    <Wrapper>
      <TabsText variant="h6">{title}</TabsText>
      {/* <img src={src} alt="Tab Image" /> */}
    </Wrapper>
  );
};

export default Tab;
