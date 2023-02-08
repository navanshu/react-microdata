import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const NewsUpdatesAndGuidelines: Type & {
 URL: Type;
 WebContent: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'newsUpdatesAndGuidelines',
   ...props
  },
  children
 );
};

NewsUpdatesAndGuidelines.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'newsUpdatesAndGuidelines',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

NewsUpdatesAndGuidelines.WebContent = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'newsUpdatesAndGuidelines',
   itemScope: true,
   itemType: 'https://schema.org/WebContent',
   ...props
  },
  children
 );
};

export { NewsUpdatesAndGuidelines };
