import React, { useState } from "react";
import { Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { TabList, TabPanel } from "@mui/lab";
import Dates from "../Dates";
import {
  Month,
  PlanTitle,
  PriceWrapper,
  StyledButton,
  StyledFormControl,
  StyledTab,
  StyledTabContext,
  TabListContainer,
  TabsWrapper,
  Wrapper,
} from "./styles";
import Tab from "../Tab";
import burger from "../../assets/images/burger.jpg";
import dinner from "../../assets/images/dinner.jpg";
import Card from "../Card";

const FoodCard = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleDropDownChange = (event) => {
    console.log("hello");
  };

  const TabPan = () => (<Grid container spacing={{xs:2}} >
    <Grid item xs={12} sm={6} lg={4} >
      <Card/>
    </Grid>
    <Grid item xs={12} sm={6} lg={4} >
      <Card/>
    </Grid>
    <Grid item xs={12} sm={6} lg={4} >
      <Card/>
    </Grid>
    <Grid item xs={12} sm={6} lg={4} >
      <Card/>
    </Grid>
    <Grid item xs={12} sm={6} lg={4} >
      <Card/>
    </Grid>
    <Grid item xs={12} sm={6} lg={4} >
      <Card/>
    </Grid>
    <Grid item xs={12} sm={6} lg={4} >
      <Card/>
    </Grid>
    <Grid item xs={12} sm={6} lg={4} >
      <Card/>
    </Grid>
    <Grid item xs={12} sm={6} lg={4} >
      <Card/>
    </Grid>
    <Grid item xs={12} sm={6} lg={4} >
      <Card/>
    </Grid>
    <Grid item xs={12} sm={6} lg={4} >
      <Card/>
    </Grid>
    <Grid item xs={12} sm={6} lg={4} >
      <Card/>
    </Grid>
    <Grid item xs={12} sm={6} lg={4} >
      <Card/>
    </Grid>
    <Grid item xs={12} sm={6} lg={4} >
      <Card/>
    </Grid>
    <Grid item xs={12} sm={6} lg={4} >
      <Card/>
    </Grid>
  </Grid>)
  return (
    <Wrapper>
      <PlanTitle>
        A short description
      </PlanTitle>
      <Month>March</Month>
      <Dates />
      <TabsWrapper >
        <StyledTabContext value={value}>
          <TabListContainer>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <StyledTab label={<Tab title="Lunch" src={burger} />} value="1" />
              <StyledTab
                label={<Tab title="Dinner" src={dinner} />}
                value="2"
              />
              <StyledTab label={<Tab title="Snack" src={burger} />} value="3" />
            </TabList>
          </TabListContainer>
          <TabPanel value="1" className="px-0">
            <TabPan/>
          </TabPanel>
          <TabPanel value="2" className="px-0">
            <TabPan/>
          </TabPanel>
          <TabPanel value="3" className="px-0">
            <TabPan/>
          </TabPanel>
        </StyledTabContext>
      </TabsWrapper>
      <PriceWrapper>
        <StyledFormControl>
          <InputLabel id="my-select-label">Package</InputLabel>
          <Select
            style={{ height: 40 }}
            labelId="my-select-label"
            id="my-select"
            value={value}
            onChange={handleDropDownChange}
          >
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
            <MenuItem value={3}>Option 3</MenuItem>
          </Select>
        </StyledFormControl>

        <StyledButton>Subscribe</StyledButton>
      </PriceWrapper>
    </Wrapper>
  );
};

export default FoodCard;
