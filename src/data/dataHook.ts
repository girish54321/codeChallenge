import { useState, useEffect } from 'react';

const brands = [
    { name: 'GSA BNF Directional', category: 'Live-Entered', sharePrice: 400, perValSharePrice: 0, percentageDifference: "0.00 %" },
    { name: 'GSA Nifty Directional ', category: 'Exited ', sharePrice: 400, perValSharePrice: 0, percentageDifference: "0.00 %" },
    { name: 'Banknifty Fighter Lite Positional', category: 'Live-Entered ', sharePrice: 400, perValSharePrice: 0, percentageDifference: "0.00 %" },
    { name: 'Banknift Fighter Positional', category: 'Live-Entered ', sharePrice: 400, perValSharePrice: 0, percentageDifference: "0.00 %" },
    { name: 'Overnight Miner', category: 'Exited ', sharePrice: 400, perValSharePrice: 0, percentageDifference: "0.00 %" },
    { name: 'Overnight Miner Nifty', category: 'Exited ', sharePrice: 400, perValSharePrice: 0, percentageDifference: "0.00 %" },
];

const calculatePercentageDifference = (initialValue: number, finalValue: number) => {
    const difference = finalValue - initialValue;
    const percentageDifference = (difference / initialValue) * 100;
    return `${percentageDifference.toFixed(2)} %`;
};

export const UseData = () => {

    const [data, setdata] = useState(brands)

    const updateRandomSharePrice = () => {
        const randomIndex = Math.floor(Math.random() * (brands.length));
        const deepCopy = [...data]
        const priceChange = Math.random() < 0.5 ? -Math.random() * 10 : Math.random() * 10;
        deepCopy[randomIndex].perValSharePrice = deepCopy[randomIndex].sharePrice;
        deepCopy[randomIndex].sharePrice = (deepCopy[randomIndex].sharePrice + priceChange);
        const percentageDifference = calculatePercentageDifference(deepCopy[randomIndex].perValSharePrice, deepCopy[randomIndex].sharePrice);
        deepCopy[randomIndex].percentageDifference = percentageDifference
        setdata(deepCopy)
    };

    useEffect(() => {
        const timeoutFunction = setInterval(updateRandomSharePrice, 1000)
        return () => clearInterval(timeoutFunction);
    }, [])

    return [data]
}