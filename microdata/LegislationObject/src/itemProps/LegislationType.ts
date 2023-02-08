import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const LegislationType: Type & {
 CategoryCode: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'legislationType',
   ...props
  },
  children
 );
};

LegislationType.CategoryCode = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'legislationType',
   itemScope: true,
   itemType: 'https://schema.org/CategoryCode',
   ...props
  },
  children
 );
};

export { LegislationType };
