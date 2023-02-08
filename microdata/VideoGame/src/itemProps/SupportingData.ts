import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DataFeedType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'supportingData',
   itemScope: true,
   itemType: 'https://schema.org/DataFeed',
   ...props
  },
  children
 );
};

const SupportingData: Type & { DataFeed: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'supportingData',
   ...props
  },
  children
 );
};

SupportingData.DataFeed = DataFeedType;

export { SupportingData };
