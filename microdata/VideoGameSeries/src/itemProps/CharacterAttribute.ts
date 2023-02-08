import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ThingType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'characterAttribute',
   itemScope: true,
   itemType: 'https://schema.org/Thing',
   ...props
  },
  children
 );
};

const CharacterAttribute: Type & { Thing: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'characterAttribute',
   ...props
  },
  children
 );
};

CharacterAttribute.Thing = ThingType;

export { CharacterAttribute };
