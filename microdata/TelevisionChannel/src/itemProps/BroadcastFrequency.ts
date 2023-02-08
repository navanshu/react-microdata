import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const BroadcastFrequency: Type & {
 BroadcastFrequencySpecification: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'broadcastFrequency',
   ...props
  },
  children
 );
};

BroadcastFrequency.BroadcastFrequencySpecification = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'broadcastFrequency',
   itemScope: true,
   itemType: 'https://schema.org/BroadcastFrequencySpecification',
   ...props
  },
  children
 );
};

export { BroadcastFrequency };
