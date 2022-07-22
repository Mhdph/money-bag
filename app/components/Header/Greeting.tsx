import { FunctionComponent } from "react";
import { StyleProp, TextStyle } from "react-native";
import styled from "styled-components/native";
import RegularText from "../Text/RegularText";
import { colors } from "../../config/color";
import SmallText from "../Text/SmallText";

interface GreetingProps {
  mainText: string;
  subText: string;
  mainTextStyles?: StyleProp<TextStyle>;
  subTextStyles?: StyleProp<TextStyle>;
}

const Greeting: FunctionComponent<GreetingProps> = (props) => {
  return (
    <StyledView>
      <RegularText
        textStyles={[
          { color: colors.secondary, fontSize: 24 },
          props.mainTextStyles,
        ]}
      >
        {props.mainText}
      </RegularText>
      <SmallText textStyles={[{ color: colors.graydark }, props.subTextStyles]}>
        {props.subText}
      </SmallText>
    </StyledView>
  );
};

export default Greeting;

const StyledView = styled.View`
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;
