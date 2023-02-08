import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const PostalCodeRangeSpecificationType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'postalCodeRange',
   itemScope: true,
   itemType: 'https://schema.org/PostalCodeRangeSpecification',
   ...props
  },
  children
 );
};

const PostalCodeRange: Type & { PostalCodeRangeSpecification: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'postalCodeRange',
   ...props
  },
  children
 );
};

PostalCodeRange.PostalCodeRangeSpecification = PostalCodeRangeSpecificationType;

export { PostalCodeRange };
