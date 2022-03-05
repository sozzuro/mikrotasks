import React from 'react';

type NewComponentPropsType = {
    students: Array<StudentType>,
    topCars: Array<TopCarsType>
}

type StudentType = {
    id: number,
    name: string,
    age: number
}

type TopCarsType = {
    manufacturer: string,
    model: string,
}

const NewComponent = (props: NewComponentPropsType) => {
    return (
        <div>
            <h3>First task</h3>
            <ul>
                {
                    props.students.map((el) => {
                        return (
                            <li key={el.id}>
                                <span>{el.name}</span>
                                <span>age: {el.age}</span>
                            </li>
                        )
                    })
                }
            </ul>
            <h3>Second task</h3>
            <table>
                <thead>
                <tr>
                    <th>manufacturer</th>
                    <th>model</th>
                </tr>
                </thead>

                <tbody>
                {
                    props.topCars.map((el, index) => {
                        return (
                            <tr key={++index}>
                                <td>{el.manufacturer}</td>
                                <td>{el.model}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>

    );
};

export default NewComponent;