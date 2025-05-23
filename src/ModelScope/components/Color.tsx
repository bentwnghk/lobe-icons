'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  return (
    <svg
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M0 7.967h2.667v2.667H0zM8 10.633h2.667V13.3H8z" fill="#36CED0" />
      <path
        d="M0 10.633h2.667V13.3H0zM2.667 13.3h2.666v2.667H8v2.666H2.667V13.3zM2.667 5.3H8v2.667H5.333v2.666H2.667V5.3zM10.667 13.3h2.667v2.667h-2.667z"
        fill="#624AFF"
      />
      <path d="M24 7.967h-2.667v2.667H24zM16 10.633h-2.667V13.3H16z" fill="#36CED0" />
      <path
        d="M24 10.633h-2.667V13.3H24zM21.333 13.3h-2.666v2.667H16v2.666h5.333V13.3zM21.333 5.3H16v2.667h2.667v2.666h2.666V5.3z"
        fill="#624AFF"
      />
    </svg>
  );
});

export default Icon;
