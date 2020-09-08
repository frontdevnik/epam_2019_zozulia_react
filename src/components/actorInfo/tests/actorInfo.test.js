import React from 'react';
import {useDispatch} from "react-redux";
import Loading from "../../loading/Loading";
import Error from "../../error/Error";
import ActorInfo from "../ActorInfo";
import ActorInfoUI from "../ActorInfoUI";

import {
    loadingProps,
    errorProps,
    actorProps,
    actorId
} from "./stabProps";

jest.mock('../../../features/actor/actions', () => ({
    fetchingActor: jest.fn(),
    removeActor: jest.fn()
}))
import { fetchingActor } from "../../../features/actor/actions";

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(() => (f) => f)
}));
jest.mock('react-router', () => ({
    useParams: jest.fn(() => ({id: 1})) // id: 1 = actorId from stabProps
}))

const setUp = (props) => shallow(<ActorInfo {...props} />);

describe('<ActorInfo />', () => {
    it('should call fetchActors on componentDidMount', () => {
        mount(<ActorInfo {...actorProps} />);
        expect(useDispatch).toHaveBeenCalled();
        expect(fetchingActor).toHaveBeenCalled();
        expect(fetchingActor).toHaveBeenCalledWith(actorId);
    });
    it('should render loading component', () => {
        const component = setUp(loadingProps);
        expect(component.equals(<Loading />)).toBeTruthy()
    })
    it('should render error component', () => {
        const component = setUp(errorProps);
        expect(component.equals(<Error />)).toBeTruthy()
    })
    it('should render <ActorInfo /> component', () => {
        const component = setUp(actorProps);
        expect(component.matchesElement(<ActorInfoUI />)).toBeTruthy();
    })
})
