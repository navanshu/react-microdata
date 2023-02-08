import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const InDefinedTermSet: Type & {
 URL: Type;
 DefinedTermSet: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'inDefinedTermSet',
   ...props
  },
  children
 );
};

InDefinedTermSet.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'inDefinedTermSet',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

InDefinedTermSet.DefinedTermSet = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'inDefinedTermSet',
   itemScope: true,
   itemType: 'https://schema.org/DefinedTermSet',
   ...props
  },
  children
 );
};

export { InDefinedTermSet };
