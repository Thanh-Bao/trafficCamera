const getCurrentTime = () => {
    const currentDate = new Date();

    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');
    const milliseconds = currentDate.getMilliseconds().toString().padStart(3, '0');

    const formattedTime = `${hours}:${minutes}:${seconds}:${milliseconds}`;
    return formattedTime;
}

export { getCurrentTime };