import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { rootActions } from '@/store/rootActions';
import { AppDispatch } from '@/store/store';

export const useDispatchedActions = () => {
  const dispatch = useDispatch<AppDispatch>();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
