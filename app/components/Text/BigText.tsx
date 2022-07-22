import { StyleSheet, Text, View } from "react-native";
import React, { FunctionComponent } from "react";
import { colors } from "../../config/color";
import { TextProps } from "../../types";
import styled from "styled-components/native";

const BigText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};

export default BigText;

const StyledText = styled.Text`
  font-size: 38px;
  text-align: left;
  color: ${colors.white};
  font-weight: bold;
`;
