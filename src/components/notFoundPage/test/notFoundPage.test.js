import React from 'react';
import NotFoundPage from "../NotFoundPage";
import styles from "../notFoundPage.module.scss";

describe('<NotFoundPage />', () => {
    let component;

    beforeEach(() => {
        component = shallow(<NotFoundPage />);
    })

    it('should render correctly', () => {
        expect(component.html()).toMatchSnapshot()
    })

    it('should has main class', () => {
        expect(component.find('div').hasClass(styles.main)).toBeTruthy()
    })

    it('should text has correct class', () => {
        expect(component.find('h1').hasClass(styles.text)).toBeTruthy()
    })
})
