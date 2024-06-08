import * as React from 'react';
import { Text, View } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { useSelector, useDispatch } from 'react-redux';
import { updateTime } from '../redux/features/time';

export default function Countdown() {
    const [isPlaying, setIsPlaying] = React.useState(true)

    const now = useSelector((state) => state.changeTime);
    const dispatch = useDispatch();

    return (
        <View>
            <CountdownCircleTimer
                isPlaying={isPlaying}
                duration={5}
                colors={["#00FF00", "#00FF00", "#00FF00", "#00FF00", "#00FF00", "#00FF00"]}
                colorsTime={[5, 4, 3, 2, 1, 0]}
                onComplete={() => {
                    dispatch(updateTime());
                    return ({ shouldRepeat: true, delay: 1 })
                }}
                updateInterval={1}
                size={50}
                trailStrokeWidth={4}
                strokeWidth={8}
                isSmoothColorTransition={true}

            >
                {({ remainingTime }) => (
                    <Text className="text-white font-bold" style={{ fontSize: 20 }}>
                        {remainingTime}
                    </Text>
                )}
            </CountdownCircleTimer>
        </View>
    )
}
