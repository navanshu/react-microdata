import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const OfferShippingDetailsType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'shippingDetails',
   itemScope: true,
   itemType: 'https://schema.org/OfferShippingDetails',
   ...props
  },
  children
 );
};

const ShippingDetails: Type & { OfferShippingDetails: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'shippingDetails',
   ...props
  },
  children
 );
};

ShippingDetails.OfferShippingDetails = OfferShippingDetailsType;

export { ShippingDetails };
