console.log('HELLO Drag And Drop!');

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

// Event Listner for draggable Elements
imgBox.addEventListener('dragstart', (e) => {
    console.log("DragStart has triggered");
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';

    }, 0);
});
imgBox.addEventListener('dragend', (e) => {
    console.log("DragEnd has triggered");
    e.target.className = 'imgBox';
})

for (var whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        console.log("DragOver has triggered");
        e.preventDefault();
    })
    whiteBox.addEventListener('dragenter', (e) => {
        console.log("DragEnter has triggered");
        e.target.className += ' dashed'
    })
    whiteBox.addEventListener('dragleave', (e) => {
        console.log("DragLeave has triggered")
        e.target.className = 'whiteBox'
    })
    whiteBox.addEventListener('drop', (e) => {
        console.log("Drop has triggered");
        e.target.append(imgBox);
        e.target.className = 'whiteBox';
    })
}
