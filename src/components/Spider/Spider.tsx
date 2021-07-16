
import React from 'react';

const IMAGES = [
    'images/spider-00.svg',
    'images/spider-01.svg',
    'images/spider-02.svg',
    'images/spider-03.svg',
    'images/spider-04.svg',
    'images/spider-05.svg',
    'images/spider-06.svg',
    'images/spider-07.svg',
    'images/spider-08.svg',
    'images/spider-09.svg',
    'images/spider-10.svg'
];

type SpiderProps = {
    step?: number;
};

function Spider({ step = 0 }: SpiderProps) {
    const src =
        step >= IMAGES.length ? IMAGES[IMAGES.length - 1] : IMAGES[step];
    return (
        <div className="Spider">
            <img alt="Spider" src={src} />
        </div>
    );
}

export default Spider;