import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const CreativeWorkSeasonType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'containsSeason',
   itemScope: true,
   itemType: 'https://schema.org/CreativeWorkSeason',
   ...props
  },
  children
 );
};

const ContainsSeason: Type & { CreativeWorkSeason: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'containsSeason',
   ...props
  },
  children
 );
};

ContainsSeason.CreativeWorkSeason = CreativeWorkSeasonType;

export { ContainsSeason };
