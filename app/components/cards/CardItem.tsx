import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../../config/color";
import { CardProps } from "../../types";
import { ScreenWidth } from "../shated";
import card_bg from "../../assets/bgs/background_transparent.png";
import { ImageBackground, StyleSheet, View } from "react-native";
import RegularText from "../Text/RegularText";
import SmallText from "../Text/SmallText";

const CardTouchable = styled.TouchableHighlight`
  height: 100%;
  border-radius: 25px;
`;
const ToucableView = styled.View`
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.Image`
  width: 100%;
  height: 80%;
`;

const CardItem: FunctionComponent<CardProps> = (props) => {
  return (
    <ImageBackground style={styles.bgimage} source={card_bg}>
      <CardTouchable>
        <ToucableView>
          <CardRow>
            <RegularText textStyles={{ color: colors.white }}>
              ****** {props.accountNo.slice(6, 10)}
            </RegularText>
          </CardRow>
          <CardRow>
            <View style={{ flex: 3 }}>
              <SmallText
                textStyles={{ marginBottom: 5, color: colors.graylight }}
              >
                Total Balance
              </SmallText>
              <RegularText textStyles={{ fontSize: 19 }}>
                ${props.balance}
              </RegularText>
            </View>
          </CardRow>
          <Logo source={props.logo} />
        </ToucableView>
      </CardTouchable>
    </ImageBackground>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  bgimage: {
    height: 190,
    borderRadius: 25,
    overflow: "hidden",
    backgroundColor: colors.accent,
    width: ScreenWidth * 0.8,
  },
});
