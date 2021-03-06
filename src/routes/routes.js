import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => <div />;

export const home = Loadable({
  loader: () => import('../components/Home'),
  loading: Loading
});
export const Anchor3 = Loadable({
  loader: () => import('../components/Anchor3'),
  loading: Loading
});
