import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const WorkLocation: Type & {
 Place: Type;
 ContactPoint: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'workLocation',
   ...props
  },
  children
 );
};

WorkLocation.Place = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'workLocation',
   itemScope: true,
   itemType: 'https://schema.org/Place',
   ...props
  },
  children
 );
};

WorkLocation.ContactPoint = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'workLocation',
   itemScope: true,
   itemType: 'https://schema.org/ContactPoint',
   ...props
  },
  children
 );
};

export { WorkLocation };
