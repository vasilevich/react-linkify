// @flow

import * as React from 'react';

export default (decoratedHref: string, decoratedText: string, key: number): React.Node => {
  return (
    <a href={decoratedHref} target="_blank" rel="nofollow noreferrer external help" key={key}>
      {decoratedText}
    </a>
  );
};
