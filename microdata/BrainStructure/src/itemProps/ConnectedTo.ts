import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const AnatomicalStructureType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'connectedTo',
   itemScope: true,
   itemType: 'https://schema.org/AnatomicalStructure',
   ...props
  },
  children
 );
};

const ConnectedTo: Type & { AnatomicalStructure: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'connectedTo',
   ...props
  },
  children
 );
};

ConnectedTo.AnatomicalStructure = AnatomicalStructureType;

export { ConnectedTo };
