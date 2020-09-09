import React from 'react';
import { useSelector } from 'react-redux';

import ActorInfo from '../../components/actorInfo/ActorInfo';
import Header from '../../components/header';

export default () => {
  const actor = useSelector((state) => state.actorReducer.actor);
  const loading = useSelector((state) => state.actorReducer.loading);
  const error = useSelector((state) => state.actorReducer.error);

  return (
    <>
      <Header />
      <ActorInfo actor={actor} loading={loading} error={error} />
    </>
  );
};
