import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Jurisdiction: Type & {
 AdministrativeArea: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'jurisdiction',
   ...props
  },
  children
 );
};

Jurisdiction.AdministrativeArea = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'jurisdiction',
   itemScope: true,
   itemType: 'https://schema.org/AdministrativeArea',
   ...props
  },
  children
 );
};

export { Jurisdiction };
