import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom';

import {allowLogin} from "../../features/login/actions";
import Registration from '../../components/registration/Registration';
import Header from '../../components/header';

import {createNewUser, getAllUsers} from "../../helpers/fetch-login-api";

export default () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [validationError, setValidationError] = useState('');

    const onSubmit = async ({name, password}) => {
        const users = await getAllUsers();

        if (!/.{3,}/.test(name)) {
            setValidationError('The name must have at least 3 characters');
            return;
        }

        if (!/^[A-Z]\w{3,}$/.test(password)) {
            setValidationError('The password must have at least 4 characters and start with a capital letter');
            return;
        }

        if (Array.isArray(users) && users.some((user) => user.name === name && user.password === password)) {
            setValidationError('User already exist');
            return;
        }

        await createNewUser(name, password);
        dispatch(allowLogin());
        history.push('/home');
    }
    return (<>
            <Header/>
            <Registration onSubmit={onSubmit} errorText={validationError}/>
        </>
    );
}
