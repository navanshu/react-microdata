import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const PostalAddressType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'deliveryAddress',
   itemScope: true,
   itemType: 'https://schema.org/PostalAddress',
   ...props
  },
  children
 );
};

const DeliveryAddress: Type & { PostalAddress: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'deliveryAddress',
   ...props
  },
  children
 );
};

DeliveryAddress.PostalAddress = PostalAddressType;

export { DeliveryAddress };
