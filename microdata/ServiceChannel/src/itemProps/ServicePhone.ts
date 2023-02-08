import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ContactPointType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'servicePhone',
   itemScope: true,
   itemType: 'https://schema.org/ContactPoint',
   ...props
  },
  children
 );
};

const ServicePhone: Type & { ContactPoint: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'servicePhone',
   ...props
  },
  children
 );
};

ServicePhone.ContactPoint = ContactPointType;

export { ServicePhone };
