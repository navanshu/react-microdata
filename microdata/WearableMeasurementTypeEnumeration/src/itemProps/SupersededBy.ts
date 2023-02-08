import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const SupersededBy: Type & {
 Enumeration: Type;
 Class: Type;
 Property: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'supersededBy',
   ...props
  },
  children
 );
};

SupersededBy.Enumeration = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'supersededBy',
   itemScope: true,
   itemType: 'https://schema.org/Enumeration',
   ...props
  },
  children
 );
};

SupersededBy.Class = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'supersededBy',
   itemScope: true,
   itemType: 'https://schema.org/Class',
   ...props
  },
  children
 );
};

SupersededBy.Property = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'supersededBy',
   itemScope: true,
   itemType: 'https://schema.org/Property',
   ...props
  },
  children
 );
};

export { SupersededBy };
