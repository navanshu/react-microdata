import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const CreativeWorkSeriesType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'partOfSeries',
   itemScope: true,
   itemType: 'https://schema.org/CreativeWorkSeries',
   ...props
  },
  children
 );
};

const PartOfSeries: Type & { CreativeWorkSeries: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'partOfSeries',
   ...props
  },
  children
 );
};

PartOfSeries.CreativeWorkSeries = CreativeWorkSeriesType;

export { PartOfSeries };
