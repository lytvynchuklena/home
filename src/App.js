import './App.css';
import CharacterComponent from "./components/characterComponent";



function App() {
	return (
	<div>
		<CharacterComponent description={'bart'} image={'https://lh3.googleusercontent.com/proxy/PBtz4JDkSt8Fb_1Fih6_FAKQPzVg0ZW4uwIrV6wiadIPsfL4CN4ZoNKTOKbqqK4CeCbDxAtfR9fthcfIRnvpl4ShSNZO0PU'}/>
		<CharacterComponent description={'liza'} image={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}/>
		<CharacterComponent description={'marge'} image={'https://static.wikia.nocookie.net/theultimatesimpsons/images/0/0f/Marge-Simpson-icon.png/revision/latest?cb=20180210061653'}/>
	</div>
	);
}

export default App;


}/>