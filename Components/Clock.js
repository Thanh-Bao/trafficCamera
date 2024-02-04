import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { getCurrentTime } from '../Util';
const Clock = () => {
    const [currentTime, setCurrentTime] = useState(getCurrentTime);

    useEffect(() => {
        const updateMilliseconds = () => {
            setCurrentTime(getCurrentTime());
            setTimeout(updateMilliseconds, 10); // Cập nhật mili giây mỗi mili giây
        };

        const intervalId = setTimeout(updateMilliseconds, 1);

        // Xóa timeout khi component unmount
        return () => clearTimeout(intervalId);
    }, []); // useEffect chỉ chạy một lần sau khi component mount

    return (
        <Text className="text-xs text-white">{currentTime}</Text>
    );
};

export default Clock;