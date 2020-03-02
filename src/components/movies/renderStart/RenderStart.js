import React from 'react';
import PropTypes from 'prop-types';
import { useOfContext } from '../../../context';
import style from '../ratingStart/ratingStart.module.scss';

function RenderStar(props) {
  const { setRatingStart } = useOfContext();
  const { star, id } = props;

  const stars = [];

  let starsCount = star;

  for (let i = 1; i < 6; i++) {
    starsCount > 0
      ? stars.push(<div key={i} onClick={setRatingStart(id, i)} className={style.starActive} />)
      : stars.push(<div key={i} onClick={setRatingStart(id, i)} className={style.star} />);
    starsCount--;
  }

  return stars;
}

RenderStar.propTypes = {
  id: PropTypes.number.isRequired,
  star: PropTypes.number.isRequired
}

export default RenderStar;
