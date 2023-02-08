import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const GamePlatform: Type & {
 URL: Type;
 Thing: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'gamePlatform',
   ...props
  },
  children
 );
};

GamePlatform.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'gamePlatform',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

GamePlatform.Thing = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'gamePlatform',
   itemScope: true,
   itemType: 'https://schema.org/Thing',
   ...props
  },
  children
 );
};

export { GamePlatform };
