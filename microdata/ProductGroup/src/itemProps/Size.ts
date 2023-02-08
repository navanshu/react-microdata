import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Size: Type & {
 QuantitativeValue: Type;
 DefinedTerm: Type;
 SizeSpecification: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'size',
   ...props
  },
  children
 );
};

Size.QuantitativeValue = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'size',
   itemScope: true,
   itemType: 'https://schema.org/QuantitativeValue',
   ...props
  },
  children
 );
};

Size.DefinedTerm = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'size',
   itemScope: true,
   itemType: 'https://schema.org/DefinedTerm',
   ...props
  },
  children
 );
};

Size.SizeSpecification = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'size',
   itemScope: true,
   itemType: 'https://schema.org/SizeSpecification',
   ...props
  },
  children
 );
};

export { Size };
