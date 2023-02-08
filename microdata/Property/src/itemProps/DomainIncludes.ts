import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ClassType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'domainIncludes',
   itemScope: true,
   itemType: 'https://schema.org/Class',
   ...props
  },
  children
 );
};

const DomainIncludes: Type & { Class: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'domainIncludes',
   ...props
  },
  children
 );
};

DomainIncludes.Class = ClassType;

export { DomainIncludes };
