import { Button, Image, StyleSheet, Text, View } from "react-native";
import React, { FunctionComponent } from "react";
import { colors } from "../config/color";
import background from "../assets/bgs/background_v1.png";
import BigText from "../components/Text/BigText";
import SmallText from "../components/Text/SmallText";
import RegularButton from "../components/buttons/RegularButton";
import styled from "styled-components/native";
import { Container } from "../components/shated";
import { StatusBar } from "expo-status-bar";
import { RootStackProps } from "../navigation/RootStack";
import { StackScreenProps } from "@react-navigation/stack";

type Props = StackScreenProps<RootStackProps, "Welcome">;

const WelcomeContainer = styled(Container)`
  background-color: ${colors.secondary};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const TopSection = styled.View`
  width: 100%;
  flex: 1;
  max-height: 55%;
`;

const TopImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const BottomSection = styled.View`
  width: 100%;
  padding: 25px;
  flex: 1;
  justify-content: flex-end;
`;

const WelcomeScreen: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <TopSection>
          <TopImage source={background} />
        </TopSection>
        <BottomSection>
          <BigText textStyles={{ width: "70%", marginBottom: 25 }}>
            Best way to track your money
          </BigText>
          <SmallText textStyles={{ width: "70%", marginBottom: 25 }}>
            Best payment method,connects your money to your friends,family{" "}
          </SmallText>
          <RegularButton
            onPress={() => {
              navigation.navigate("Home");
            }}
            children="Get Started"
          />
        </BottomSection>
      </WelcomeContainer>
    </>
  );
};

export default WelcomeScreen;
