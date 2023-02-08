import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ActionPlatform: Type & {
 URL: Type;
 DigitalPlatformEnumeration: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'actionPlatform',
   ...props
  },
  children
 );
};

ActionPlatform.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'actionPlatform',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

ActionPlatform.DigitalPlatformEnumeration = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'actionPlatform',
   itemScope: true,
   itemType: 'https://schema.org/DigitalPlatformEnumeration',
   ...props
  },
  children
 );
};

export { ActionPlatform };
