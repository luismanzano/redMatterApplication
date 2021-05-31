import React, { useLayoutEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

function Task3() {

useLayoutEffect(() => {
    const points = [
        [ 198619, 182327, 96947, 196635],
        [ 190812, 198648, 90738, 190065],
        [ 185989, 195751, 98451, 186084],
        [ 183427, 187377, 81139, 194941],
        [ 195132, 193197, 71631, 186256],
        [ 190417, 198065, 77642, 182257],
        [ 195056, 207627, 59446, 91838],
        [ 183397, 151944, 111610, 111637],
        [ 207692, 191928, 108065, 112038],
        [ 190221, 192832, 115585, 104890],
        [ 193719, 200159, 95359, 83465],
        [ 205421, 178546, 57777, 118342],
        [ 190282, 135992, 105312, 83259],
        [ 122317, 180897, 116984, 42136],
        [ 186234, 147115, 21118, 52353],
        [ 215352, 191865, 35746, 104579],
        [ 127227, 190625, 58608, 126068],
        [ 154717, 200857, 66317, 67820],
        [ 87551, 88180, 99411, 116278],
        [ 70234, 118126, 66264, 79860],
        [ 83333, 106316, 55046, 136022],
        [ 111130, 101929, 29539, 42758],
        [ 59423, 70765, 82492, 59081],
        [ 66899, 111391, 119097, 50261],
        [ 84508, 81086, 131670, 121690],
        [ 106041, 68309, 29146, 39835],

        [ 76734, 103062, 27210, 85928],
        [ 105879, 56701, 129143, 136780],
        [ 86379, 91427, 137619, 58351],
        [ 89941, 51729, 51592, 107206]
    ]
    const canvas = document.getElementById("canvas1")
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'white';

    var pointInPolygon = require('point-in-polygon');

    let polygon = [
        [
            200000,
            100000
            ],
            [
            230000,
            180000
            ],
            [
            200000,
            200000
            ],
            [
            200000,
            230000
            ],
            [
            110000,
            220000
            ],
            [
            100000,
            180000
            ]
    ]

    for( let point of points) {
        let x = Math.floor(point[3] * 400 / 250000);
        let y = 400 - Math.floor(point[2] * 400 / 250000);

        if (pointInPolygon([point[0], point[1]], polygon)) {
            ctx.fillStyle = 'red';
            ctx.fillRect(x, y, 3, 3);
        }
        
        console.log("point", point)
    }
    
    
})
    

    return (

        <div>
            <h1>TASK 3</h1>
            <canvas className = "canvas1" id="canvas1" width="400" height="400"/>
        </div>
    )
}

export default Task3;