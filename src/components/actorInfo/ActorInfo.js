import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import Error from "../error/Error";
import Loading from "../loading/Loading";
import ActorInfoUI from "./ActorInfoUI";

import { fetchingActor, removeActor } from "../../features/actor/actions";

const ActorInfo = ({ actor, loading, error }) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchingActor(id));

    return () => {
      dispatch(removeActor());
    };
  }, [dispatch, id]);

  if (loading && !actor) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return <ActorInfoUI actor={actor} />;
};

ActorInfo.propTypes = {
  actor: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    imgUrl: PropTypes.string,
    biography: PropTypes.string,
    loading: PropTypes.bool,
    error: PropTypes.object,
  }),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
};

export default ActorInfo;
