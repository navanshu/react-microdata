import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TVSeriesType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'partOfTVSeries',
   itemScope: true,
   itemType: 'https://schema.org/TVSeries',
   ...props
  },
  children
 );
};

const PartOfTVSeries: Type & { TVSeries: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'partOfTVSeries',
   ...props
  },
  children
 );
};

PartOfTVSeries.TVSeries = TVSeriesType;

export { PartOfTVSeries };
