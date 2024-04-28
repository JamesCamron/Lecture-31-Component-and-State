

const UpdateIncDec = ({
    incrementValue,
    decrementValue,
    handleIncChange,
    handleDecChange
}) =>{
    return (
        <div>
            <label>Increment</label>
            <input 
            type='number'
            value={incrementValue}
            onChange={handleIncChange}
            />
            <label>Decrement</label>
            <input 
            type='number'
            value={decrementValue}
            onChange={handleDecChange}
            />
        </div>
    )
};

export default UpdateIncDec;