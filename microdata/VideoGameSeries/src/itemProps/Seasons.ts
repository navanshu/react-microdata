import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const CreativeWorkSeasonType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'seasons',
   itemScope: true,
   itemType: 'https://schema.org/CreativeWorkSeason',
   ...props
  },
  children
 );
};

const Seasons: Type & { CreativeWorkSeason: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'seasons',
   ...props
  },
  children
 );
};

Seasons.CreativeWorkSeason = CreativeWorkSeasonType;

export { Seasons };
