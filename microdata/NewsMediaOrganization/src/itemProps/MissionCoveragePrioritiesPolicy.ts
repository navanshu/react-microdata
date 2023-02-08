import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MissionCoveragePrioritiesPolicy: Type & {
 CreativeWork: Type;
 URL: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'missionCoveragePrioritiesPolicy',
   ...props
  },
  children
 );
};

MissionCoveragePrioritiesPolicy.CreativeWork = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'missionCoveragePrioritiesPolicy',
   itemScope: true,
   itemType: 'https://schema.org/CreativeWork',
   ...props
  },
  children
 );
};

MissionCoveragePrioritiesPolicy.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'missionCoveragePrioritiesPolicy',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

export { MissionCoveragePrioritiesPolicy };
