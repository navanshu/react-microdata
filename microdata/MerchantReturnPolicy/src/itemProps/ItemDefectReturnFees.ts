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
   itemProp: 'itemDefectReturnFees',
   itemScope: true,
   itemType: 'https://schema.org/ReturnFeesEnumeration',
   ...props
  },
  children
 );
};

const ItemDefectReturnFees: Type & { ReturnFeesEnumeration: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'itemDefectReturnFees',
   ...props
  },
  children
 );
};

ItemDefectReturnFees.ReturnFeesEnumeration = ReturnFeesEnumerationType;

export { ItemDefectReturnFees };
