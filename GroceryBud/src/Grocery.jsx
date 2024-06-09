import React, { useState } from 'react'

function Grocery() {

    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState([]);
    const [completedTask, setCompletedTask] = useState([]);

    // console.log(inputValue);
    // console.log(tasks);

    function handleSubmit(e) {
        e.preventDefault();

        if (inputValue.trim() === "") {
            alert("🙄 Please enter an item");
            return;
        }

        let obj = {};
        obj.task = inputValue;
        obj.id = Date.now();

        

        setTasks([...tasks, obj]);
        setInputValue("")
    }

    function handleDelete(idToDelete) {
        setTasks(
            tasks.filter((task) => {
                return task.id !== idToDelete;
            })
        )
    }

    function handleCompleted(idToComplete) {
        console.log(idToComplete);
        if (completedTask.includes(idToComplete)) {
            setCompletedTask(completedTask.filter(id => id !== idToComplete));
        } else {
            setCompletedTask([...completedTask, idToComplete]);
        }

    }



    return (
        <>
            <div className='container'>
                <div className='groceryContainer'>
                    <form action="" onSubmit={handleSubmit}>
                        <h1>🛒 Grocery Bud</h1>
                        <input type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}

                        />
                        <button>Add items</button>
                    </form>

                    <ul className='groceryList'>
                        {
                            tasks.map((item, index) => {
                                return <li key={index} >
                                    <div className='listname' style={completedTask.includes(item.id) ? { textDecoration: "line-through" } : { textDecoration: "none" }}>
                                        <input type="checkbox" onClick={() => handleCompleted(item.id)} />
                                        {item.task}
                                    </div>

                                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                                </li>
                            })
                        }
                    </ul>
                </div>

            </div>

        </>
    )
}

export default Grocery