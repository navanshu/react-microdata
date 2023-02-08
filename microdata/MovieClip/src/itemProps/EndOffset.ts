import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const EndOffset: Type & {
 Number: Type;
 HyperTocEntry: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'endOffset',
   ...props
  },
  children
 );
};

EndOffset.Number = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'endOffset',
   itemScope: true,
   itemType: 'https://schema.org/Number',
   ...props
  },
  children
 );
};

EndOffset.HyperTocEntry = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'endOffset',
   itemScope: true,
   itemType: 'https://schema.org/HyperTocEntry',
   ...props
  },
  children
 );
};

export { EndOffset };
