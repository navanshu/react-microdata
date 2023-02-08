import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MusicRecordingType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'tracks',
   itemScope: true,
   itemType: 'https://schema.org/MusicRecording',
   ...props
  },
  children
 );
};

const Tracks: Type & { MusicRecording: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'tracks',
   ...props
  },
  children
 );
};

Tracks.MusicRecording = MusicRecordingType;

export { Tracks };
