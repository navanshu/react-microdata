import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const LegislationType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'legislationTransposes',
   itemScope: true,
   itemType: 'https://schema.org/Legislation',
   ...props
  },
  children
 );
};

const LegislationTransposes: Type & { Legislation: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'legislationTransposes',
   ...props
  },
  children
 );
};

LegislationTransposes.Legislation = LegislationType;

export { LegislationTransposes };
