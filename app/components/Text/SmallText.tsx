import { StyleSheet, Text, View } from "react-native";
import React, { FunctionComponent } from "react";
import { colors } from "../../config/color";
import { TextProps } from "../../types";
import styled from "styled-components/native";

const SmallText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};

export default SmallText;

const StyledText = styled.Text`
  font-size: 12px;
  text-align: left;
  color: ${colors.gray};
`;
