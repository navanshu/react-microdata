import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'departureGate',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const DepartureGate: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'departureGate',
   ...props
  },
  children
 );
};

DepartureGate.Text = TextType;

export { DepartureGate };
