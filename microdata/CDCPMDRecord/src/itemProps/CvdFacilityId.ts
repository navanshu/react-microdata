import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'cvdFacilityId',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const CvdFacilityId: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'cvdFacilityId',
   ...props
  },
  children
 );
};

CvdFacilityId.Text = TextType;

export { CvdFacilityId };
