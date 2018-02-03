import React, { Component } from 'react';
import {OrderForm, AutoList, CustomerDialog} from '../components/index';
import { getFormValues } from 'redux-form';
import {connect} from 'react-redux';
import {ORDER_OPTIONS_ENUM} from "../data";
import moment from 'moment';

class OrderPage extends Component {
    state: {
        basicPrice: number,
        days: number,
        isOpenCustomerDialog: boolean,
        selectedAuto: Object
    }

    constructor(props){
        super(props);

        this.state = {
            basicPrice: 0,
            days: 0,
            isOpenCustomerDialog: false,
            selectedAuto: null
        }
    }

    initialFormValues = {
        city_from: 1,
        city_to: 1,
        date_range: {from: new Date(), to: new Date()},
        time_to: null,
        time_from: null
    };

    onFormChange(values){
        let price = 0, days = 0;

        for(const option in ORDER_OPTIONS_ENUM){
            if(values[option]){
                price += ORDER_OPTIONS_ENUM[option].price;
            }
        }

        const dateFrom = moment(values.date_range.from),
                dateTo = moment(values.date_range.to);

        if(dateFrom.isValid() && dateTo.isValid()){
            days = Math.abs(dateFrom.diff(dateTo, 'days')) + 1;
        }else{
            days = 1;
        }

        this.setState({
            basicPrice: price,
            days
        });
    }

    sendOrder(values){
        console.log(values);
    }

    componentWillReceiveProps(nextProps){
        this.onFormChange(nextProps.formValues)
    }

    onSelectAuto(auto){
        this.setState({
            isOpenCustomerDialog: true,
            selectedAuto: auto
        })
    }

    onCloseCustomerDialog(){
        this.setState({
            isOpenCustomerDialog: false
        })
    }

    onSubmitCustomer(customer){
        let order = {
            customer,
            ...this.props.formValues,
            auto: this.state.selectedAuto
        }

        this.sendOrder(order);
    }

    render() {
        return (
            <React.Fragment>
                <CustomerDialog
                    onSubmitCustomer={(values) => this.onSubmitCustomer(values)}
                    isOpen={this.state.isOpenCustomerDialog}
                    onClose={() => this.onCloseCustomerDialog()}/>

                <div>
                    <div className={'order-container grid-3 s-grid-12 pad-3'}>
                        <OrderForm
                            initialValues={this.initialFormValues}/>
                    </div>
                    <div className="grid-3 s-grid-12 pad-3"/>
                    <div className="grid-9 s-grid-12 pad-3">
                        <AutoList onSelectAuto={(auto) => this.onSelectAuto(auto)} {...this.state}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: State) => {
    return {
        formValues: getFormValues('order-form')(state),
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(
    OrderPage
);