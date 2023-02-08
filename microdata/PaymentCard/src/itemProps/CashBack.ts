import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const CashBack: Type & {
 Number: Type;
 Boolean: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'cashBack',
   ...props
  },
  children
 );
};

CashBack.Number = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'cashBack',
   itemScope: true,
   itemType: 'https://schema.org/Number',
   ...props
  },
  children
 );
};

CashBack.Boolean = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'cashBack',
   itemScope: true,
   itemType: 'https://schema.org/Boolean',
   ...props
  },
  children
 );
};

export { CashBack };
