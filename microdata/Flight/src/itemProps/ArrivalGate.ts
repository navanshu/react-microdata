import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'arrivalGate',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const ArrivalGate: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'arrivalGate',
   ...props
  },
  children
 );
};

ArrivalGate.Text = TextType;

export { ArrivalGate };
