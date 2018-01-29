import React from 'react';
import {DateRangePicker} from '@blueprintjs/datetime';
import {Popover, Position, PopoverInteractionKind} from '@blueprintjs/core';
import moment from 'moment';

class FieldDateTimeRangePicker extends React.Component{

    state : {
        isOpen: bool,
        value: Object
    }

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            value: this.format(props.meta.initial.from, props.meta.initial.to)
        };

    }

    componentWillReceiveProps(nextProps){
        if(!nextProps.input.value){
            this.setState({
                value: {
                    from: '',
                    to: ''
                }
            })
        }
    }

    format(from, to){
        return {
            from: from ? moment(from).format('YYYY-MM-DD') : '',
            to: to ? moment(to).format('YYYY-MM-DD') : ''
        }
    }

    handleOnchange = (date: Array<Date>) => {
        let value = this.format(date[0], date[1]);
        this.setState({
            value: { ...value },
            isOpen: (value.from === '' || value.to === '')
        });

        if(this.props.onChange){
            this.props.onChange(value);
        }

        if(this.props.input.onChange){
            this.props.input.onChange(value);
        }

    }

    handleInteraction(newIsOpenState: boolean) {
        this.setState({isOpen: newIsOpenState});
    }

    render() {
        let {input, label, meta: {touched, error}} = this.props;

        let popoverContent = (<DateRangePicker shortcuts={false} value={this.props.value} onChange={this.handleOnchange} allowSingleDayRange={true} />);

        return (
            <Popover
                content={popoverContent}
                className='daterange-popover'
                isOpen={this.state.isOpen}
                position={this.props.position ? this.props.position : Position.BOTTOM}
                useSmartArrowPositioning={false}
                interactionKind={PopoverInteractionKind.CLICK}
                onInteraction={(state) => this.handleInteraction(state)}
            >
                <div className="ls-form ls-daterange">
                    <label
                        className={'pt-label'}
                        htmlFor={input.name}>
                        {label}

                        <input
                            type="input" name={input.name}
                            value={this.state.value.from + ' - ' + this.state.value.to}
                            readOnly={true}
                        />
                        {this.state.isOpen ? (
                            <a className="fa fa-times clear pt-popover-dismiss" href="javscript:void(0)" />
                        ) : (
                            <span className="fa fa-calendar" />
                        )}
                        {touched && error && <span className="ls-error">{error}</span>}
                    </label>
                </div>
            </Popover>
        );
    }
}

export default FieldDateTimeRangePicker;