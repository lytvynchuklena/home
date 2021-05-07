import './character.style.css';
function CharacterComponent(props) {
	let cls = '';
	if (props.description === 'liza') {
		cls = 'liza-class';
	}else if(props.description === 'bart') {
		cls = 'bart-class';
	}else {
		cls = 'marge-class';
	}
	return <div className={cls}>
		<h2>{props.description}</h2>
		<img src={props.image} alt=""/>
	</div>
}
export default CharacterComponent;