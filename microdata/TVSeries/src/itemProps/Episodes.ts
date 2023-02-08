import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const EpisodeType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'episodes',
   itemScope: true,
   itemType: 'https://schema.org/Episode',
   ...props
  },
  children
 );
};

const Episodes: Type & { Episode: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'episodes',
   ...props
  },
  children
 );
};

Episodes.Episode = EpisodeType;

export { Episodes };
