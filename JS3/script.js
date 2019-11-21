window.onload = function () {
if (localStorage.getItem('bgcolor') != null){
    let color = localStorage.getItem('bgcolor');
    document.getElementById('bgc-change').style.background = color;
}
        document.getElementById('change-bgc').onclick = function (){
        console.log('work')
        document.getElementById('bgc-change').style.background = 'green';
        localStorage.setItem('bgcolor','green')
    }
    document.getElementById('bgc-change-back').onclick = function (){
        console.log('work')
        document.getElementById('bgc-change').style.background = 'red' ;
        localStorage.setItem('bgcolor','red')
    }
}
