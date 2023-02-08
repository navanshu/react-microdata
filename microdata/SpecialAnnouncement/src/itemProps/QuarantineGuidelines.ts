import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const QuarantineGuidelines: Type & {
 URL: Type;
 WebContent: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'quarantineGuidelines',
   ...props
  },
  children
 );
};

QuarantineGuidelines.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'quarantineGuidelines',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

QuarantineGuidelines.WebContent = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'quarantineGuidelines',
   itemScope: true,
   itemType: 'https://schema.org/WebContent',
   ...props
  },
  children
 );
};

export { QuarantineGuidelines };
