import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const InLanguage: Type & {
 Language: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'inLanguage',
   ...props
  },
  children
 );
};

InLanguage.Language = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'inLanguage',
   itemScope: true,
   itemType: 'https://schema.org/Language',
   ...props
  },
  children
 );
};

export { InLanguage };
