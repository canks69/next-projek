import * as React from 'react';

import Accent from '@/components/Accent';

type AccentType = React.ComponentPropsWithoutRef<'span'>;

export default function Tooltip({ children, className }: AccentType) {
  return (
    <>
      <h1 className='text-3xl md:text-5xl'>
        <Accent className={className}>{children}</Accent>
      </h1>
    </>
  );
}
