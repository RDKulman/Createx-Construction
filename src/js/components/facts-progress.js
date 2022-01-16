function fillSvg() {
    const circlesBox = document.querySelectorAll('.facts-element__infoblock');
    let percentage;

    circlesBox.forEach(item => {
        let circle = item.querySelector('.circle-progress');
        let circleRadius = circle.getAttribute('r');
        let circleLength = 2 * Math.PI * circleRadius;

        let circleInnerValue = item.querySelector('.facts-element__infoblock-value'); // получаем блок, куда будем выводить значение атрибута
        let dataValue = item.getAttribute('data-value'); // значение атрибуда, которой потом будем выводить

        if (item.dataset.percent == 'true') {
            percentage = Math.floor(dataValue);
            circleInnerValue.textContent = `${dataValue}%`;
        }
        else {
            let dataFullValue = item.getAttribute('data-full-value');
            percentage = Math.floor(dataValue / dataFullValue * 100);
            circleInnerValue.textContent = dataValue;
        }

        circle.setAttribute('stroke-dasharray', circleLength);
        circle.setAttribute('stroke-dashoffset', circleLength - circleLength * percentage / 100);
    });
}

fillSvg();