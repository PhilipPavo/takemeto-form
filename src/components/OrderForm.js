import React, { Component } from 'react';
import { Button, Position} from "@blueprintjs/core";
import { Field, reduxForm } from 'redux-form';
import { FieldSelect, FieldDateRangePicker, FieldSwitch, FieldTimePicker, FieldDateTimeRangePicker} from '../ui';
import {CITIES_LIST, ORDER_OPTIONS_ENUM} from '../data';

const CitiesValues = CITIES_LIST.map(city => {
    return {
        ...city,
        value: city.id
    }
});

class OrderForm extends Component {
    renderOptions(){
        const options = [];

        for(const name in ORDER_OPTIONS_ENUM){
            const option = ORDER_OPTIONS_ENUM[name];

            options.push(<Field label={option.label} name={name} component={FieldSwitch} />);
        }

        return options;
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <span>Информация о заказе</span>
                <hr/>
                <Field label={'Выберите аэропорт'} name={'city_from'} options={CitiesValues} component={FieldSelect}/>
                <Field label={'Место возврата'} name={'city_to'} options={CitiesValues} component={FieldSelect}/>

                <Field position={Position.RIGHT} label={'Дата встречи и возврата'} name={'date_range'} component={FieldDateTimeRangePicker}/>
                <div className="grid-6 time-picker-container">
                    <Field name={'time_from'} component={FieldTimePicker} showArrowButtons={true}/>
                </div>
                <div className="grid-6 time-picker-container">
                    <Field name={'time_to'} component={FieldTimePicker} showArrowButtons={true}/>
                </div>

                {this.renderOptions().map((field, index) => {
                    return(
                        <div key={index} className="grid-6 options-container">
                            {field}
                        </div>
                    );

                })}
            </form>
        );
    }
}


export default reduxForm({
    form: 'order-form'
})(OrderForm);