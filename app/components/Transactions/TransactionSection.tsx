import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../../config/color";
import { TransctionSectionProps } from "../../types";
import RegularText from "../Text/RegularText";
import SmallText from "../Text/SmallText";
import { Ionicons } from "@expo/vector-icons";
import TransctionItem from "./TransctionItem";

const TransctionSection: FunctionComponent<TransctionSectionProps> = (
  props
) => {
  return (
    <TransctionSectionBackground>
      <TransctionRow style={{ marginBottom: 25 }}>
        <RegularText textStyles={{ fontSize: 19, color: colors.primary }}>
          Transction
        </RegularText>
        <SmallText textStyles={{ color: colors.secondary }}>
          Recent{" "}
          <Ionicons name="caret-down" size={13} color={colors.graydark} />
        </SmallText>
      </TransctionRow>
      <TransactionList
        data={props.data}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 25 }}
        keyExtractor={({ id }: any) => id.toString()}
        renderItem={({ item }: any) => <TransctionItem {...item} />}
      />
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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const TransactionList = styled.FlatList`
  width: 100%;
`;
