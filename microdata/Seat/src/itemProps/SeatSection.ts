import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'seatSection',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const SeatSection: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'seatSection',
   ...props
  },
  children
 );
};

SeatSection.Text = TextType;

export { SeatSection };
