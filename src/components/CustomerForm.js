import React, { Component } from 'react';
import { Position, Button } from "@blueprintjs/core";
import { Field, reduxForm } from 'redux-form';
import {FieldInput} from "../ui";

const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Укажите имя'
    }

    if (!values.email) {
        errors.email = 'Укажите Email'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Неправильный формат Email'
    }

    if (!values.phone) {
        errors.phone= 'Укажите номер телефона'
    }

    return errors;
}

class CustomerForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit} id={'customer-form'}>
                <Field
                    label={'Имя и фамилия'}
                    name={'name'}
                    component={FieldInput}/>

                <Field
                    label={'Телефон'}
                    name={'phone'}
                    type={'tel'}
                    placeholder={'Номер телефона с кодом страны'}
                    component={FieldInput}/>

                <Field
                    label={'Email'}
                    name={'email'}
                    type={'email'}
                    placeholder={'Email'}
                    component={FieldInput}/>

                <Field
                    label={'Примечание'}
                    name={'description'}
                    component={FieldInput}/>

            </form>
        );
    }
}


export default reduxForm({
    form: 'customer-form',
    validate
})(CustomerForm);