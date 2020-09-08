import React from 'react';
import EditFilm from "../EditFilm";
import EditFilmForm from '../EditFilmForm'
import {
    editFilmProps
} from "./stubProps";

jest.mock('react-router', () => ({
    useHistory: jest.fn(() => ({push: jest.fn()})),
}))

const setUp = props => shallow(<EditFilm {...props} />);

describe('<EditFilm />', () => {
    it('should render EditFilmForm component', () => {
        const component = setUp(editFilmProps);
        expect(component.find(EditFilmForm)).toHaveLength(1)
    });
});
