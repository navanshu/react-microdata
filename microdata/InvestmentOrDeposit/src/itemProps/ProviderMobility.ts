import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'providerMobility',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const ProviderMobility: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'providerMobility',
   ...props
  },
  children
 );
};

ProviderMobility.Text = TextType;

export { ProviderMobility };
