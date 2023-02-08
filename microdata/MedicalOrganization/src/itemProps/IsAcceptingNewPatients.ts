import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const BooleanType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'isAcceptingNewPatients',
   itemScope: true,
   itemType: 'https://schema.org/Boolean',
   ...props
  },
  children
 );
};

const IsAcceptingNewPatients: Type & { Boolean: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'isAcceptingNewPatients',
   ...props
  },
  children
 );
};

IsAcceptingNewPatients.Boolean = BooleanType;

export { IsAcceptingNewPatients };
