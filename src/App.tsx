import React from 'react';
import Body from './hw/hw1/Body';
import Header from "./hw/hw1/Header";
import Footer from "./hw/hw1/Footer";

function App() {
    return (
        <div>
            <Header title={'NEW HEADER'}/>
            <Body titleForBody={'NEW BODY'}/>
            <Footer titleForFooter={'NEW FOOTER'}/>
        </div>
    );
}

export default App;
