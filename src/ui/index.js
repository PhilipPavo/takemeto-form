import React, {Component} from "react";
import { DateRangeInput, DateRangePicker, TimePicker} from "@blueprintjs/datetime";
import { Switch } from "@blueprintjs/core";
import FieldDateTimeRangePicker from './FieldDateTimeRangePicker';

class FieldInput extends Component{
    render(){
        const {label, placeholder, type, input, meta: { touched, error, warning}} = this.props;

        const inputProps = {
            placeholder: placeholder || label,
            type,
            ...input
        };

        let className = ['pt-large', 'pt-fill', 'pt-input'];
        let intent = '';
        let infoText = '';

        if(touched){
            if(error){
                intent = 'pt-intent-danger';
            }

            if(warning){
                intent = 'pt-intent-warning';
            }

            infoText = error || warning;
        }

        className.push(intent);

        return (
            <div className={`pt-form-group ${intent}`}>
                <label
                    className={'pt-label'}
                    htmlFor={input.name}>
                    {label}
                    <input type={'text'} {...inputProps} id={input.name} className={className.join(' ')}/>
                </label>
                {touched && (
                    <div className={'pt-form-helper-text'}>{infoText}</div>
                )}
            </div>

        );
    }
}

class FieldSelect extends Component{
    render(){
        const {label, input, options} = this.props;

        return (
            <React.Fragment>
                <label
                    className={'pt-label'}
                    htmlFor={input.name}>
                    {label}
                    <select {...input} id={input.name}>
                        {options.map((item, index) => {
                            return (
                                <option key={index} value={item.value}>{item.label}</option>
                            )
                        })}
                    </select>
                </label>
            </React.Fragment>
        )
    }
}



class FieldDateRangePicker extends Component{
    render(){
        const {label, input} = this.props;
        return (
            <label
                className={'pt-label'}
                htmlFor={input.name}>
                {label}

                <DateRangePicker
                    id={input.name}
                    {...input}
                />
            </label>
        )
    }
}

class FieldSwitch extends Component{
    render(){
        const {label, input, inline} = this.props;

        return(
            <Switch {...input}
                    className={'pt-large'}
                    checked={input.value}
                    label={label}
                    inline={inline} />
        )
    }
}

class FieldTimePicker extends Component{
    render(){
        const {label, input, showArrowButtons} = this.props;

        return (
            <TimePicker {...input}
                value={input.value ? input.value : null}
                showArrowButtons={showArrowButtons}/>
        )
    }
}

export {
    FieldInput,
    FieldSelect,
    FieldDateRangePicker,
    FieldSwitch,
    FieldTimePicker,
    FieldDateTimeRangePicker
};