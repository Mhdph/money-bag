import React, { FunctionComponent } from "react";
import RegularText from "../Text/RegularText";
import SmallText from "../Text/SmallText";
import { colors } from "../../config/color";
import styled from "styled-components/native";
import { TransctionProps } from "../../types";
import TransctionAvi from "./TransctionAvi";
import { View } from "react-native";

const TransctionItem: FunctionComponent<TransctionProps> = (props) => {
  return (
    <TransctionRow>
      <LeftView>
        <TransctionAvi
          icon={props.art.icon}
          background={props.art.background}
        />
        <View style={{ marginLeft: 10 }}>
          <RegularText
            textStyles={{
              color: colors.secondary,
              textAlign: "left",
              marginBottom: 5,
            }}
          >
            {props.title}
          </RegularText>
          <SmallText textStyles={{ textAlign: "left", color: colors.graydark }}>
            {props.subtitle}
          </SmallText>
        </View>
      </LeftView>
      <RightView>
        <RegularText
          textStyles={{
            color: colors.secondary,
            textAlign: "right",
            marginBottom: 5,
          }}
        >
          {props.amount}
        </RegularText>
        <SmallText textStyles={{ textAlign: "right", color: colors.graydark }}>
          {props.date}
        </SmallText>
      </RightView>
    </TransctionRow>
  );
};

export default TransctionItem;

const TransctionRow = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  width: 100%;
`;
const LeftView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  height: 100%;
  align-items: center;
  flex: 2;
`;
const RightView = styled.View`
  flex: 1;
`;
