import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Location: Type & {
 PostalAddress: Type;
 Place: Type;
 VirtualLocation: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'location',
   ...props
  },
  children
 );
};

Location.PostalAddress = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'location',
   itemScope: true,
   itemType: 'https://schema.org/PostalAddress',
   ...props
  },
  children
 );
};

Location.Place = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'location',
   itemScope: true,
   itemType: 'https://schema.org/Place',
   ...props
  },
  children
 );
};

Location.VirtualLocation = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'location',
   itemScope: true,
   itemType: 'https://schema.org/VirtualLocation',
   ...props
  },
  children
 );
};

export { Location };
