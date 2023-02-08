import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DataFeedElement: Type & {
 Thing: Type;
 DataFeedItem: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'dataFeedElement',
   ...props
  },
  children
 );
};

DataFeedElement.Thing = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'dataFeedElement',
   itemScope: true,
   itemType: 'https://schema.org/Thing',
   ...props
  },
  children
 );
};

DataFeedElement.DataFeedItem = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'dataFeedElement',
   itemScope: true,
   itemType: 'https://schema.org/DataFeedItem',
   ...props
  },
  children
 );
};

export { DataFeedElement };
