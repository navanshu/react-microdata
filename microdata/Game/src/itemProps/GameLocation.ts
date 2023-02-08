import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const GameLocation: Type & {
 Place: Type;
 URL: Type;
 PostalAddress: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'gameLocation',
   ...props
  },
  children
 );
};

GameLocation.Place = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'gameLocation',
   itemScope: true,
   itemType: 'https://schema.org/Place',
   ...props
  },
  children
 );
};

GameLocation.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'gameLocation',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

GameLocation.PostalAddress = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'gameLocation',
   itemScope: true,
   itemType: 'https://schema.org/PostalAddress',
   ...props
  },
  children
 );
};

export { GameLocation };
