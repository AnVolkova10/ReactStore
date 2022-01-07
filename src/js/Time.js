import '../css/Time.css';


function Time() {

    const currentHour = new Date().getHours()>9 ? new Date().getHours() : '0' + new Date().getHours();
    const currentMinutes = new Date().getMinutes()>9 ? new Date().getMinutes() : '0' + new Date().getMinutes();

    return(
        <div className="time-data">{`${currentHour}:${currentMinutes}`}</div>   
    );
}

export { Time };

