import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Speakable: Type & {
 URL: Type;
 SpeakableSpecification: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'speakable',
   ...props
  },
  children
 );
};

Speakable.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'speakable',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

Speakable.SpeakableSpecification = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'speakable',
   itemScope: true,
   itemType: 'https://schema.org/SpeakableSpecification',
   ...props
  },
  children
 );
};

export { Speakable };
