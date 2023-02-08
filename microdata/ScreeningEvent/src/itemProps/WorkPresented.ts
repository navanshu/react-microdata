import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MovieType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'workPresented',
   itemScope: true,
   itemType: 'https://schema.org/Movie',
   ...props
  },
  children
 );
};

const WorkPresented: Type & { Movie: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'workPresented',
   ...props
  },
  children
 );
};

WorkPresented.Movie = MovieType;

export { WorkPresented };
