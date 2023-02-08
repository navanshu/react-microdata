import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MusicCompositionType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'recordingOf',
   itemScope: true,
   itemType: 'https://schema.org/MusicComposition',
   ...props
  },
  children
 );
};

const RecordingOf: Type & { MusicComposition: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'recordingOf',
   ...props
  },
  children
 );
};

RecordingOf.MusicComposition = MusicCompositionType;

export { RecordingOf };
