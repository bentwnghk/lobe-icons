---
nav: Components
group: Model
title: Aya (Cohere)
atomId: Aya
description: https://cohere.com/research/aya
---

## Icons

```tsx
import { Aya } from '@bentwnghk/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Aya size={64} />
    <Aya.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Aya } from '@bentwnghk/icons';

export default () => <Aya.Text size={48} />;
```

## Combine

```tsx
import { Aya } from '@bentwnghk/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Aya.Combine size={64} />
    <Aya.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Aya } from '@bentwnghk/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Aya.Avatar size={64} />
    <Aya.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Aya } from '@bentwnghk/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Aya.colorPrimary} />
  </Flexbox>
);
```
