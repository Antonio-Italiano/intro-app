import {useEffect, useState} from 'react';

const Clock = ({country, timezone}) => {
    const t = Date.now() + 3600 * timezone * 1000;
    const dateIni = new Date(t);

    const [date, setDate] = useState(dateIni);

    useEffect(() => {
        const intervall = setInterval(() => {
            const time = date.getTime() + 1000;
            setDate(new Date(time));
        }, 1000);
        return () => {
            clearInterval(intervall);
        }
    }, [date])
    return (
    <h2>
        Today in {country} is { date.toLocaleDateString() + ' ' + date.toLocaleTimeString()}
    
    </h2>

    )
}


export default Clock;