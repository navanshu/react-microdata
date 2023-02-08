import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TypeOfGood: Type & {
 Product: Type;
 Service: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'typeOfGood',
   ...props
  },
  children
 );
};

TypeOfGood.Product = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'typeOfGood',
   itemScope: true,
   itemType: 'https://schema.org/Product',
   ...props
  },
  children
 );
};

TypeOfGood.Service = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'typeOfGood',
   itemScope: true,
   itemType: 'https://schema.org/Service',
   ...props
  },
  children
 );
};

export { TypeOfGood };
