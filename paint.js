let isPainting = false;
let startPointX = 0
let startPointY = 0

context.lineCap = 'round';
context.lineWidth = 35;
context.strokeStyle = 'blue';

canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mousemove', continuePainting);
canvas.addEventListener('mouseup', stopPainting);

function startPainting(event) {
    isPainting = true;
    startPointX = event.clientX
    startPointY = event.ClientY
    context.beginPath();
    context.moveTo(event.clientX, event.clientY);
}

function continuePainting(event) {
    if (isPainting) {
        context.lineTo(event.clientX, event.clientY);
        context.stroke();
    }
}

function stopPainting(event) {
    isPainting = false;
}
