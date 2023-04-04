canvas.addEventListener('mousedown', setStartPoint)

let startPointX = 0
let startPointY = 0

function setStartPoint(event) {
    startPointX = event.clientX
    startPointY = event.ClientY

}