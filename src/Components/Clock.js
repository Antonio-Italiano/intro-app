const Clock = ({country, timezone}) => {
    const t = Date.now() + 3600 * timezone * 1000;
    const date = new Date(t);
    return (
    <h2>
        Today in {country} is { date.toLocaleDateString() + ' ' + date.toLocaleTimeString()}
    
    </h2>

    )
}


export default Clock;