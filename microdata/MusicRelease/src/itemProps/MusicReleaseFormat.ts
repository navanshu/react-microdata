import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MusicReleaseFormatTypeType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'musicReleaseFormat',
   itemScope: true,
   itemType: 'https://schema.org/MusicReleaseFormatType',
   ...props
  },
  children
 );
};

const MusicReleaseFormat: Type & { MusicReleaseFormatType: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'musicReleaseFormat',
   ...props
  },
  children
 );
};

MusicReleaseFormat.MusicReleaseFormatType = MusicReleaseFormatTypeType;

export { MusicReleaseFormat };
