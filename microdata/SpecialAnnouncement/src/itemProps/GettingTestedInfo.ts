import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const GettingTestedInfo: Type & {
 WebContent: Type;
 URL: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'gettingTestedInfo',
   ...props
  },
  children
 );
};

GettingTestedInfo.WebContent = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'gettingTestedInfo',
   itemScope: true,
   itemType: 'https://schema.org/WebContent',
   ...props
  },
  children
 );
};

GettingTestedInfo.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'gettingTestedInfo',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

export { GettingTestedInfo };
