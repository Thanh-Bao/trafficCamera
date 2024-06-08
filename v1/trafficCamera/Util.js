const getCurrentTime = () => {
    const currentDate = new Date();

    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');
    const milliseconds = currentDate.getMilliseconds().toString().padStart(3, '0');

    const formattedTime = `${hours}:${minutes}:${seconds}:${milliseconds}`;
    return formattedTime;
}

function formatKilometers(distance) {
    // Kiểm tra nếu khoảng cách nhỏ hơn 1 km
    if (distance < 1) {
        // Format thành mét và làm tròn đến 2 chữ số thập phân
        const meters = (distance * 1000).toFixed(2);
        return `${meters}m`;
    } else {
        // Format thành km và mét và làm tròn đến 2 chữ số thập phân
        const kilometers = Math.floor(distance);
        const meters = Math.round((distance - kilometers) * 1000);
        return `${kilometers}km ${meters}m`;
    }
}


function distanceHaversine(lat1, lat2, lon1, lon2) {

    // The math module contains a function
    // named toRadians which converts from
    // degrees to radians.
    lon1 = lon1 * Math.PI / 180;
    lon2 = lon2 * Math.PI / 180;
    lat1 = lat1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;

    // Haversine formula 
    let dlon = lon2 - lon1;
    let dlat = lat2 - lat1;
    let a = Math.pow(Math.sin(dlat / 2), 2)
        + Math.cos(lat1) * Math.cos(lat2)
        * Math.pow(Math.sin(dlon / 2), 2);

    let c = 2 * Math.asin(Math.sqrt(a));

    // Radius of earth in kilometers. Use 3956 
    // for miles
    let r = 6371;

    // calculate the result
    return (c * r);
}

export { getCurrentTime, distanceHaversine, formatKilometers };