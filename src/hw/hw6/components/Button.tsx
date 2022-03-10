import React from 'react';

type buttonPropsType = {
    title: string,
    callback: () => void
}

const Button = (props: buttonPropsType) => {

    const onClickButtonHandler = () => {
        props.callback();
    }

    return (
        <button onClick={onClickButtonHandler}>{props.title}</button>
    );
};

export default Button;