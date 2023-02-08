import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'departureTerminal',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const DepartureTerminal: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'departureTerminal',
   ...props
  },
  children
 );
};

DepartureTerminal.Text = TextType;

export { DepartureTerminal };
