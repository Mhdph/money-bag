import { ReactNode } from "react";
import { ImageSourcePropType, StyleProp, TextStyle } from "react-native";

export interface TextProps {
  textStyles?: StyleProp<TextStyle>;
  children: ReactNode;
}

export interface CardProps {
  id: number;
  accountNo: string;
  balance: number;
  alias?: string;
  logo: ImageSourcePropType;
}

export interface CardSectionProps {
  data: Array<CardProps>;
}

export interface TransctionProps {
  id: number;
  title: string;
  subtitle: string;
  amount: string;
  date: string;
  art: {
    icon: string;
    background: string;
  };
}
export interface TransctionSectionProps {
  data: Array<TransctionProps>;
}

export interface TransctionAviProps {
  icon: any;
  background: string;
}

export interface SendMoneyProps {
  id: number;
  name: string;
  amount: string;
  background: any;
  img: ImageSourcePropType;
}

export interface SendMoneySecctionProps {
  data: Array<SendMoneyProps>;
}

export interface AmountProps {
  balance: number;
}

export interface BalanceCardProps extends CardProps {}
