import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'contentSize',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const ContentSize: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'contentSize',
   ...props
  },
  children
 );
};

ContentSize.Text = TextType;

export { ContentSize };
