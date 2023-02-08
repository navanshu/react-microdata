import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const RegionDrained: Type & {
 AnatomicalSystem: Type;
 AnatomicalStructure: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'regionDrained',
   ...props
  },
  children
 );
};

RegionDrained.AnatomicalSystem = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'regionDrained',
   itemScope: true,
   itemType: 'https://schema.org/AnatomicalSystem',
   ...props
  },
  children
 );
};

RegionDrained.AnatomicalStructure = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'regionDrained',
   itemScope: true,
   itemType: 'https://schema.org/AnatomicalStructure',
   ...props
  },
  children
 );
};

export { RegionDrained };
