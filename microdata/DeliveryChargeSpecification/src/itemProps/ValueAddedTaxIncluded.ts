import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const BooleanType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'valueAddedTaxIncluded',
   itemScope: true,
   itemType: 'https://schema.org/Boolean',
   ...props
  },
  children
 );
};

const ValueAddedTaxIncluded: Type & { Boolean: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'valueAddedTaxIncluded',
   ...props
  },
  children
 );
};

ValueAddedTaxIncluded.Boolean = BooleanType;

export { ValueAddedTaxIncluded };
