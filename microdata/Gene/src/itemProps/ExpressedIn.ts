import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ExpressedIn: Type & {
 AnatomicalStructure: Type;
 BioChemEntity: Type;
 DefinedTerm: Type;
 AnatomicalSystem: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'expressedIn',
   ...props
  },
  children
 );
};

ExpressedIn.AnatomicalStructure = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'expressedIn',
   itemScope: true,
   itemType: 'https://schema.org/AnatomicalStructure',
   ...props
  },
  children
 );
};

ExpressedIn.BioChemEntity = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'expressedIn',
   itemScope: true,
   itemType: 'https://schema.org/BioChemEntity',
   ...props
  },
  children
 );
};

ExpressedIn.DefinedTerm = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'expressedIn',
   itemScope: true,
   itemType: 'https://schema.org/DefinedTerm',
   ...props
  },
  children
 );
};

ExpressedIn.AnatomicalSystem = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'expressedIn',
   itemScope: true,
   itemType: 'https://schema.org/AnatomicalSystem',
   ...props
  },
  children
 );
};

export { ExpressedIn };
