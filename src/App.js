import React from 'react';
import Listing from './components/Listing';
import {di} from 'react-magnetic-di';

function App() {
    di(<Listing />);

    return (
        <div>
            <div>Hello</div>
            <Listing />
            <div>Bello</div>
        </div>
    );
}

export default App;
