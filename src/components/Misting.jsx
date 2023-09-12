import React from 'react';
import {withDi, injectable} from 'react-magnetic-di';

import Listing from './Listing';

const ModalOpenDi = injectable(Listing, () => <div data-testid="listing">Listing Component</div>);

export default withDi(Listing, [ModalOpenDi]);
