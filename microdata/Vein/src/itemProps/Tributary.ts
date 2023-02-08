import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const AnatomicalStructureType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'tributary',
   itemScope: true,
   itemType: 'https://schema.org/AnatomicalStructure',
   ...props
  },
  children
 );
};

const Tributary: Type & { AnatomicalStructure: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'tributary',
   ...props
  },
  children
 );
};

Tributary.AnatomicalStructure = AnatomicalStructureType;

export { Tributary };
