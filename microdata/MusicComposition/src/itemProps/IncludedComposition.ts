import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MusicCompositionType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'includedComposition',
   itemScope: true,
   itemType: 'https://schema.org/MusicComposition',
   ...props
  },
  children
 );
};

const IncludedComposition: Type & { MusicComposition: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'includedComposition',
   ...props
  },
  children
 );
};

IncludedComposition.MusicComposition = MusicCompositionType;

export { IncludedComposition };
