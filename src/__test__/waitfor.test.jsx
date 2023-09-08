import {render, screen, waitFor, waitForElementToBeRemoved} from '@testing-library/react';
import React, {useEffect, useState} from 'react';

function Test() {
    const [message, setMessage] = useState('Semih');

    useEffect(() => {
        setTimeout(() => {
            setMessage('Nuri');
        }, [300]);
    }, []);

    return <p>{message}</p>;
}

// queryByText && not
test('should render async element  correctly not exist', () => {
    render(<Test />);
    const element = screen.queryByText('Nuri');
    expect(element).not.toBeInTheDocument();
});

// findBY
test('should render async element  correctly', async () => {
    render(<Test />);
    const element = await screen.findByText(/Nuri/i);
    expect(element).toBeInTheDocument();
});

// findByText && queryByText
test('should render async element  correctly changing', async () => {
    render(<Test />);
    const elementIsExist = await screen.findByText('Nuri');

    // getByText("Semih") testi geçmez çünkü findBy async
    // olduğu için onu görene kadar bekler. Aşağı geçtiğinde olmadığı için hata verir.
    const elementShouldNotExist = screen.queryByText(/Semih/i);
    expect(elementIsExist).toBeInTheDocument();
    expect(elementShouldNotExist).not.toBeInTheDocument();
});

// waitFor
test('should render async element  correctly2', async () => {
    render(<Test />);

    await waitFor(() => {
        const elementShouldNotExist = screen.queryByText('Semih');
        expect(elementShouldNotExist).not.toBeInTheDocument();
    });

    await waitFor(() => {
        const elementIsExist = screen.getByText('Nuri');
        expect(elementIsExist).toBeInTheDocument();
    });
});

// waitForElementToBeRemoved
test('should render async element  correctly4', async () => {
    render(<Test />);

    // Bu testi yapabilmesi için çıkarılması gereken elementin daha önceden var
    // olması gerekir. Örneğin  "Semih" yazınca hata vermez ama "Nuri" yazınca
    // hata verir. Çünkü daha önceden yoktur.
    await waitForElementToBeRemoved(() => screen.queryByText('Semih'));
});

// waitForElementToBeRemoved
test('should render async element  correctly3', async () => {
    render(<Test />);

    // Yukarda açıklanan sebepten dolayı üst tarafa eklendi
    await waitForElementToBeRemoved(() => screen.queryByText('Semih'));

    const elementShouldNotExist = screen.getByText(/Nuri/i);
    expect(elementShouldNotExist).toBeInTheDocument();
});
