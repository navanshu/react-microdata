import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const LegislationType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'legislationConsolidates',
   itemScope: true,
   itemType: 'https://schema.org/Legislation',
   ...props
  },
  children
 );
};

const LegislationConsolidates: Type & { Legislation: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'legislationConsolidates',
   ...props
  },
  children
 );
};

LegislationConsolidates.Legislation = LegislationType;

export { LegislationConsolidates };
