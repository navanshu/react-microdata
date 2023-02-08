import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Correction: Type & {
 URL: Type;
 CorrectionComment: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'correction',
   ...props
  },
  children
 );
};

Correction.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'correction',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

Correction.CorrectionComment = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'correction',
   itemScope: true,
   itemType: 'https://schema.org/CorrectionComment',
   ...props
  },
  children
 );
};

export { Correction };
