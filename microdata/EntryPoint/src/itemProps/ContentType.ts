import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'contentType',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const ContentType: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'contentType',
   ...props
  },
  children
 );
};

ContentType.Text = TextType;

export { ContentType };
