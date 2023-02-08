import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Season: Type & {
 URL: Type;
 CreativeWorkSeason: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'season',
   ...props
  },
  children
 );
};

Season.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'season',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

Season.CreativeWorkSeason = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'season',
   itemScope: true,
   itemType: 'https://schema.org/CreativeWorkSeason',
   ...props
  },
  children
 );
};

export { Season };
