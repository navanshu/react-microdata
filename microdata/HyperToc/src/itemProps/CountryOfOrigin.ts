import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const CountryType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'countryOfOrigin',
   itemScope: true,
   itemType: 'https://schema.org/Country',
   ...props
  },
  children
 );
};

const CountryOfOrigin: Type & { Country: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'countryOfOrigin',
   ...props
  },
  children
 );
};

CountryOfOrigin.Country = CountryType;

export { CountryOfOrigin };
