import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MediaManipulationRatingEnumerationType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'mediaAuthenticityCategory',
   itemScope: true,
   itemType: 'https://schema.org/MediaManipulationRatingEnumeration',
   ...props
  },
  children
 );
};

const MediaAuthenticityCategory: Type & {
 MediaManipulationRatingEnumeration: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'mediaAuthenticityCategory',
   ...props
  },
  children
 );
};

MediaAuthenticityCategory.MediaManipulationRatingEnumeration =
 MediaManipulationRatingEnumerationType;

export { MediaAuthenticityCategory };
