import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const NumberType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'additionalNumberOfGuests',
   itemScope: true,
   itemType: 'https://schema.org/Number',
   ...props
  },
  children
 );
};

const AdditionalNumberOfGuests: Type & { Number: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'additionalNumberOfGuests',
   ...props
  },
  children
 );
};

AdditionalNumberOfGuests.Number = NumberType;

export { AdditionalNumberOfGuests };
