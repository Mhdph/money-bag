import { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../../config/color";
import { AmountProps } from "../../types";
import RegularText from "../Text/RegularText";
import SmallText from "../Text/SmallText";

const AmountSectionBackground = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  padding-top: px;
`;
const AmountSection: FunctionComponent<AmountProps> = (props) => {
  return (
    <AmountSectionBackground>
      <SmallText textStyles={{ color: colors.secondary, marginBottom: 15 }}>
        Total Balance
      </SmallText>
      <RegularText textStyles={{ color: colors.secondary, fontSize: 28 }}>
        $ {props.balance}
      </RegularText>
    </AmountSectionBackground>
  );
};

export default AmountSection;
