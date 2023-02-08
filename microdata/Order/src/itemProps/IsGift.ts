import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const BooleanType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'isGift',
   itemScope: true,
   itemType: 'https://schema.org/Boolean',
   ...props
  },
  children
 );
};

const IsGift: Type & { Boolean: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'isGift',
   ...props
  },
  children
 );
};

IsGift.Boolean = BooleanType;

export { IsGift };
