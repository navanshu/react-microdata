import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'seatRow',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const SeatRow: Type & { Text: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'seatRow',
   ...props
  },
  children
 );
};

SeatRow.Text = TextType;

export { SeatRow };
