//add image on the page and show it sizes.

const addImage = (imgSrc, callback) => {

    const imgElem = document.createElement('img');
    imgElem.setAttribute('Alt', 'My Photo');
    imgElem.src = imgSrc;

    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const onImageLoaded = () => {
        const { width, height } = imgElem;
        callback(null, { width, height });
    }

    //image is load
    imgElem.addEventListener('load', onImageLoaded);

    imgElem.addEventListener('error', () => callback('Image Load Failed'));
    //imgElem.width();
    //imgElem.height();
    // const { width, height } = imgElem;

};

const imgSrc = "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg";

const onImageLoaded = (error, data) => {
    
    if(error) {
        console.log(error);
        return;
    }

    const { width, height } = data;
    const sizeElem = document.querySelector('.image-size');
    sizeElem.textContent = `${width} x ${height}`;
}
addImage(imgSrc, onImageLoaded);

export { addImage };