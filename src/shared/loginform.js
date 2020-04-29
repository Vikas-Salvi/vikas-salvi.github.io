import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import useLogin from './useLogin';
import { AppContext } from '../App';
import { Redirect } from 'react-router-dom';
import globalService from './globalservice';
import validate from './validateLogin';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    center: {
        alignItems: 'center',
        flexDirection: 'column'
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
}));

const errorForm = {
    username: "",
    age: "",
    grade: ""
}
const LoginForm = (props) => {
    const classes = useStyles();
    //debugger;
    const { from } = props.location.state || { from: { pathname: '/' } };
    const state = useContext(AppContext);
    const { handleChange, handleSubmit, form, errors, formValidated } = useLogin(state.user, submit, validate, errorForm);

    function submit() {
        //alert('submitted');        
        globalService.authenticate()
            .then((res) => {
                state.dispatch({ type: 'login', action: form });
            });

    }

    useEffect(() => {
        console.log('LoginForm component rendering...');
    }, [state.user.isLoggedIn]);

    return (
        <React.Fragment>
            {
                state.user.isLoggedIn ?
                    (
                        <Redirect to={from}></Redirect>
                    ) :
                    (
                        <form className={`container-fluid ${formValidated ? 'was-validated' : ''}`} onSubmit={handleSubmit} noValidate>
                            <div className="form-row">
                                <div className="form-group col-12" >
                                    <input type="text"
                                        name="username" required
                                        value={form.username}
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="User Name *">
                                    </input>
                                    {
                                        errors.username ?
                                            <div className="invalid-feedback">
                                                User Name is required.
                        </div>
                                            :
                                            null
                                    }
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-12">
                                    <input type="text"
                                        name="age" required
                                        value={form.age}
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="Age *">
                                    </input>
                                    {
                                        errors.age ?
                                            <div className="invalid-feedback">
                                                Age is required.
                        </div>
                                            :
                                            null
                                    }
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-12">
                                    <input type="text"
                                        name="grade"
                                        required
                                        value={form.grade}
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="Grade *">
                                    </input>
                                    {
                                        errors.grade ?
                                            <div className="invalid-feedback">
                                                Grade is required.
                        </div>
                                            :
                                            null
                                    }
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-12">
                                    <Button type="submit" variant="contained" size="large" color="primary">Login</Button>
                                </div>
                            </div>
                        </form>
                    )
            }
        </React.Fragment>
    );

}

export default LoginForm;
