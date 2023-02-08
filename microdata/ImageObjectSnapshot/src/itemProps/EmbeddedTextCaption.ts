import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'embeddedTextCaption',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const EmbeddedTextCaption: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'embeddedTextCaption',
   ...props
  },
  children
 );
};

EmbeddedTextCaption.Text = TextType;

export { EmbeddedTextCaption };
