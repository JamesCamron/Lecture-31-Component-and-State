
import Layout from '../components/layout/Layout';
import Section from '../section/section';


const experience = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sed.',
];
const education = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sed.',
];
const Home = ()=>{
    return (
        <Layout>
            <Section title='Experience'items={experience}/>
            <Section title='Education'items={education}/>
        </Layout>
    )
};

export default Home;