const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mousemove', continuePainting);
canvas.addEventListener('mouseup', stopPainting);

let isPainting = false;

function startPainting(event) {
    isPainting = true;
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
