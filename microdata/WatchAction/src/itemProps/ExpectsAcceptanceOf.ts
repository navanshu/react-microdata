import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const OfferType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'expectsAcceptanceOf',
   itemScope: true,
   itemType: 'https://schema.org/Offer',
   ...props
  },
  children
 );
};

const ExpectsAcceptanceOf: Type & { Offer: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'expectsAcceptanceOf',
   ...props
  },
  children
 );
};

ExpectsAcceptanceOf.Offer = OfferType;

export { ExpectsAcceptanceOf };
