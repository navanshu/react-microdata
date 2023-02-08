import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'serialNumber',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const SerialNumber: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'serialNumber',
   ...props
  },
  children
 );
};

SerialNumber.Text = TextType;

export { SerialNumber };
