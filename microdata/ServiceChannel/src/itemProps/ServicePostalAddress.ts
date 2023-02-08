import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const PostalAddressType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'servicePostalAddress',
   itemScope: true,
   itemType: 'https://schema.org/PostalAddress',
   ...props
  },
  children
 );
};

const ServicePostalAddress: Type & { PostalAddress: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'servicePostalAddress',
   ...props
  },
  children
 );
};

ServicePostalAddress.PostalAddress = PostalAddressType;

export { ServicePostalAddress };
