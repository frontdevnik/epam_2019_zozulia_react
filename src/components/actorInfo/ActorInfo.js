import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './actorInfo.module.scss';

function ActorInfo(props) {
  const { name, imgUrl, biography } = props.actor;

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
  actor: PropTypes.func,
};

const mapStateToProps = state => ({
  actor: state.actorReducer.actor,
});

export default connect(mapStateToProps)(ActorInfo);
