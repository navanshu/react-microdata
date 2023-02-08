import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'vatID',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const VatID: Type & { Text: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'vatID',
   ...props
  },
  children
 );
};

VatID.Text = TextType;

export { VatID };
