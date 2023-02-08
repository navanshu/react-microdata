import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'urlTemplate',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const UrlTemplate: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'urlTemplate',
   ...props
  },
  children
 );
};

UrlTemplate.Text = TextType;

export { UrlTemplate };
