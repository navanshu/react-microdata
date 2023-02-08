import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const WebPageElementType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'mainContentOfPage',
   itemScope: true,
   itemType: 'https://schema.org/WebPageElement',
   ...props
  },
  children
 );
};

const MainContentOfPage: Type & { WebPageElement: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'mainContentOfPage',
   ...props
  },
  children
 );
};

MainContentOfPage.WebPageElement = WebPageElementType;

export { MainContentOfPage };
