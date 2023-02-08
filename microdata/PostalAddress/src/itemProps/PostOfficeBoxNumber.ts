import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'postOfficeBoxNumber',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const PostOfficeBoxNumber: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'postOfficeBoxNumber',
   ...props
  },
  children
 );
};

PostOfficeBoxNumber.Text = TextType;

export { PostOfficeBoxNumber };
