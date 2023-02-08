import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ContactPointType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'serviceSmsNumber',
   itemScope: true,
   itemType: 'https://schema.org/ContactPoint',
   ...props
  },
  children
 );
};

const ServiceSmsNumber: Type & { ContactPoint: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'serviceSmsNumber',
   ...props
  },
  children
 );
};

ServiceSmsNumber.ContactPoint = ContactPointType;

export { ServiceSmsNumber };
