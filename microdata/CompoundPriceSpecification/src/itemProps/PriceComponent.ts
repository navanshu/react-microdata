import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const UnitPriceSpecificationType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'priceComponent',
   itemScope: true,
   itemType: 'https://schema.org/UnitPriceSpecification',
   ...props
  },
  children
 );
};

const PriceComponent: Type & { UnitPriceSpecification: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'priceComponent',
   ...props
  },
  children
 );
};

PriceComponent.UnitPriceSpecification = UnitPriceSpecificationType;

export { PriceComponent };
