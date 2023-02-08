import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const HyperTocEntryType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'tocContinuation',
   itemScope: true,
   itemType: 'https://schema.org/HyperTocEntry',
   ...props
  },
  children
 );
};

const TocContinuation: Type & { HyperTocEntry: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'tocContinuation',
   ...props
  },
  children
 );
};

TocContinuation.HyperTocEntry = HyperTocEntryType;

export { TocContinuation };
