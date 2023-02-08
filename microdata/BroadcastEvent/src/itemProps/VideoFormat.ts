import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'videoFormat',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const VideoFormat: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'videoFormat',
   ...props
  },
  children
 );
};

VideoFormat.Text = TextType;

export { VideoFormat };
