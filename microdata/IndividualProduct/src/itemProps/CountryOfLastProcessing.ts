import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'countryOfLastProcessing',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const CountryOfLastProcessing: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'countryOfLastProcessing',
   ...props
  },
  children
 );
};

CountryOfLastProcessing.Text = TextType;

export { CountryOfLastProcessing };
