import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const PriceSpecificationType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'eligibleTransactionVolume',
   itemScope: true,
   itemType: 'https://schema.org/PriceSpecification',
   ...props
  },
  children
 );
};

const EligibleTransactionVolume: Type & { PriceSpecification: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'eligibleTransactionVolume',
   ...props
  },
  children
 );
};

EligibleTransactionVolume.PriceSpecification = PriceSpecificationType;

export { EligibleTransactionVolume };
