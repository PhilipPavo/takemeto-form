import React, { Component } from 'react';
import {Dialog, Button} from '@blueprintjs/core';

class OrderSuccessDialog extends Component {
    render() {
        return (
            <div>
                <Dialog
                    className={'customer-dialog'}
                    isOpen={this.props.isOpen}
                    onClose={this.props.onClose}
                    title="Заказ успешно отправлен">

                    <div className="pt-dialog-body">
                        <div className="content" dangerouslySetInnerHTML={{__html: this.props.content}}></div>
                    </div>
                    <div className="pt-dialog-footer">
                        <div className="pt-dialog-footer-actions">
                            <Button onClick={this.props.onClose} text="Готово" />
                        </div>
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default OrderSuccessDialog;