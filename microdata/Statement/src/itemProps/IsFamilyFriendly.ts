import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const BooleanType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'isFamilyFriendly',
   itemScope: true,
   itemType: 'https://schema.org/Boolean',
   ...props
  },
  children
 );
};

const IsFamilyFriendly: Type & { Boolean: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'isFamilyFriendly',
   ...props
  },
  children
 );
};

IsFamilyFriendly.Boolean = BooleanType;

export { IsFamilyFriendly };
