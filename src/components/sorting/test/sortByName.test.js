import React from 'react';
import { Provider } from 'react-redux';
import { reducer  as formReducer } from 'redux-form';
import { combineReducers, createStore } from 'redux';
import SortByName from '../SortByName';
import {sortByNameProps} from "./stubProps";

describe('<SortByName />', () => {
    let component;

    beforeEach(() => {
        const store = createStore(combineReducers({ form: formReducer }));
        component = mount(<Provider store={store}><SortByName {...sortByNameProps} /></Provider>)
    })

    it('should render button', () => {
        expect(component.find('button')).toHaveLength(1);
    });

    it('should render input with right placeholder', () => {
        expect(component.find('input').prop('placeholder')).toBe(sortByNameProps.placeholder);
    });

    it('should call onSubmit after sending form', () => {
        const button = component.find('button');
        button.simulate('click');
        expect(sortByNameProps.handleSubmit).toHaveBeenCalled();
    });
})
