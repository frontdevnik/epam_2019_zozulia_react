import React from 'react';
import {useSelector} from "react-redux";
import {
    BrowserRouter
} from "react-router-dom";
import {TestHeader} from "../Header";
import {headerProps} from "./stubProps";
import styles from '../header.module.scss';


const setUp = props => mount(<BrowserRouter><TestHeader {...props} /></BrowserRouter>);

jest.mock('react-redux', () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
}));

describe('<Header />', () => {
    describe('should render correctly when user is not login', () => {
        let component;

        beforeEach(() => {
            useSelector.mockReturnValue(false);
            component = setUp(headerProps);
        });

        it('should render', () => {
            expect(component.html()).toMatchSnapshot();
        });

        it('should render registration link', () => {
            expect(component.find('a').first().text()).toBe(headerProps.header_registration_link);
        });

        it('should render login link', () => {
            expect(component.find('a').last().text()).toBe(headerProps.header_login_link);
        });
    });

    describe('should render correctly when user login', () => {
        let component;

        beforeEach(() => {
            useSelector.mockReturnValue(true);
            component = setUp(headerProps);
        });

        it('should render', () => {
            expect(component.html()).toMatchSnapshot();
        });

        it('should render home link', () => {
            expect(component.find('a').text()).toBe(headerProps.header_home_link);
        });

        it('should render logout link', () => {
            expect(component.find('p').text()).toBe(headerProps.header_logout_link);
        });

        it('should render title', () => {
            expect(component.find('h1').text()).toBe(headerProps.header_title);
        });
    })
})
