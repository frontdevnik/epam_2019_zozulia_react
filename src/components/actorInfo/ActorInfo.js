import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchingActor, removeActor } from './actions';
import Loading from '../loading/Loading';
import Error from '../error/Error';
import styles from './actorInfo.module.scss';

function ActorInfo(props) {
  const { id } = useParams();
  const { fetchingActor, removeActor, actor, loading, error } = props;

  useEffect(() => {
    fetchingActor(id);

    return () => {
      removeActor();
    }
  }, [])

  if (loading && !actor) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  const { name, imgUrl, biography } = actor;

  return (
    <div className={styles.aboutActor}>
      <img className={styles.profileImg} alt={name} src={imgUrl} />
      <div>
        <p className={styles.actorInfo}>
          <b>Name:</b>
          {name}
        </p>
        <p className={styles.actorInfo}>
          <b>Biography:</b>
          {biography}
        </p>
      </div>
    </div>
  );
}

ActorInfo.propTypes = {
  actor: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null]),
  ]),
};

const mapStateToProps = state => ({
  actor: state.actorReducer.actor,
  loading: state.actorReducer.loading,
  error: state.actorReducer.error,
});

const mapDispatchToProps = {
  fetchingActor,
  removeActor
};

export default connect(mapStateToProps, mapDispatchToProps)(ActorInfo);
