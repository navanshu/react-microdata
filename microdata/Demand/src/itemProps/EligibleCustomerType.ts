import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const BusinessEntityTypeType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'eligibleCustomerType',
   itemScope: true,
   itemType: 'https://schema.org/BusinessEntityType',
   ...props
  },
  children
 );
};

const EligibleCustomerType: Type & { BusinessEntityType: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'eligibleCustomerType',
   ...props
  },
  children
 );
};

EligibleCustomerType.BusinessEntityType = BusinessEntityTypeType;

export { EligibleCustomerType };
