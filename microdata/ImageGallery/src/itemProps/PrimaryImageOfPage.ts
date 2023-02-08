import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ImageObjectType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'primaryImageOfPage',
   itemScope: true,
   itemType: 'https://schema.org/ImageObject',
   ...props
  },
  children
 );
};

const PrimaryImageOfPage: Type & { ImageObject: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'primaryImageOfPage',
   ...props
  },
  children
 );
};

PrimaryImageOfPage.ImageObject = ImageObjectType;

export { PrimaryImageOfPage };
