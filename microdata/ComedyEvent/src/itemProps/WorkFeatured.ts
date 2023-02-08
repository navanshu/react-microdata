import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const CreativeWorkType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'workFeatured',
   itemScope: true,
   itemType: 'https://schema.org/CreativeWork',
   ...props
  },
  children
 );
};

const WorkFeatured: Type & { CreativeWork: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'workFeatured',
   ...props
  },
  children
 );
};

WorkFeatured.CreativeWork = CreativeWorkType;

export { WorkFeatured };
