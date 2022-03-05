import React from 'react';
import Body from './hw/hw1/Body';
import Header from "./hw/hw1/Header";
import Footer from "./hw/hw1/Footer";
import NewComponent from "./hw/hw2/NewComponent";
import Button from "./hw/hw3/Button";

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

    return (
        <div>
            {/*FIRST TASK*/}
            {/*<Header title={'NEW HEADER'}/>*/}
            {/*<Body titleForBody={'NEW BODY'}/>*/}
            {/*<Footer titleForFooter={'NEW FOOTER'}/>*/}

            {/*SECOND TASK*/}
            {/*<NewComponent students={students} topCars={topCars}/>*/}

            {/*THIRD TASK*/}
            <Button name={'MyYouTubeChanel-1'} callback={() => Button1foo('Im Vasya', 21, 'Live in Minsk')}/>
            <Button name={'MyYouTubeChanel-2'} callback={() => Button2foo('Im Vanya')}/>
            <Button name={'stupid button'} callback={Button3foo}/>
        </div>
    );
}

export default App;
