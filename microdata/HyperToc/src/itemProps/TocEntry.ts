import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const HyperTocEntryType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'tocEntry',
   itemScope: true,
   itemType: 'https://schema.org/HyperTocEntry',
   ...props
  },
  children
 );
};

const TocEntry: Type & { HyperTocEntry: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'tocEntry',
   ...props
  },
  children
 );
};

TocEntry.HyperTocEntry = HyperTocEntryType;

export { TocEntry };
