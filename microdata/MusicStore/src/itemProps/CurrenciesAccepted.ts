import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'currenciesAccepted',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const CurrenciesAccepted: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'currenciesAccepted',
   ...props
  },
  children
 );
};

CurrenciesAccepted.Text = TextType;

export { CurrenciesAccepted };
