import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const EncodingFormat: Type & {
 URL: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'encodingFormat',
   ...props
  },
  children
 );
};

EncodingFormat.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'encodingFormat',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

export { EncodingFormat };
