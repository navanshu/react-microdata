import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const IntegerType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'numberOfSeasons',
   itemScope: true,
   itemType: 'https://schema.org/Integer',
   ...props
  },
  children
 );
};

const NumberOfSeasons: Type & { Integer: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'numberOfSeasons',
   ...props
  },
  children
 );
};

NumberOfSeasons.Integer = IntegerType;

export { NumberOfSeasons };
