### Roadmap

- JavaScript Knowledge

function App() {

const [color, setColor] = React.useState(null);

let cssClass;

if(color === 'green'){
cssClass = 'highlight-green';
}else if(color === 'red'){
cssClass = 'highlight-red';
}

return (
<div id="app">
<h1 className={cssClass} >CSS is great!</h1>
<menu>
<li>
<button onClick={()=> setColor('green')} >Yes</button>
</li>
<li>
<button onClick={()=> setColor('red')}>No</button>
</li>
</menu>
</div>
);
}

export default App;
