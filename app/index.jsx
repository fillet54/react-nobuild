import React from 'react';
import ReactDOM from 'react-dom';

import {Panel} from './Panel';
import {Button} from './Button';

(async () => {
    const root = document.getElementById('root');
    ReactDOM.render((
        <div>
            <Panel/>
            <Button>Direct</Button>
        </div>
    ), root);
})();
