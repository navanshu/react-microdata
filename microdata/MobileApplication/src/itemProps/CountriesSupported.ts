import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'countriesSupported',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const CountriesSupported: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'countriesSupported',
   ...props
  },
  children
 );
};

CountriesSupported.Text = TextType;

export { CountriesSupported };
