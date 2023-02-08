import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const EpisodeType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'partOfEpisode',
   itemScope: true,
   itemType: 'https://schema.org/Episode',
   ...props
  },
  children
 );
};

const PartOfEpisode: Type & { Episode: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'partOfEpisode',
   ...props
  },
  children
 );
};

PartOfEpisode.Episode = EpisodeType;

export { PartOfEpisode };
