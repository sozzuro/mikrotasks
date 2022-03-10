import React, {useState} from 'react';
import Input from "./components/Input";
import Button from "./components/Button";

type messageType = {
    message: string
}

const App = () => {

    const [messages, setMessage] = useState<Array<messageType>>([
        {'message': 'message1'},
        {'message': 'message2'},
        {'message': 'message3'}
    ])

    const [title, setTitle] = useState<string>('')

    const addMessage = (title: string) => {
        setMessage([{'message': title}, ...messages])
        setTitle('')
    }


    return (
        <div>
            <Input title={title} setTitle={setTitle}/>
            <Button title={'+'} callback={() => addMessage(title)}/>

            {
                messages.map((m) => {
                    return (
                        <div key={Math.random()}>{m.message}</div>
                    )
                })
            }
        </div>
    );
};

export default App;