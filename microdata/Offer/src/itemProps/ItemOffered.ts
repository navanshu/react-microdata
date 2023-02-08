import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ItemOffered: Type & {
 Trip: Type;
 Event: Type;
 Product: Type;
 AggregateOffer: Type;
 CreativeWork: Type;
 MenuItem: Type;
 Service: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'itemOffered',
   ...props
  },
  children
 );
};

ItemOffered.Trip = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'itemOffered',
   itemScope: true,
   itemType: 'https://schema.org/Trip',
   ...props
  },
  children
 );
};

ItemOffered.Event = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'itemOffered',
   itemScope: true,
   itemType: 'https://schema.org/Event',
   ...props
  },
  children
 );
};

ItemOffered.Product = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'itemOffered',
   itemScope: true,
   itemType: 'https://schema.org/Product',
   ...props
  },
  children
 );
};

ItemOffered.AggregateOffer = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'itemOffered',
   itemScope: true,
   itemType: 'https://schema.org/AggregateOffer',
   ...props
  },
  children
 );
};

ItemOffered.CreativeWork = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'itemOffered',
   itemScope: true,
   itemType: 'https://schema.org/CreativeWork',
   ...props
  },
  children
 );
};

ItemOffered.MenuItem = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'itemOffered',
   itemScope: true,
   itemType: 'https://schema.org/MenuItem',
   ...props
  },
  children
 );
};

ItemOffered.Service = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'itemOffered',
   itemScope: true,
   itemType: 'https://schema.org/Service',
   ...props
  },
  children
 );
};

export { ItemOffered };
