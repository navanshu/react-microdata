import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'countryOfAssembly',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const CountryOfAssembly: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'countryOfAssembly',
   ...props
  },
  children
 );
};

CountryOfAssembly.Text = TextType;

export { CountryOfAssembly };
