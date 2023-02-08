import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const SensoryUnit: Type & {
 SuperficialAnatomy: Type;
 AnatomicalStructure: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'sensoryUnit',
   ...props
  },
  children
 );
};

SensoryUnit.SuperficialAnatomy = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'sensoryUnit',
   itemScope: true,
   itemType: 'https://schema.org/SuperficialAnatomy',
   ...props
  },
  children
 );
};

SensoryUnit.AnatomicalStructure = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'sensoryUnit',
   itemScope: true,
   itemType: 'https://schema.org/AnatomicalStructure',
   ...props
  },
  children
 );
};

export { SensoryUnit };
