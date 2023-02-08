import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const NumberOfCredits: Type & {
 Integer: Type;
 StructuredValue: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'numberOfCredits',
   ...props
  },
  children
 );
};

NumberOfCredits.Integer = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'numberOfCredits',
   itemScope: true,
   itemType: 'https://schema.org/Integer',
   ...props
  },
  children
 );
};

NumberOfCredits.StructuredValue = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'numberOfCredits',
   itemScope: true,
   itemType: 'https://schema.org/StructuredValue',
   ...props
  },
  children
 );
};

export { NumberOfCredits };
