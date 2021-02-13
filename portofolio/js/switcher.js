const   colorList = document.querySelectorAll('.alternatif-style'),
        totalLink = colorList.length;

function setActiveStyle(color) {
    for(let i = 0; i<totalLink; i++) {
        if(color == colorList[i].getAttribute('title')) {
            colorList[i].removeAttribute('disabled');
        } else {
            colorList[i].setAttribute('disabled', "true");
        }
    }
}

document.querySelector('.toggle-style-switcher').addEventListener("click", () => {
    document.querySelector('.style-switcher').classList.toggle('open');
});

const   bodySkin = document.querySelectorAll(".body-skin"),
        totalBodySkin = bodySkin.length;

for(let i=0; i < totalBodySkin; i++) {
    bodySkin[i].addEventListener("change", function() {
        console.log(this.value);
        if(this.value == 'dark') {
            document.body.className = 'dark';
        } else {
            document.body.className = '';
        }
    })
}