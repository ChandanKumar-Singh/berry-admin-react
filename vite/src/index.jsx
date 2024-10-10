import { createRoot } from 'react-dom/client';

// third party
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

// project imports
import App from './App';
import reducer from './store/reducer';

// google-fonts
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/700.css';

import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

// style + assets
import 'assets/scss/style.scss';
import reportWebVitals from 'reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
const store = configureStore({ reducer });


// ==============================|| SET META TAGS ||============================== //
function setMetaTags() {
  document.title = process.env.REACT_APP_META_TITLE;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', process.env.REACT_APP_META_DESCRIPTION);
  } else {
    const newMetaDescription = document.createElement('meta');
    newMetaDescription.name = "description";
    newMetaDescription.content = process.env.REACT_APP_META_DESCRIPTION;
    document.head.appendChild(newMetaDescription);
  }

  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords) {
    metaKeywords.setAttribute('content', process.env.REACT_APP_META_KEYWORDS);
  } else {
    const newMetaKeywords = document.createElement('meta');
    newMetaKeywords.name = "keywords";
    newMetaKeywords.content = process.env.REACT_APP_META_KEYWORDS;
    document.head.appendChild(newMetaKeywords);
  }
}


// Call the function to set meta tags
// setMetaTags();



// ==============================|| REACT DOM RENDER  ||============================== //



root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
reportWebVitals();
