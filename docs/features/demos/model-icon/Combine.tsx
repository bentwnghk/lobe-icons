import { ModelIcon, modelMappings } from '@bentwnghk/icons';
import { Grid } from '@bentwnghk/ui';

export default () => {
  return (
    <Grid gap={16} width={'100%'}>
      {Object.values(modelMappings).map((item) => {
        const model = item.keywords[0].replace('^', '');
        return <ModelIcon key={model} model={model} size={28} type={'combine'} />;
      })}
    </Grid>
  );
};
