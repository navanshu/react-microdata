import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'videoFrameSize',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const VideoFrameSize: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'videoFrameSize',
   ...props
  },
  children
 );
};

VideoFrameSize.Text = TextType;

export { VideoFrameSize };
