import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ByArtist: Type & {
 Person: Type;
 MusicGroup: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'byArtist',
   ...props
  },
  children
 );
};

ByArtist.Person = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'byArtist',
   itemScope: true,
   itemType: 'https://schema.org/Person',
   ...props
  },
  children
 );
};

ByArtist.MusicGroup = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'byArtist',
   itemScope: true,
   itemType: 'https://schema.org/MusicGroup',
   ...props
  },
  children
 );
};

export { ByArtist };
