---
nav: Components
group: Provider
title: Bedrock (AWS)
atomId: Bedrock
description: https://aws.amazon.com/bedrock
---

## Icons

```tsx
import { Bedrock } from '@bentwnghk/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Bedrock size={64} />
    <Bedrock.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Bedrock } from '@bentwnghk/icons';

export default () => <Bedrock.Text size={48} />;
```

## Combine

```tsx
import { Bedrock } from '@bentwnghk/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Bedrock.Combine size={64} />
    <Bedrock.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Bedrock } from '@bentwnghk/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Bedrock.Avatar size={64} background={Bedrock.colorPrimary} />
    <Bedrock.Avatar size={64} />
    <Bedrock.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Bedrock } from '@bentwnghk/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Bedrock.colorPrimary} />
    <ColorPreview color={Bedrock.colorGradient} />
  </Flexbox>
);
```
