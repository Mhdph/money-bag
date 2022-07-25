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
    backgrund: string;
  };
}
export interface TransctionSectionProps {
  data: Array<TransctionProps>;
}

export interface TransctionAviProps {
  icon: string;
  backgrund: string;
}
