import {Router} from '@reach/router'
import About from './pages/about';
import Home from './pages/Home';
import Help from './pages/Help'

function App() {
	return (
		<Router>
			<Home path='/'/>
			<About path='/about'/>
			<Help path='/help'/>
		</Router>
	);
}

export default App;

