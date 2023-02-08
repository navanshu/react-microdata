import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const PostalAddressType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'billingAddress',
   itemScope: true,
   itemType: 'https://schema.org/PostalAddress',
   ...props
  },
  children
 );
};

const BillingAddress: Type & { PostalAddress: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'billingAddress',
   ...props
  },
  children
 );
};

BillingAddress.PostalAddress = PostalAddressType;

export { BillingAddress };
