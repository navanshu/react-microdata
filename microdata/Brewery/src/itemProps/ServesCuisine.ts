import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'servesCuisine',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const ServesCuisine: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'servesCuisine',
   ...props
  },
  children
 );
};

ServesCuisine.Text = TextType;

export { ServesCuisine };
