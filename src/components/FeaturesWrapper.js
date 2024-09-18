import React, { useState } from 'react';
import { Timer } from './Timer';
import { TimerChart } from './Chart';
import { Col } from 'react-bootstrap';

export const FeaturesWrapper = () => {
    const [currentTimeValue, setCurrentTimeValue] = useState(0);

    return (
        <Col xl={4} xs={12} md={6} className="d-flex align-items-start justify-content-center FeaturesWrapper">
            <div className="card">
                <TimerChart currentTime={currentTimeValue} />
                <Timer setCurrentTime={setCurrentTimeValue} currentTime={currentTimeValue} />
            </div>
        </Col>
    );
};
