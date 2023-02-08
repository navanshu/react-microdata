import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MusicBy: Type & {
 Person: Type;
 MusicGroup: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'musicBy',
   ...props
  },
  children
 );
};

MusicBy.Person = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'musicBy',
   itemScope: true,
   itemType: 'https://schema.org/Person',
   ...props
  },
  children
 );
};

MusicBy.MusicGroup = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'musicBy',
   itemScope: true,
   itemType: 'https://schema.org/MusicGroup',
   ...props
  },
  children
 );
};

export { MusicBy };
