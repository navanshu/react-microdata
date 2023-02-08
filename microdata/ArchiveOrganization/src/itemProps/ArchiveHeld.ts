import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ArchiveComponentType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'archiveHeld',
   itemScope: true,
   itemType: 'https://schema.org/ArchiveComponent',
   ...props
  },
  children
 );
};

const ArchiveHeld: Type & { ArchiveComponent: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'archiveHeld',
   ...props
  },
  children
 );
};

ArchiveHeld.ArchiveComponent = ArchiveComponentType;

export { ArchiveHeld };
