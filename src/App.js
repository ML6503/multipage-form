import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ThoughtRecordForm from './components/ThoughtRecordForm/ThoughtRecordForm';

const App = () => (
  <Router>
    <ThoughtRecordForm />
  </Router>
);

export default App;
