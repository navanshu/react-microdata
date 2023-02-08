import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Supply: Type & {
 HowToSupply: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'supply',
   ...props
  },
  children
 );
};

Supply.HowToSupply = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'supply',
   itemScope: true,
   itemType: 'https://schema.org/HowToSupply',
   ...props
  },
  children
 );
};

export { Supply };
