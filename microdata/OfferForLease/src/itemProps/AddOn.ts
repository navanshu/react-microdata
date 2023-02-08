import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const OfferType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'addOn',
   itemScope: true,
   itemType: 'https://schema.org/Offer',
   ...props
  },
  children
 );
};

const AddOn: Type & { Offer: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'addOn',
   ...props
  },
  children
 );
};

AddOn.Offer = OfferType;

export { AddOn };
