import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const OfferItemConditionType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'itemCondition',
   itemScope: true,
   itemType: 'https://schema.org/OfferItemCondition',
   ...props
  },
  children
 );
};

const ItemCondition: Type & { OfferItemCondition: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'itemCondition',
   ...props
  },
  children
 );
};

ItemCondition.OfferItemCondition = OfferItemConditionType;

export { ItemCondition };
