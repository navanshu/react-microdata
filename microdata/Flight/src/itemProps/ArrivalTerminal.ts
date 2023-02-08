import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'arrivalTerminal',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const ArrivalTerminal: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'arrivalTerminal',
   ...props
  },
  children
 );
};

ArrivalTerminal.Text = TextType;

export { ArrivalTerminal };
