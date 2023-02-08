import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const FundedItem: Type & {
 Product: Type;
 Person: Type;
 BioChemEntity: Type;
 Event: Type;
 MedicalEntity: Type;
 CreativeWork: Type;
 Organization: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'fundedItem',
   ...props
  },
  children
 );
};

FundedItem.Product = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'fundedItem',
   itemScope: true,
   itemType: 'https://schema.org/Product',
   ...props
  },
  children
 );
};

FundedItem.Person = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'fundedItem',
   itemScope: true,
   itemType: 'https://schema.org/Person',
   ...props
  },
  children
 );
};

FundedItem.BioChemEntity = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'fundedItem',
   itemScope: true,
   itemType: 'https://schema.org/BioChemEntity',
   ...props
  },
  children
 );
};

FundedItem.Event = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'fundedItem',
   itemScope: true,
   itemType: 'https://schema.org/Event',
   ...props
  },
  children
 );
};

FundedItem.MedicalEntity = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'fundedItem',
   itemScope: true,
   itemType: 'https://schema.org/MedicalEntity',
   ...props
  },
  children
 );
};

FundedItem.CreativeWork = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'fundedItem',
   itemScope: true,
   itemType: 'https://schema.org/CreativeWork',
   ...props
  },
  children
 );
};

FundedItem.Organization = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'fundedItem',
   itemScope: true,
   itemType: 'https://schema.org/Organization',
   ...props
  },
  children
 );
};

export { FundedItem };
