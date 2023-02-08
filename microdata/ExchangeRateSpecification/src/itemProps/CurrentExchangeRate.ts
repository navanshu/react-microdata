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
   itemProp: 'currentExchangeRate',
   itemScope: true,
   itemType: 'https://schema.org/UnitPriceSpecification',
   ...props
  },
  children
 );
};

const CurrentExchangeRate: Type & { UnitPriceSpecification: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'currentExchangeRate',
   ...props
  },
  children
 );
};

CurrentExchangeRate.UnitPriceSpecification = UnitPriceSpecificationType;

export { CurrentExchangeRate };
