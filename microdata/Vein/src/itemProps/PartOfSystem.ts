import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const AnatomicalSystemType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'partOfSystem',
   itemScope: true,
   itemType: 'https://schema.org/AnatomicalSystem',
   ...props
  },
  children
 );
};

const PartOfSystem: Type & { AnatomicalSystem: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'partOfSystem',
   ...props
  },
  children
 );
};

PartOfSystem.AnatomicalSystem = AnatomicalSystemType;

export { PartOfSystem };
