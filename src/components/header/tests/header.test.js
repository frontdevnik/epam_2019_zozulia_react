import React from 'react';
import {useSelector} from "react-redux";
import {TestHeader} from "../Header";
import store from '../../../store';
import {headerProps} from "./stubProps";

const setUp = props => shallow(<TestHeader {...props} />)

jest.mock('react-redux', () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn()
}));

describe('<Header />', () => {
    let component;

    beforeEach(() => {
        component = setUp(<TestHeader {...headerProps}/>);
        // useSelector.mockImplementation(state => store.getState())
    })

    it('should render correctly', () => {
        expect(component.html).toMatchSnapshot()
    });
})
