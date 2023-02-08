import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const BrainStructureType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'sourcedFrom',
   itemScope: true,
   itemType: 'https://schema.org/BrainStructure',
   ...props
  },
  children
 );
};

const SourcedFrom: Type & { BrainStructure: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'sourcedFrom',
   ...props
  },
  children
 );
};

SourcedFrom.BrainStructure = BrainStructureType;

export { SourcedFrom };
