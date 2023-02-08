import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'bookEdition',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const BookEdition: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'bookEdition',
   ...props
  },
  children
 );
};

BookEdition.Text = TextType;

export { BookEdition };
