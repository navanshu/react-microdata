import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'copyrightNotice',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const CopyrightNotice: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'copyrightNotice',
   ...props
  },
  children
 );
};

CopyrightNotice.Text = TextType;

export { CopyrightNotice };
