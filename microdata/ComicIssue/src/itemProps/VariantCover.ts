import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'variantCover',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const VariantCover: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'variantCover',
   ...props
  },
  children
 );
};

VariantCover.Text = TextType;

export { VariantCover };
