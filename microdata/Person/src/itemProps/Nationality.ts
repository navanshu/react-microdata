import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const CountryType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'nationality',
   itemScope: true,
   itemType: 'https://schema.org/Country',
   ...props
  },
  children
 );
};

const Nationality: Type & { Country: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'nationality',
   ...props
  },
  children
 );
};

Nationality.Country = CountryType;

export { Nationality };
