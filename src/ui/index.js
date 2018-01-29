import React, {Component} from "react";
import { DateRangeInput, DateRangePicker, TimePicker} from "@blueprintjs/datetime";
import { Switch } from "@blueprintjs/core";
import FieldDateTimeRangePicker from './FieldDateTimeRangePicker';

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
    FieldSelect,
    FieldDateRangePicker,
    FieldSwitch,
    FieldTimePicker,
    FieldDateTimeRangePicker
};