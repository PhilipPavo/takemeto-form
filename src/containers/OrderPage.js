import React, { Component } from 'react';
import {OrderForm, AutoList, CustomerDialog, OrderSuccessDialog} from '../components/index';
import { getFormValues } from 'redux-form';
import {connect} from 'react-redux';
import {ORDER_OPTIONS_ENUM} from "../data";
import moment from 'moment';
import Ajax from '../utils/Ajax';

class OrderPage extends Component {
    state: {
        basicPrice: number,
        days: number,
        isOpenCustomerDialog: boolean,
        selectedAuto: Object,
        isOpenSuccessDialog: boolean,
        successDialogContent: string
    }

    constructor(props){
        super(props);

        this.state = {
            basicPrice: 0,
            days: 0,
            isOpenCustomerDialog: false,
            selectedAuto: null,
            isOpenSuccessDialog: false,
            successDialogContent: ''
        }
    }

    initialFormValues = {
        city_from: '1',
        city_to: '1',
        date_range: {from: new Date(), to: new Date()},
        time_to: new Date(),
        time_from: new Date(),
        option_gps: false,
        option_child_buster: false,
        option_child_chair: false,
        option_wifi: false
    };

    onFormChange(values){
        let price = 0, days = 0;

        for(const option in ORDER_OPTIONS_ENUM){
            if(values[option]){
                price += ORDER_OPTIONS_ENUM[option].price;
            }
        }

        const dateFrom = moment(values.date_range.from).set({
            hour: values.time_from.getHours(),
            minute: values.time_from.getMinutes()
        });

        const dateTo = moment(values.date_range.to).set({
            hour: values.time_to.getHours(),
            minute: values.time_to.getMinutes()
        });

        if(dateFrom.isValid() && dateTo.isValid()){
            days = (Math.abs(dateFrom.diff(dateTo, 'days'))) + 1;
        }else{
            days = 1;
        }

        this.setState({
            basicPrice: price,
            days
        });
    }

    sendOrder(order){
        Ajax.post('//134.0.112.194:8000/api/order', {
            order
        }).then(data => {
            console.log(data.body);
            this.onCloseCustomerDialog();
            this.setState({
                isOpenSuccessDialog: true,
                successDialogContent: data.body.mail
            });
        }).catch(error => {
            throw new Error(error.message);
        });
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


    onCloseSuccessDialog(){
        this.setState({
            isOpenSuccessDialog: false
        })
    }

    prepareOrder(order, customer, auto){
        order.date_range.from = moment(order.date_range.from).set({
            hour: order.time_from.getHours(),
            minute: order.time_from.getMinutes()
        }).format();

        order.date_range.to = moment(order.date_range.to).set({
            hour: order.time_to.getHours(),
            minute: order.time_to.getMinutes()
        }).format();

        const orderValues = {
            ...order,
            customer,
            auto: auto.id
        };

        delete orderValues['time_from'];
        delete orderValues['time_to'];

        return orderValues;
    }

    onSubmitCustomer(customer){
        this.sendOrder(this.prepareOrder(this.props.formValues, customer, this.state.selectedAuto));
    }

    render() {
        return (
            <React.Fragment>
                <OrderSuccessDialog
                    isOpen={this.state.isOpenSuccessDialog}
                    onClose={() => this.onCloseSuccessDialog()}
                    content={this.state.successDialogContent}
                />
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