import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const PublicTransportClosuresInfo: Type & {
 URL: Type;
 WebContent: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'publicTransportClosuresInfo',
   ...props
  },
  children
 );
};

PublicTransportClosuresInfo.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'publicTransportClosuresInfo',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

PublicTransportClosuresInfo.WebContent = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'publicTransportClosuresInfo',
   itemScope: true,
   itemType: 'https://schema.org/WebContent',
   ...props
  },
  children
 );
};

export { PublicTransportClosuresInfo };
