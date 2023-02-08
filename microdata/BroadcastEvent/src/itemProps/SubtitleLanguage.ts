import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const SubtitleLanguage: Type & {
 Language: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'subtitleLanguage',
   ...props
  },
  children
 );
};

SubtitleLanguage.Language = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'subtitleLanguage',
   itemScope: true,
   itemType: 'https://schema.org/Language',
   ...props
  },
  children
 );
};

export { SubtitleLanguage };
