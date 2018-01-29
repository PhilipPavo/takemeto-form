import React, { Component } from 'react';
import { Button, Position, Tooltip } from "@blueprintjs/core";
import {AUTOS_LIST} from '../data';

class AutoItem extends Component {
    state: {
        price: number
    }

    constructor(props){
        super(props);

        this.state = {
            price: props.price
        }
    }

    componentWillReceiveProps(nextProps){
        let price = nextProps.price;

        price += nextProps.basicPrice;

        this.setState({
            price
        });
    }

    render(){
        return (
            <div className={'auto-item'}>
                <div className={'image'} style={{backgroundImage: `url(${this.props.image})`}}/>
                <div className={'title'}>
                    <h2>{this.props.title} <small>({this.props.transmission})</small></h2>
                </div>
                <div className={'description'}>
                    {this.props.passengers} пассажиров - {this.props.baggage} багажных мест
                </div>
                <div className={'options'}>
                    {this.props.options.map((option, index) => {
                        return (
                            <Tooltip
                                className={'options-option'}
                                key={index}
                                content={<span>{option.title}</span>}
                                position={Position.BOTTOM}
                                inline={true}>

                                <Button iconName={option.icon}/>
                            </Tooltip>
                        )
                    })}
                </div>
                <div className={'price'}>

                    {this.state.price} € / день
                </div>
                <div className={'actions'}>
                    <Button intent={'warning'}>Забронировать</Button>
                </div>
            </div>
        )
    }
}

class AutoList extends Component {
    state: {
        autos: Array
    };

    constructor(props){
        super(props);

        this.state = {
            autos: []
        }
    }

    loadAutos(){
        const auto = AUTOS_LIST[0];

        const autos = [];
        autos.push(auto);
        autos.push(auto);
        autos.push(auto);
        autos.push(auto);
        autos.push(auto);
        autos.push(auto);
        autos.push(auto);
        this.setState({
            autos
        })
    }

    componentDidMount(){
        this.loadAutos();
    }

    render() {
        return (
            <div className={'auto-list'}>
                <span>Выберите тип автомобиля</span>
                <hr/>
                {this.state.autos.map((auto, index) => {
                    return (
                        <div key={index} className={'grid-3 m-grid-6 s-grid-12'}>
                            <AutoItem {...this.props} {...auto}/>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default AutoList;