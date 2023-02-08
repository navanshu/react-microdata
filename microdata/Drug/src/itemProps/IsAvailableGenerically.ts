import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const BooleanType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'isAvailableGenerically',
   itemScope: true,
   itemType: 'https://schema.org/Boolean',
   ...props
  },
  children
 );
};

const IsAvailableGenerically: Type & { Boolean: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'isAvailableGenerically',
   ...props
  },
  children
 );
};

IsAvailableGenerically.Boolean = BooleanType;

export { IsAvailableGenerically };
