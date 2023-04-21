import React from "react";
import salad from ".././../assets/images/salad.jpg";
import {
  Body,
  CardTitle,
  Content,
  Description,
  FoodMacros,
  FoodMacrosWrapper,
  StyledCard,
  StyledMedia,
  TotalMacros,
} from "./styles";
const MenuCard = () => {
  return (
    <StyledCard>
      <Body>
        <StyledMedia image={salad} title="Food" />
        <Content>
          <CardTitle className="title"  gutterBottom variant="h5" component="h2">
            Chicken Pasta
          </CardTitle>
          <Description>
            Grilled Chicken, parmesan chees
          </Description>
          <FoodMacrosWrapper>
            <FoodMacros>
              <TotalMacros>531</TotalMacros><br/>
              Protein 
            </FoodMacros>
            <FoodMacros>
              <TotalMacros>32</TotalMacros><br/>
              Carbs
            </FoodMacros>
            <FoodMacros>
              <TotalMacros>43</TotalMacros><br/>
              Calories 
            </FoodMacros>
            <FoodMacros>
              <TotalMacros>54</TotalMacros><br/>
              Fats
            </FoodMacros>
          </FoodMacrosWrapper>
        </Content>
      </Body>
    </StyledCard>
  );
};

export default MenuCard;
