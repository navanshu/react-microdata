import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'fileSize',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const FileSize: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'fileSize',
   ...props
  },
  children
 );
};

FileSize.Text = TextType;

export { FileSize };
