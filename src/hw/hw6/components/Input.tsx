import React, {ChangeEvent} from 'react';

type inputPropsType = {
    title: string,
    setTitle: (title: string) => void
}

const Input = (props: inputPropsType) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }

    return (
        <input value={props.title} onChange={onChangeInputHandler}></input>
    );
};

export default Input;