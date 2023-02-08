import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const CreativeWorkSeasonType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'partOfSeason',
   itemScope: true,
   itemType: 'https://schema.org/CreativeWorkSeason',
   ...props
  },
  children
 );
};

const PartOfSeason: Type & { CreativeWorkSeason: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'partOfSeason',
   ...props
  },
  children
 );
};

PartOfSeason.CreativeWorkSeason = CreativeWorkSeasonType;

export { PartOfSeason };
