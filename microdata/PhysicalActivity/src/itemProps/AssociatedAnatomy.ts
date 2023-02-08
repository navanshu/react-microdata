import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const AssociatedAnatomy: Type & {
 AnatomicalStructure: Type;
 AnatomicalSystem: Type;
 SuperficialAnatomy: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'associatedAnatomy',
   ...props
  },
  children
 );
};

AssociatedAnatomy.AnatomicalStructure = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'associatedAnatomy',
   itemScope: true,
   itemType: 'https://schema.org/AnatomicalStructure',
   ...props
  },
  children
 );
};

AssociatedAnatomy.AnatomicalSystem = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'associatedAnatomy',
   itemScope: true,
   itemType: 'https://schema.org/AnatomicalSystem',
   ...props
  },
  children
 );
};

AssociatedAnatomy.SuperficialAnatomy = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'associatedAnatomy',
   itemScope: true,
   itemType: 'https://schema.org/SuperficialAnatomy',
   ...props
  },
  children
 );
};

export { AssociatedAnatomy };
