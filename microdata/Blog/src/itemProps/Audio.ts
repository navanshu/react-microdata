import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Audio: Type & {
 AudioObject: Type;
 MusicRecording: Type;
 Clip: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'audio',
   ...props
  },
  children
 );
};

Audio.AudioObject = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'audio',
   itemScope: true,
   itemType: 'https://schema.org/AudioObject',
   ...props
  },
  children
 );
};

Audio.MusicRecording = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'audio',
   itemScope: true,
   itemType: 'https://schema.org/MusicRecording',
   ...props
  },
  children
 );
};

Audio.Clip = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'audio',
   itemScope: true,
   itemType: 'https://schema.org/Clip',
   ...props
  },
  children
 );
};

export { Audio };
