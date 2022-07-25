import { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { colors } from "../config/color";
import { Container } from "../components/shated";
import { StackScreenProps } from "@react-navigation/stack";
import AmountSection from "../components/Balance/AmountSection";
import { RootStackProps } from "../navigation/RootStack";
import BalanceCardSection from "../components/Balance/BalanceCardSection";
import ButtonSection from "../components/Balance/ButtonSection";

type Props = StackScreenProps<RootStackProps, "Balance">;

const Balance: FunctionComponent<Props> = ({ route }) => {
  return (
    <BalanceConatainer>
      <StatusBar style="dark" />
      <AmountSection balance={route.params?.balance} />
      <BalanceCardSection {...route?.params} />
      <ButtonSection />
    </BalanceConatainer>
  );
};

export default Balance;

const BalanceConatainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  padding: 25px;
  flex: 1;
`;
