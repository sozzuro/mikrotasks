import React from 'react';

type HeaderPropsType = {
    title: string
}

const Header = (props: HeaderPropsType) => {
    return (
        <div>
            {props.title}
        </div>
    );
};

export default Header;