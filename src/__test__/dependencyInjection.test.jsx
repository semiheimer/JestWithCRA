import {render, screen} from '@testing-library/react';
import Listing from '../components/Listing';

const ListingComponent = () => <div data-testid="listing">Listing Component</div>;

function App({ListingComponent = Listing}) {
    return (
        <div>
            <ListingComponent />
            <div>Hello</div>
        </div>
    );
}

describe('App', () => {
    it('should fetch Listing component injection', () => {
        render(<App ListingComponent={ListingComponent} />);
        const element = screen.getByTestId('listing');
        expect(element).toBeInTheDocument();
    });
});
