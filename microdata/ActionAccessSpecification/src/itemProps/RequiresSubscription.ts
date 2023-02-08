import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const RequiresSubscription: Type & {
 MediaSubscription: Type;
 Boolean: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'requiresSubscription',
   ...props
  },
  children
 );
};

RequiresSubscription.MediaSubscription = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'requiresSubscription',
   itemScope: true,
   itemType: 'https://schema.org/MediaSubscription',
   ...props
  },
  children
 );
};

RequiresSubscription.Boolean = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'requiresSubscription',
   itemScope: true,
   itemType: 'https://schema.org/Boolean',
   ...props
  },
  children
 );
};

export { RequiresSubscription };
