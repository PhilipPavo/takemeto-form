import React, { Component } from 'react';
import {Dialog, Button} from '@blueprintjs/core';
import CustomerForm from './CustomerForm';

class CustomerDialog extends Component {
    render() {
        return (
            <div>
                <Dialog
                    className={'customer-dialog'}
                    iconName="user"
                    isOpen={this.props.isOpen}
                    onClose={this.props.onClose}
                    title="Контактная информация">

                    <div className="pt-dialog-body">
                        <CustomerForm onSubmit={this.props.onSubmitCustomer}/>
                    </div>
                    <div className="pt-dialog-footer">
                        <div className="pt-dialog-footer-actions">
                            <Button text="Отправить заказ" type={'submit'} form={'customer-form'}/>
                        </div>
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default CustomerDialog;