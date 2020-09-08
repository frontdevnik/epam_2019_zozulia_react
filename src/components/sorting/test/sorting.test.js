import React from 'react';
import {Sorting} from '../Sorting';
import {sortingProps} from './stubProps';
import createMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = createMockStore();

describe('<Sorting />', () => {
    let component;

    beforeEach(() => {
        component = mount(<Provider store={mockStore()}><Sorting {...sortingProps} /></Provider>);
    });

    it('should render correctly', () => {
        expect(component.html()).toMatchSnapshot();
    });

    it('should render title', () => {
        expect(component.find('h3').text()).toBe(sortingProps.sort_title);
    });

    it('should render sort by likes button', () => {
        expect(component.find('button').at(0).text()).toBe(sortingProps.sort_by_likes);
    });

    it('should call sortByLikes on click sort by likes button', () => {
        const button = component.find('button').at(0);
        button.simulate('click');
        expect(sortingProps.sorByLikes).toHaveBeenCalled();
    });

    it('should render sort by rating button', () => {
        expect(component.find('button').at(1).text()).toBe(sortingProps.sort_by_rating);
    });

    it('should call sortByRating on click sort by rating button', () => {
        const button = component.find('button').at(1);
        button.simulate('click');
        expect(sortingProps.sortByRating).toHaveBeenCalled();
    });

    it('should render reset sorting button', () => {
        expect(component.find('button').at(2).text()).toBe(sortingProps.sort_reset);
    });

    it('should call resetSorting on click reset sorting button', () => {
        const button = component.find('button').at(2);
        button.simulate('click');
        expect(sortingProps.resetSorting).toHaveBeenCalled();
    });
})
