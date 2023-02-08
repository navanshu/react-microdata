import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'possibleComplication',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const PossibleComplication: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'possibleComplication',
   ...props
  },
  children
 );
};

PossibleComplication.Text = TextType;

export { PossibleComplication };
