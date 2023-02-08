import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const KnowsLanguage: Type & {
 Language: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'knowsLanguage',
   ...props
  },
  children
 );
};

KnowsLanguage.Language = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'knowsLanguage',
   itemScope: true,
   itemType: 'https://schema.org/Language',
   ...props
  },
  children
 );
};

export { KnowsLanguage };
