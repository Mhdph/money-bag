import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { Container } from "../components/shated";
import { colors } from "../config/color";
import logo1 from "../assets/cards/mc.png";
import logo2 from "../assets/cards/visa_white.png";
import { StatusBar } from "expo-status-bar";
import CardsSection from "../components/cards/cardsSection";

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

const HomeScreen = () => {
  const cardsData = [
    {
      id: 1,
      balance: 2000.15,
      alias: "Work Debit",
      accountNo: "56461646",
      logo: logo1,
    },
    {
      id: 2,
      balance: 1200.01,
      alias: "Personal Prepaid",
      accountNo: "56461646",
      logo: logo2,
    },
    {
      id: 3,
      balance: 5600.83,
      alias: "School Prepaid",
      accountNo: "56461646",
      logo: logo2,
    },
  ];

  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <CardsSection data={cardsData} />
    </HomeContainer>
  );
};

export default HomeScreen;
