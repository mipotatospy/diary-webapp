import React, { useState } from 'react';
import { Timer } from './Timer';
import { TimerChart } from './Chart';

export const FeaturesWrapper = () => {
    const [currentTimeValue, setCurrentTimeValue] = useState(0);

    return (
        <div className="Features">
            <div className="FeaturesContainer">
                <TimerChart currentTime={currentTimeValue} />
                <Timer setCurrentTime={setCurrentTimeValue} currentTime={currentTimeValue} />
            </div>
        </div>
    );
};
