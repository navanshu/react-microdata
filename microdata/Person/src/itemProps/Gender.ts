import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Gender: Type & {
 GenderType: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'gender',
   ...props
  },
  children
 );
};

Gender.GenderType = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'gender',
   itemScope: true,
   itemType: 'https://schema.org/GenderType',
   ...props
  },
  children
 );
};

export { Gender };
