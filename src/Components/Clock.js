import {useEffect, useState} from 'react';
import './Clock.css';

function getTime(d) {
    const ret = {

    };
    //seconds
    const secs = d.getSeconds().toString().padStart(2, '0');
    ret.firstSecond = secs.charAt(0);
    ret.secondSecond = secs.charAt(1);
    
    //minutes
    const mins = d.getMinutes().toString().padStart(2, '0');
    ret.firstMinute = mins.charAt(0);
    ret.secondMinute = mins.charAt(1);
    
    //Hour
    const hours = d.getHours().toString().padStart(2, '0');
    ret.firstHour = hours.charAt(0);
    ret.secondHour = hours.charAt(1);

    return ret;
}

const Clock = ({country, timezone}) => {
    const t = Date.now() + 3600 * timezone * 1000;
    const dateIni = new Date(t);

    const defaultTime = getTime(dateIni);

    const [date, setDate] = useState(dateIni);

    //seconds
    const [firstSecond, setFirstSecond] = useState(defaultTime.firstSecond);
    const [secondSecond, setSecondSecond] = useState(defaultTime.secondSecond);
    //minutes
    const [firstMinute, setFirstMinute] = useState(defaultTime.firstMinute);
    const [secondMinute, setSecondMinute] = useState(defaultTime.secondMinute);
    //houre
    const [firstHour, setFirstHoure] = useState(defaultTime.firstHour);
    const [secondHour, setSecondHoure] = useState(defaultTime.secondHour);
    
    const [firstMove, setFirstMove] = useState('')
    useEffect(() => {

        const intervall = setInterval(() => {
        
            const time = date.getTime() + 1000;
            const d = new Date(time);
            
            const defaultTime = getTime(dateIni);

            //seconds
            if(firstSecond !== defaultTime.firstSecond) {
                setFirstMove('move');
                setTimeout(() => {
                    setFirstSecond(defaultTime.firstSecond);   
                }, 900);
            }else {
                setFirstMove('');
            }

            setSecondSecond(defaultTime.secondSecond);
            
            //minutes
            if(firstMinute !== defaultTime.firstMinute) {
                setFirstMinute(defaultTime.firstMinute);
            }
            if(secondMinute !== defaultTime.secondMinute) {
                setSecondMinute(defaultTime.secondMinute);
            }
            
            //Hour
            if(firstHour !== defaultTime.firstHour) {
                setFirstHoure(defaultTime.firstHour);
            }    
            if(firstHour !== defaultTime.secondHour) {
                setSecondHoure(defaultTime.secondHour);
            }

            setDate(d);
        }, 1000);
        return () => {
            clearInterval(intervall);
        };
    }, [date])

    return (
    <div className="clock">
      <div className="hours">
        <div className="first">
          <div className="number">{firstHour}</div>
        </div>
        <div className="second">
          <div className="number">{secondHour}</div>
        </div>
      </div>
      <div className="tick">:</div>
      <div className="minutes">
        <div className="first">
          <div className="number">{firstMinute}</div>
        </div>
        <div className="second">
          <div className="number">{secondMinute}</div>
        </div>
      </div>
      <div className="tick">:</div>
      <div className="seconds">
        <div className="first">
          <div className={'number ' + firstMove}>{firstSecond}</div>
        </div>
        <div className="second infinite">
          <div className="number">{secondSecond}</div>
        </div>
      </div>
    </div>
  );
};

export default Clock;