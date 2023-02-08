import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Value: Type & {
 Number: Type;
 StructuredValue: Type;
 Boolean: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'value',
   ...props
  },
  children
 );
};

Value.Number = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'value',
   itemScope: true,
   itemType: 'https://schema.org/Number',
   ...props
  },
  children
 );
};

Value.StructuredValue = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'value',
   itemScope: true,
   itemType: 'https://schema.org/StructuredValue',
   ...props
  },
  children
 );
};

Value.Boolean = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'value',
   itemScope: true,
   itemType: 'https://schema.org/Boolean',
   ...props
  },
  children
 );
};

export { Value };
