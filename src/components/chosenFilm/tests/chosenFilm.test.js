import React from "react";
import {useDispatch} from "react-redux";
import Error from "../../error/Error";
import Loading from "../../loading/Loading";
import ChosenFilm from "../ChosenFilm";
import ChosenFilmUI from "../ChosenFilmUI";
import {
    loadingProps,
    errorProps,
    chosenFilmProps,
    chosenFilmId,
    chosenFilmUIProps,
} from './stubProps';

jest.mock('../../../features/choosenFilm/actions', () => ({
    fetchingMovie: jest.fn()
}))
import {fetchingMovie} from "../../../features/choosenFilm/actions";

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(() => f => f)
}))

jest.mock('react-router', () => ({
    useHistory: jest.fn(() => ({push: jest.fn()})),
    useParams: jest.fn(() => ({id: 1})) // id: 1 = chosenFilmId from stabProps
}))

const setUp = props => shallow(<ChosenFilm {...props} />);

describe('<ChosenFilm />', () => {
    it('should call fetchingMovie on componentDidMount', () => {
       mount(<ChosenFilm {...chosenFilmProps} />);
        expect(useDispatch).toHaveBeenCalled();
        expect(fetchingMovie).toHaveBeenCalled();
        expect(fetchingMovie).toHaveBeenCalledWith(chosenFilmId);
    });
    it('should render loading component', () => {
        const component = setUp(loadingProps);
        expect(component.equals(<Loading />)).toBeTruthy();
    })
    it('should render error component', () => {
        const component = setUp(errorProps);
        expect(component.equals(<Error />)).toBeTruthy();
    })
    it('should render <ChosenFilmUI /> component', () => {
        const component = setUp(chosenFilmProps);
        expect(component.matchesElement(<ChosenFilmUI />)).toBeTruthy();
    })
})
