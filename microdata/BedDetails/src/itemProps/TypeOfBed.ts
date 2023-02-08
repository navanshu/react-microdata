import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TypeOfBed: Type & {
 BedType: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'typeOfBed',
   ...props
  },
  children
 );
};

TypeOfBed.BedType = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'typeOfBed',
   itemScope: true,
   itemType: 'https://schema.org/BedType',
   ...props
  },
  children
 );
};

export { TypeOfBed };
