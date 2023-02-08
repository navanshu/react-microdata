import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'addressLocality',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const AddressLocality: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'addressLocality',
   ...props
  },
  children
 );
};

AddressLocality.Text = TextType;

export { AddressLocality };
