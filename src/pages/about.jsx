import {useState}  from 'react';
import Layout from '../components/layout/Layout';
import DisCount from '../components/display-count/displaytCount';
import Buttons from '../components/button/Buttons';
import UpdateIncDec from '../components/input/upIncDec';

const Contact = ()=>{

const [count, setCount] = useState(0);
const [incValue,setIncValue] = useState(10);
const [decValue,setDecValue] = useState(5);

function increment(){
    setCount(count + incValue)
}
function decrement(){
    setCount(count - decValue)
};

function handleIncChange(event){
    setIncValue(parseInt(event.target.value))
};
function handleDecChange(event){
    setDecValue(parseInt(event.target.value))
}
    return (
        <Layout>
            <h1>Hello I am Contact Page</h1>
            <DisCount count={count}/>
            <UpdateIncDec
                incValue={incValue}
                decValue={decValue}
                handleIncChange={handleIncChange}
                handleDecChange={handleDecChange}
            />
            <Buttons increment={increment} decrement={decrement}/>
        </Layout>
    )
};

export default Contact;