import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ContactPointType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'contactPoints',
   itemScope: true,
   itemType: 'https://schema.org/ContactPoint',
   ...props
  },
  children
 );
};

const ContactPoints: Type & { ContactPoint: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'contactPoints',
   ...props
  },
  children
 );
};

ContactPoints.ContactPoint = ContactPointType;

export { ContactPoints };
