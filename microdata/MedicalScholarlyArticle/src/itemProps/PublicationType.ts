import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'publicationType',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const PublicationType: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'publicationType',
   ...props
  },
  children
 );
};

PublicationType.Text = TextType;

export { PublicationType };
