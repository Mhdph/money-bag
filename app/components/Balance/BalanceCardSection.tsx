import { FunctionComponent } from "react";
import styled from "styled-components/native";
import { BalanceCardProps } from "../../types";
import BalanceCard from "./BalanceCard";

const BalanceCardSection: FunctionComponent<BalanceCardProps> = (props) => {
  return (
    <BalanceCardSectionBackground>
      <BalanceCard {...props} />
    </BalanceCardSectionBackground>
  );
};

export default BalanceCardSection;

const BalanceCardSectionBackground = styled.View`
  width: 100%;
  align-items: center;
  flex: 2;
`;
