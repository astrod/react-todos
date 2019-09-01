import React, { useState } from "react"

const TodoInput: React.FunctionComponent = props => {

    const [inputValue, setInputValue] = useState<string>("");

    const handlePress = (e) => {

        const value = e.target.value;

        if (value === "undefined" || value === "") {
            return;
        }
        if (e.key !== 'Enter') {
            return;
        }

        props.addTodo(value);
        setInputValue("");
    };

    const handleChange = (e) => {
        return setInputValue(e.target.value);
    };

    return (
        <div>
            <div>
                <header className="header">
                    <h1>todos</h1>
                    <input className="new-todo" placeholder="What needs to be done?" onKeyPress={handlePress} onChange={handleChange} value={inputValue} />
                </header>
            </div>
        </div>
    );
};

export default TodoInput