import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MusicCompositionType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'musicArrangement',
   itemScope: true,
   itemType: 'https://schema.org/MusicComposition',
   ...props
  },
  children
 );
};

const MusicArrangement: Type & { MusicComposition: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'musicArrangement',
   ...props
  },
  children
 );
};

MusicArrangement.MusicComposition = MusicCompositionType;

export { MusicArrangement };
