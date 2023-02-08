import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ExchangeRateSpread: Type & {
 Number: Type;
 MonetaryAmount: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'exchangeRateSpread',
   ...props
  },
  children
 );
};

ExchangeRateSpread.Number = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'exchangeRateSpread',
   itemScope: true,
   itemType: 'https://schema.org/Number',
   ...props
  },
  children
 );
};

ExchangeRateSpread.MonetaryAmount = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'exchangeRateSpread',
   itemScope: true,
   itemType: 'https://schema.org/MonetaryAmount',
   ...props
  },
  children
 );
};

export { ExchangeRateSpread };
