/*eslint-disable import/default*/
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import StyleMigrator from './components/StyleMigrator';

render(<StyleMigrator/>,
  document.getElementById('app')
);
