import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ContactPointOptionType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'contactOption',
   itemScope: true,
   itemType: 'https://schema.org/ContactPointOption',
   ...props
  },
  children
 );
};

const ContactOption: Type & { ContactPointOption: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'contactOption',
   ...props
  },
  children
 );
};

ContactOption.ContactPointOption = ContactPointOptionType;

export { ContactOption };
