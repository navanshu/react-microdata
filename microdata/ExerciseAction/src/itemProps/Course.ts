import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const PlaceType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'course',
   itemScope: true,
   itemType: 'https://schema.org/Place',
   ...props
  },
  children
 );
};

const Course: Type & { Place: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'course',
   ...props
  },
  children
 );
};

Course.Place = PlaceType;

export { Course };
