import { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../../config/color";
import RegularText from "../Text/RegularText";
import SmallText from "../Text/SmallText";
import { ScreenWidth } from "../shated";
import { SendMoneyProps } from "../../types";
import Profile from "../Header/Profile";

const SendMoneyItem: FunctionComponent<SendMoneyProps> = (props) => {
  return (
    <SendMoneyItemCOntainer
      underlayColor={colors.secondary}
      style={{ backgroundColor: props.background }}
      onPress={() => {
        alert("Send Money");
      }}
    >
      <>
        <Profile img={props.img} imageContainerStyle={{ marginBottom: 10 }} />
        <SmallText
          textStyles={{
            textAlign: "left",
            color: colors.white,
            fontSize: 12,
          }}
        >
          {props.name}
        </SmallText>
        <RegularText
          textStyles={{ color: colors.white, textAlign: "left", fontSize: 13 }}
        >
          {props.amount}
        </RegularText>
      </>
    </SendMoneyItemCOntainer>
  );
};

export default SendMoneyItem;

const SendMoneyItemCOntainer = styled.TouchableHighlight`
  height: 130px;
  width: ${ScreenWidth * 0.27}px;
  padding: 10px;
  border-radius: 15px;
  justify-content: space-around;
  justify-content: space-around;
  margin: 0 10px 10px 0px;
`;
