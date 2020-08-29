import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Step 1: Import 'App'.
import App from './App';

// Step 2: Import `<Provider>` from `react-redux` library.
import { Provider } from 'react-redux';

// Step 3: Import function `createStore` from `react` library.
import { createStore } from 'redux';

// Step 4: Import our own reducer.
import reducer from './reducer';

// Step 5: Create Store & Pass reducer.
const store = createStore( reducer );

// Step 6: Wrap our `<App>` component with `<Provider>` component.
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);