import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const OfferType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'acceptedOffer',
   itemScope: true,
   itemType: 'https://schema.org/Offer',
   ...props
  },
  children
 );
};

const AcceptedOffer: Type & { Offer: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'acceptedOffer',
   ...props
  },
  children
 );
};

AcceptedOffer.Offer = OfferType;

export { AcceptedOffer };
