import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'cvdFacilityCounty',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const CvdFacilityCounty: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'cvdFacilityCounty',
   ...props
  },
  children
 );
};

CvdFacilityCounty.Text = TextType;

export { CvdFacilityCounty };
