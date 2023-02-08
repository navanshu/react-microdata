import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ReturnFeesEnumerationType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'customerRemorseReturnFees',
   itemScope: true,
   itemType: 'https://schema.org/ReturnFeesEnumeration',
   ...props
  },
  children
 );
};

const CustomerRemorseReturnFees: Type & { ReturnFeesEnumeration: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'customerRemorseReturnFees',
   ...props
  },
  children
 );
};

CustomerRemorseReturnFees.ReturnFeesEnumeration = ReturnFeesEnumerationType;

export { CustomerRemorseReturnFees };
