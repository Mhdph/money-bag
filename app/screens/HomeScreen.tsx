import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { Container } from "../components/shated";
import { colors } from "../config/color";

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

const HomeScreen = () => {
  return (
    <HomeContainer>
      <Text>HomeScreen</Text>
    </HomeContainer>
  );
};

export default HomeScreen;
