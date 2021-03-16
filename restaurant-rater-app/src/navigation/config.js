import React from 'react';
import { PrimaryHeader } from 'shared/components';

const primaryHeaderOptions = {
  header: (props) => {
    const { scene } = props;
    return <PrimaryHeader title={scene.descriptor.options.title} />;
  },
};

export { primaryHeaderOptions };
