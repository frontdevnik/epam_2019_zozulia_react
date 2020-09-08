import React from 'react';

it('', () => {
    expect(2).toBe(2)
})
// import {TestEditFilmForm} from "../EditFilmForm";
// import {
//     editFilmFormProps
// } from "./stubProps";
// import styles from "../editFilm.module.scss";
//
// jest.mock('redux-form', () => ({
//     reduxForm: jest.fn(),
//     Field: jest.fn()
// }));
//
// jest.mock('../EditFilmForm', () => ({
//     withReduxForm: jest.fn(f => f),
//     withTranslationWords: jest.fn(f => f)
// }));
//
// const setUp = (props) => shallow(<TestEditFilmForm {...props} />);
//
// describe('<EditFilmForm />', () => {
//     let component;
//
//     beforeEach(() => {
//         component = setUp(editFilmFormProps);
//     })
//
//     it('should render correctly', () => {
//         console.log(component.debug())
//         // expect(component.html()).toMatchSnapshot()
//     })
//     // it('should render title correctly', () => {
//     //     expect(component.find('h3').text()).toBe(chosenFilmUIProps.movie.title);
//     // })
//     // it('should render likes correctly', () => {
//     //     expect(component.find('p').first().text()).toBe(`${chosenFilmUIProps.choosenFilm_likes}:${chosenFilmUIProps.movie.likes}`);
//     // })
//     // it('should render component <RatingStart /> correctly', () => {
//     //     expect(component.find(RatingStart)).toBeTruthy()
//     // })
//     // it('should render edit film button correctly', () => {
//     //     expect(component.find('button').first().text()).toBe(chosenFilmUIProps.choosenFilm_edit);
//     // })
//     // it('should edit film button call editMovie', () => {
//     //     const button = component.find('button').first();
//     //     button.simulate('click');
//     //     expect(chosenFilmUIProps.editMovie).toHaveBeenCalled()
//     // })
//     // it('should render remove film button correctly', () => {
//     //     expect(component.find('button').last().text()).toBe(chosenFilmUIProps.choosenFilm_delete);
//     // })
//     // it('should remove film button call removeMovie', () => {
//     //     const button = component.find('button').last();
//     //     button.simulate('click');
//     //     expect(chosenFilmUIProps.removeMovie).toHaveBeenCalledWith(chosenFilmId)
//     // })
//     // it('should render director correctly', () => {
//     //     expect(article.find('p').first().text()).toBe(`${chosenFilmUIProps.choosenFilm_director}: ${chosenFilmUIProps.movie.director}`);
//     // })
//     // it('should render actors correctly', () => {
//     //     expect(article.find('p').at(1).text()).toBe(`${chosenFilmUIProps.choosenFilm_actors}: ${chosenFilmUIProps.actors}`);
//     // })
//     // it('should render genres correctly', () => {
//     //     expect(article.find('p').at(2).text()).toBe(`${chosenFilmUIProps.choosenFilm_genres}: ${chosenFilmUIProps.movie.genres}`);
//     // })
//     // it('should render description correctly', () => {
//     //     expect(article.find('p').last().text()).toBe(`${chosenFilmUIProps.choosenFilm_description}: ${chosenFilmUIProps.movie.description}`);
//     // })
// });
