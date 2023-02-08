import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'bitrate',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Bitrate: Type & { Text: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'bitrate',
   ...props
  },
  children
 );
};

Bitrate.Text = TextType;

export { Bitrate };
