import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'productGroupID',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const ProductGroupID: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'productGroupID',
   ...props
  },
  children
 );
};

ProductGroupID.Text = TextType;

export { ProductGroupID };
