import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const AvailableLanguage: Type & {
 Language: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'availableLanguage',
   ...props
  },
  children
 );
};

AvailableLanguage.Language = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'availableLanguage',
   itemScope: true,
   itemType: 'https://schema.org/Language',
   ...props
  },
  children
 );
};

export { AvailableLanguage };
