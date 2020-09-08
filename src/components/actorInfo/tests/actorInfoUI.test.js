import React from 'react';
import {TestActorInfoUI} from "../ActorInfoUI";
import {actorInfoProps} from "./stabProps";
import styles from "../actorInfo.module.scss";

const setUp = (props) => shallow(<TestActorInfoUI {...props} />);

describe('<ActorInfoUI />', () => {
    let component;

    beforeEach(() => {
        component = setUp(actorInfoProps);
    })

    it('should render correctly', () => {
        expect(component.html()).toMatchSnapshot()
    })
    it('should render img correctly', () => {
        expect(component.find('img').prop('src')).toBe(actorInfoProps.actor.imgUrl);
        expect(component.find('img').prop('alt')).toBe(actorInfoProps.actor.name);
    })
    it('should render actor name correctly', () => {
        const node = component.find(`.${styles.actorInfo}`);
        expect(node.first().text()).toBe(`${actorInfoProps.actor_name}: ${actorInfoProps.actor.name}`);
    })
    it('should render actor biography correctly', () => {
        const node = component.find(`.${styles.actorInfo}`);
        expect(node.last().text()).toBe(`${actorInfoProps.actor_biography}: ${actorInfoProps.actor.biography}`);
    })
});
