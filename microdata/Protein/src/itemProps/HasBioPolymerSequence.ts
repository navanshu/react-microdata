import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'hasBioPolymerSequence',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const HasBioPolymerSequence: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'hasBioPolymerSequence',
   ...props
  },
  children
 );
};

HasBioPolymerSequence.Text = TextType;

export { HasBioPolymerSequence };
