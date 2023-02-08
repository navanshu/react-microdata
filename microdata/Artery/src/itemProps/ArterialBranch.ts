import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const AnatomicalStructureType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'arterialBranch',
   itemScope: true,
   itemType: 'https://schema.org/AnatomicalStructure',
   ...props
  },
  children
 );
};

const ArterialBranch: Type & { AnatomicalStructure: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'arterialBranch',
   ...props
  },
  children
 );
};

ArterialBranch.AnatomicalStructure = AnatomicalStructureType;

export { ArterialBranch };
