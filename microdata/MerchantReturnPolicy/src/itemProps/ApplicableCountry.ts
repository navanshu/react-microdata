import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ApplicableCountry: Type & {
 Country: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'applicableCountry',
   ...props
  },
  children
 );
};

ApplicableCountry.Country = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'applicableCountry',
   itemScope: true,
   itemType: 'https://schema.org/Country',
   ...props
  },
  children
 );
};

export { ApplicableCountry };
