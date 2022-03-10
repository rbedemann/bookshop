import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

export const LinkBehavior = React.forwardRef<any, Omit<LinkProps, 'to'> & { href: LinkProps['to'] }>(
  (
    props,
    ref,
  ) => {
    const { href, ...other } = props;
    // Map href (MUI) -> to (react-router)
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Link ref={ref} to={href} {...other} />;
  },
);
