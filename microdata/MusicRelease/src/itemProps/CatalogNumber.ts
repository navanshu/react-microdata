import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'catalogNumber',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const CatalogNumber: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'catalogNumber',
   ...props
  },
  children
 );
};

CatalogNumber.Text = TextType;

export { CatalogNumber };
