import { StyleSheet, Text, View } from "react-native";
import React, { FunctionComponent } from "react";
import { colors } from "../../config/color";
import { TextProps } from "../../types";
import styled from "styled-components/native";

const RegularText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};

export default RegularText;

const StyledText = styled.Text`
  font-size: 16px;
  text-align: left;
  color: ${colors.gray};
`;
