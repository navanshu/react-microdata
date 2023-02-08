import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Bed: Type & {
 BedDetails: Type;
 BedType: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'bed',
   ...props
  },
  children
 );
};

Bed.BedDetails = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'bed',
   itemScope: true,
   itemType: 'https://schema.org/BedDetails',
   ...props
  },
  children
 );
};

Bed.BedType = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'bed',
   itemScope: true,
   itemType: 'https://schema.org/BedType',
   ...props
  },
  children
 );
};

export { Bed };
