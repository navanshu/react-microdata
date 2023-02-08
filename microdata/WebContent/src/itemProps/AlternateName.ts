import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'alternateName',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const AlternateName: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'alternateName',
   ...props
  },
  children
 );
};

AlternateName.Text = TextType;

export { AlternateName };
