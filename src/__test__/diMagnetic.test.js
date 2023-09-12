import {render} from '@testing-library/react';
import App from '../App';
import {injectable, DiProvider} from 'react-magnetic-di';
import Listing from '../components/Listing';

const mockListingComponent = () => <div data-testid1="listing" />;
const ListingDi = injectable(Listing, () => <div data-testid="listing" />);

describe('App', () => {
    it('should fetch Listing component with magnetic', async () => {
        const {container} = render(<App />, {
            wrapper: props => <DiProvider use={[ListingDi]} {...props} />,
        });
        expect(container).toMatchSnapshot();
    });
});
