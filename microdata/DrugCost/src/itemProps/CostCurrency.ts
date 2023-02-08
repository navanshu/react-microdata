import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'costCurrency',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const CostCurrency: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'costCurrency',
   ...props
  },
  children
 );
};

CostCurrency.Text = TextType;

export { CostCurrency };
