import { FunctionComponent, useRef } from "react";
import styled from "styled-components/native";
import { colors } from "../../config/color";
import RegularText from "../Text/RegularText";
import SmallText from "../Text/SmallText";
import { SendMoneySecctionProps } from "../../types";
import BottomSheet from "reanimated-bottom-sheet";
import SendMoneyItem from "./SendMoneyItem";
const SendMoneySection: FunctionComponent<SendMoneySecctionProps> = (props) => {
  const sheetRef = useRef<BottomSheet>(null);

  const renderContent = () => {
    return (
      <SendMondySectionBackground>
        <SendMoneyRow style={{ marginBottom: 25 }}>
          <RegularText textStyles={{ fontSize: 19, color: colors.secondary }}>
            Send money to
          </RegularText>
          <TextButton onPress={() => alert("add")}>
            <SmallText
              textStyles={{ fontWeight: "bold", color: colors.tertiary }}
            >
              +Add
            </SmallText>
          </TextButton>
        </SendMoneyRow>
        <SendMoneyList
          data={props.data}
          contentContainerStyle={{ alignItems: "flex-start" }}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          keyExtractor={({ id }: any) => id.toString()}
          renderItem={({ item }: any) => <SendMoneyItem {...item} />}
        />
      </SendMondySectionBackground>
    );
  };

  return (
    <BottomSheet
      ref={sheetRef}
      initialSnap={1}
      borderRadius={25}
      snapPoints={[240, 85]}
      enabledContentTapInteraction={false}
      renderContent={renderContent}
    />
  );
};

export default SendMoneySection;

const SendMondySectionBackground = styled.View`
  width: 100%;
  padding-top: 15px;
  background-color: ${colors.white};
`;
const SendMoneyRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 25px 0;
`;

const SendMoneyList = styled.FlatList`
  width: 100%;
  flex: auto;
  min-height: 80%;
  padding: 25px 0;
`;

const TextButton = styled.TouchableOpacity``;
