import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ActionAccessSpecificationType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'actionAccessibilityRequirement',
   itemScope: true,
   itemType: 'https://schema.org/ActionAccessSpecification',
   ...props
  },
  children
 );
};

const ActionAccessibilityRequirement: Type & {
 ActionAccessSpecification: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'actionAccessibilityRequirement',
   ...props
  },
  children
 );
};

ActionAccessibilityRequirement.ActionAccessSpecification =
 ActionAccessSpecificationType;

export { ActionAccessibilityRequirement };
