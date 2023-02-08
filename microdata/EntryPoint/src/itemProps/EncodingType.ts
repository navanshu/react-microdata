import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'encodingType',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const EncodingType: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'encodingType',
   ...props
  },
  children
 );
};

EncodingType.Text = TextType;

export { EncodingType };
