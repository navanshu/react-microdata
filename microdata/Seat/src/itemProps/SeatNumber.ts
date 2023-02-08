import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'seatNumber',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const SeatNumber: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'seatNumber',
   ...props
  },
  children
 );
};

SeatNumber.Text = TextType;

export { SeatNumber };
