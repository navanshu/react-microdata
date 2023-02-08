import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const NumberType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'cvdNumBedsOcc',
   itemScope: true,
   itemType: 'https://schema.org/Number',
   ...props
  },
  children
 );
};

const CvdNumBedsOcc: Type & { Number: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'cvdNumBedsOcc',
   ...props
  },
  children
 );
};

CvdNumBedsOcc.Number = NumberType;

export { CvdNumBedsOcc };
