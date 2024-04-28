

const Buttons = ({increment,decrement})=>{
    return (
        <div>Increment
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
};

export default Buttons;