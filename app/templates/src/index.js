import './styles/style.scss';

//webpack's hot module reloading

if (module.hot) {
	module.hot.accept()
}

const root = document.querySelector('#root');

root.innerHTML = 
`
  <pre>
    Welcome! Your app is up and running!
  </pre>
`;

