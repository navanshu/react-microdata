import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const OfferType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'makesOffer',
   itemScope: true,
   itemType: 'https://schema.org/Offer',
   ...props
  },
  children
 );
};

const MakesOffer: Type & { Offer: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'makesOffer',
   ...props
  },
  children
 );
};

MakesOffer.Offer = OfferType;

export { MakesOffer };
