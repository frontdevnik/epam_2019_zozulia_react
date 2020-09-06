import React from "react";
import { shallow } from "enzyme";
import ChosenFilmUI from "../ChosenFilmUI";
import styles from "./chosenFilm.module.scss";

describe("<ChosenFilmUI />", () => {
  let wrapper;

  const props = {
    editMovie: jest.fn(),
    removeMovieById: jest.fn(),
    removeMovie: jest.fn(() => props.removeMovieById),
    choosenFilm_edit: "Edit",
    choosenFilm_delete: "Delete",
    actors: [],
    choosenFilm_likes: "Likes",
    choosenFilm_director: "Director",
    choosenFilm_actors: "Actors",
    choosenFilm_genres: "Genres",
    choosenFilm_description: "Description",
    movie: {
      title: "Title",
      posterUrl: "posterUrl",
      stars: "4",
      likes: "3",
      genres: ["Genres"],
      director: "Director",
      description: "Description",
      id: 1,
    },
  };

  beforeEach(() => {
    wrapper = shallow(<ChosenFilmUI {...props} />).dive();
    jest.clearAllMocks();
  });

  it("should render correctly", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("should invoke editMovie after button click", () => {
    const button = wrapper.find("button").at(0);
    button.simulate("click");
    expect(props.editMovie).toBeCalledTimes(1);
    expect(button.text()).toEqual(props.choosenFilm_edit);
  });

  it("should invoke removeMovie after button click", () => {
    const button = wrapper.find("button").at(1);
    button.simulate("click");
    expect(props.removeMovie()).toBeCalledTimes(1);
    expect(button.text()).toEqual(props.choosenFilm_delete);
  });
});
