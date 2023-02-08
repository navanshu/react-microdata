import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const IntegerType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'numberOfPages',
   itemScope: true,
   itemType: 'https://schema.org/Integer',
   ...props
  },
  children
 );
};

const NumberOfPages: Type & { Integer: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'numberOfPages',
   ...props
  },
  children
 );
};

NumberOfPages.Integer = IntegerType;

export { NumberOfPages };
