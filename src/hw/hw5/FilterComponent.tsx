import React from 'react';
import Button from "../hw3/Button";
import {FilterType} from "../../App";

type MoneyType = {
    banknots: string,
    value: number,
    number: string
}

type FilterComponentPropsType = {
    currentMoney: Array<MoneyType>,
    onClickFilterHandler: (value: FilterType) => void
}

const FilterComponent = (props: FilterComponentPropsType) => {
    return (
        <div>
            <ul>
                {
                    props.currentMoney.map((el, index) => {
                        return (
                            <li key={index}>
                                <span>{el.banknots} </span>
                                <span>{el.value} </span>
                                <span>{el.number}</span>
                            </li>
                        )
                    })
                }
            </ul>
            <div style={{marginLeft: '35px'}}>
                <Button name={'all'} callback={() => props.onClickFilterHandler('all')}/>
                <Button name={'Dollars'} callback={() => props.onClickFilterHandler('dollar')}/>
                <Button name={'RUBLS'} callback={() => props.onClickFilterHandler('ruble')}/>
            </div>
        </div>
    );
};

export default FilterComponent;