let tabText = document.querySelectorAll('.service-item');
tabText = Array.from(tabText);

let tabContent = document.querySelectorAll('.tabs-content');

for (i = 0; i < tabText.length; i++) {
    tabText[i].addEventListener('click', function (e) {
        for (i = 0; i < tabContent.length; i++) {
            tabContent[i].style.display = 'none';
        }
        let el = e.target;
        let index = tabText.indexOf(el);
        tabContent[index].style.display = 'block';
    })
}

$('.service-item').on('click', (el) => {
    $('.active-green-menu')[0].classList.toggle('active-green-menu')
    $(el.target).toggleClass("active-green-menu");
});


// Сортировка
$('.all-photo').on('click', (elem) => {
    let dataValue = $(elem.target).data('content');
    $('.amazing-work-img').show();
});

$('.graphic-photo, .web-photo, .landing-photo, .wordpress-photo').on('click', (elem) => {
    let dataValue = $(elem.target).data('content');
    $('.amazing-work-img').hide();
    $('.amazing-work-photo').find(`[data-content='${dataValue}']`).show();

});

jQuery(function ($) {
    $('#button-load').on('click', function (e) {
        $(e.currentTarget).attr('disabled', true);
        $('.loader').toggleClass('hide');
        $('.load-new-photo').attr('disabled', true);

        setTimeout(function () {
            $('.loader').toggleClass('hide');
            $(e.currentTarget).attr('disabled', false);
            $(e.currentTarget).after('<div>loading is complete</div>');

        }, 5000)
    });
});


(showPhoto = () => {
    document.getElementById('button-load').addEventListener('click', function (event) {
        setTimeout(function () {
            document.getElementById('new-photo').style.display = 'flex';
        }, 5000)
        document.getElementById('button-load').style.display = 'none';
    })
})();


$('.users-photo').on('click', (elem) => {
    $('.active-photo')[0].classList.toggle('active-photo');
    $(elem.target).toggleClass("active-photo");

    let userFb = $(elem.target).data('user');
    $('.user-photo').hide();
    $('.main-user-photo').find(`[data-user = ${userFb}]`).show();
});

$('.scroll').on('click', () => {
    let arr = $('.users-photo');
    let active = $('.active-photo');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === active[0]) {
            active[0].classList.toggle('active-photo');

            if (i === 3) {
                arr[0].classList.toggle('active-photo');
                arr[0].click();
            } else {
                arr[i + 1].classList.toggle('active-photo');
                arr[i + 1].click();
            }

        }
    }
});

$('.scroll-1').on('click', () => {
    let arr = $('.users-photo');
    let active = $('.active-photo');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === active[0]) {
            active[0].classList.toggle('active-photo');

            if (i === 0) {
                arr[3].classList.toggle('active-photo');
                arr[3].click();
            } else {
                arr[i - 1].classList.toggle('active-photo');
                arr[i - 1].click();
            }

        }
    }
});



