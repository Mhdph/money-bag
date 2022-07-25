import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../../config/color";
import { TransctionSectionProps } from "../../types";
import RegularText from "../Text/RegularText";
import SmallText from "../Text/SmallText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TransctionSection: FunctionComponent<TransctionSectionProps> = (
  props
) => {
  return (
    <TransctionSectionBackground>
      <TransctionRow style={{ marginBottom: 25 }}>
        <RegularText textStyles={{ fontSize: 19, color: colors.primary }}>
          Transction
        </RegularText>
        <SmallText textStyles={{ color: colors.secondary }}>Recent</SmallText>
      </TransctionRow>
    </TransctionSectionBackground>
  );
};

export default TransctionSection;

const TransctionSectionBackground = styled.View`
  width: 100%;
  padding-bottom: 25px;
  padding-top: 5px;
  flex: 2;
`;
const TransctionRow = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
