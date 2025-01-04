---
nav: Components
group: Provider
title: LobeHub
atomId: LobeHub
description: https://lobehub.com
---

## Icons

```tsx
import { LobeHub } from '@bentwnghk/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <LobeHub size={64} />
    <LobeHub.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { LobeHub } from '@bentwnghk/icons';

export default () => <LobeHub.Text size={48} />;
```

## Combine

```tsx
import { LobeHub } from '@bentwnghk/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <LobeHub.Combine size={64} />
    <LobeHub.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { LobeHub } from '@bentwnghk/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <LobeHub.Avatar size={64} />
    <LobeHub.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { LobeHub } from '@bentwnghk/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={LobeHub.colorPrimary} />
  </Flexbox>
);
```
