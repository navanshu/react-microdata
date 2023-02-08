import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const AddressCountry: Type & {
 Country: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'addressCountry',
   ...props
  },
  children
 );
};

AddressCountry.Country = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'addressCountry',
   itemScope: true,
   itemType: 'https://schema.org/Country',
   ...props
  },
  children
 );
};

export { AddressCountry };
