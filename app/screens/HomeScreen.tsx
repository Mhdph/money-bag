import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { Container } from "../components/shated";
import { colors } from "../config/color";
import logo1 from "../assets/cards/mc.png";
import logo2 from "../assets/cards/visa_white.png";
import { StatusBar } from "expo-status-bar";
import CardsSection from "../components/cards/cardsSection";
import TransctionSection from "../components/Transactions/TransactionSection";
import SendMoneySection from "../components/SendMoney/SendMoneySection";
import portrait1 from "./../assets/portraits/1.jpg";
import portrait2 from "./../assets/portraits/2.jpg";
import portrait3 from "./../assets/portraits/3.jpg";
import { RootStackProps } from "../navigation/RootStack";
import { StackScreenProps } from "@react-navigation/stack";

export type Props = StackScreenProps<RootStackProps, "Home">;

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

const HomeScreen: FunctionComponent<Props> = () => {
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

  const TransctionData = [
    {
      id: 1,
      amount: "86.00",
      date: "14 Sep 2021",
      title: "Taxi",
      subtitle: "uber car",
      art: {
        background: colors.primary,
        icon: "car",
      },
    },
    {
      id: 2,
      amount: "286.00",
      date: "14 Sep 2021",
      title: "Shoppping",
      subtitle: "Ali express",
      art: {
        background: colors.tertiary,
        icon: "cart",
      },
    },
  ];

  const sendMoneyData = [
    {
      id: 1,
      amount: "2450.56",
      name: "Coby Andoh",
      background: colors.tertiary,
      img: portrait1,
    },
    {
      id: 1,
      amount: "2450.56",
      name: "Harleen Scot",
      background: colors.primary,
      img: portrait2,
    },
    {
      id: 1,
      amount: "2450.56",
      name: "James Corbyn",
      background: colors.accent,
      img: portrait3,
    },
  ];

  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <CardsSection data={cardsData} />
      <TransctionSection data={TransctionData} />
      <SendMoneySection data={sendMoneyData} />
    </HomeContainer>
  );
};

export default HomeScreen;
