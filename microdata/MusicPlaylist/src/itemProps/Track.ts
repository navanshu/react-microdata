import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Track: Type & {
 ItemList: Type;
 MusicRecording: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'track',
   ...props
  },
  children
 );
};

Track.ItemList = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'track',
   itemScope: true,
   itemType: 'https://schema.org/ItemList',
   ...props
  },
  children
 );
};

Track.MusicRecording = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'track',
   itemScope: true,
   itemType: 'https://schema.org/MusicRecording',
   ...props
  },
  children
 );
};

export { Track };
