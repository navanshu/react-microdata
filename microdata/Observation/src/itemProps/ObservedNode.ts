import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const StatisticalPopulationType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'observedNode',
   itemScope: true,
   itemType: 'https://schema.org/StatisticalPopulation',
   ...props
  },
  children
 );
};

const ObservedNode: Type & { StatisticalPopulation: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'observedNode',
   ...props
  },
  children
 );
};

ObservedNode.StatisticalPopulation = StatisticalPopulationType;

export { ObservedNode };
