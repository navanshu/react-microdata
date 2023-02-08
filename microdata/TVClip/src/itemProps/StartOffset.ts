import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const StartOffset: Type & {
 Number: Type;
 HyperTocEntry: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'startOffset',
   ...props
  },
  children
 );
};

StartOffset.Number = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'startOffset',
   itemScope: true,
   itemType: 'https://schema.org/Number',
   ...props
  },
  children
 );
};

StartOffset.HyperTocEntry = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'startOffset',
   itemScope: true,
   itemType: 'https://schema.org/HyperTocEntry',
   ...props
  },
  children
 );
};

export { StartOffset };
