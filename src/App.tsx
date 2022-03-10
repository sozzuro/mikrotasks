import React, {useState} from 'react';
import Body from './hw/hw1/Body';
import Header from "./hw/hw1/Header";
import Footer from "./hw/hw1/Footer";
import NewComponent from "./hw/hw2/NewComponent";
import Button from "./hw/hw3/Button";
import FilterComponent from "./hw/hw5/FilterComponent";

export type FilterType = 'all' | 'dollar' | 'ruble';

function App() {

    const students = [
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ]

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    const Button1foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address);
    }

    const Button2foo = (subscriber: string) => {
        console.log(subscriber);
    }

    const Button3foo = () => {
        console.log('Im stupid button');
    }

    let [a, setA] = useState(1);

    const onClickHandler = () => {
        setA(++a);
        console.log(a);
    }

    const onClickHandlerZero = () => {
        setA(0);
        console.log(a);
    }

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState('all');

    let currentMoney = money;

    if (filter === 'dollar') {
        currentMoney = money.filter((el) => el.banknots === 'Dollars')
    }
    if (filter === 'ruble') {
        currentMoney = money.filter((el) => el.banknots === 'RUBLS')
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton);
    }

    return (
        <div>
            {/*FIRST TASK*/}
            {/*<Header title={'NEW HEADER'}/>*/}
            {/*<Body titleForBody={'NEW BODY'}/>*/}
            {/*<Footer titleForFooter={'NEW FOOTER'}/>*/}

            {/*SECOND TASK*/}
            {/*<NewComponent students={students} topCars={topCars}/>*/}

            {/*THIRD TASK*/}
            {/*<Button name={'MyYouTubeChanel-1'} callback={() => Button1foo('Im Vasya', 21, 'Live in Minsk')}/>*/}
            {/*<Button name={'MyYouTubeChanel-2'} callback={() => Button2foo('Im Vanya')}/>*/}
            {/*<Button name={'stupid button'} callback={Button3foo}/>*/}

            {/*Fourth TASK*/}
            {/*<h1>{a}</h1>*/}
            {/*<button onClick={onClickHandler}>number</button>*/}
            {/*<button onClick={onClickHandlerZero}>0</button>*/}

            {/*Fifth TASK*/}
            {/*<FilterComponent currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>*/}

            {/*Sixth TASK*/}
        </div>
    );
}

export default App;
