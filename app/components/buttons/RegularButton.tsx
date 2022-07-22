import React, { FunctionComponent } from "react";
import { colors } from "../../config/color";
import RegularText from "../Text/RegularText";
import {
  GestureResponderEvent,
  StyleProp,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";
import styled from "styled-components/native";
import SmallText from "../Text/SmallText";

interface ButtonProps {
  btnStyles?: StyleProp<ViewStyle>;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  textStyles?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

const RegularButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <ButtonView style={props.btnStyles} onPress={props.onPress}>
      <Text style={{ fontSize: 16, color: colors.graylight }}>
        {props.children}
      </Text>
    </ButtonView>
  );
};

export default RegularButton;

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.primary};
  width: 100%;
  padding: 20px;
  border-radius: 20px;
`;
