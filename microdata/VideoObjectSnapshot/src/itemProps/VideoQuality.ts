import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'videoQuality',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const VideoQuality: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'videoQuality',
   ...props
  },
  children
 );
};

VideoQuality.Text = TextType;

export { VideoQuality };
