import React from 'react';
import Error from '../components/error/Error';
import Loading from '../components/loading/Loading';

export const LoadingWrapper = ({ loading, error, children }) => {
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return children;
};
