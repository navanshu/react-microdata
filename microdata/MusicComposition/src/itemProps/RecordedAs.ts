import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MusicRecordingType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'recordedAs',
   itemScope: true,
   itemType: 'https://schema.org/MusicRecording',
   ...props
  },
  children
 );
};

const RecordedAs: Type & { MusicRecording: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'recordedAs',
   ...props
  },
  children
 );
};

RecordedAs.MusicRecording = MusicRecordingType;

export { RecordedAs };
