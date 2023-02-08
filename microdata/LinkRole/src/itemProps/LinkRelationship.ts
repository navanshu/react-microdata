import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'linkRelationship',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const LinkRelationship: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'linkRelationship',
   ...props
  },
  children
 );
};

LinkRelationship.Text = TextType;

export { LinkRelationship };
