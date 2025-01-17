export const handleShowElement = () => {
    const followCircle = document.querySelector(".followCircle");
    const followDot = document.querySelector(".followDot");
    followCircle.style.display = "flex";
    followDot.style.display = "flex";
}

export const handleHideElement = () => {
    const followCircle = document.querySelector(".followCircle");
    const followDot = document.querySelector(".followDot");
    followCircle.style.display = "none";
    followDot.style.display = "none";
}