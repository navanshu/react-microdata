import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const PropertyType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'inverseOf',
   itemScope: true,
   itemType: 'https://schema.org/Property',
   ...props
  },
  children
 );
};

const InverseOf: Type & { Property: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'inverseOf',
   ...props
  },
  children
 );
};

InverseOf.Property = PropertyType;

export { InverseOf };
