$(document).ready(function () {
    $("#btn1").click(function () {


        $('.div1').animate({
            top: '0',
            left: '100px'
        }, 100)
        $('.div2').animate({
            top: '50px',
            left: '90px'
        }, 200)
        $('.div3').animate({
            top: '90px',
            left: '55px'
        }, 300)
        $('.div4').animate({
            top: '100px',
            left: '0px'
        }, 400)




    })

    $('.div4').click(function(){
        $('.div1').animate({
            top: '6px',
            left: '4px'
        }, 400)
        $('.div2').animate({
            top: '6px',
            left: '4px'
        }, 300)
        $('.div3').animate({
            top: '6px',
            left: '4px'
        }, 200)
        $('.div4').animate({
            top: '6px',
            left: '4px'
        },100)
    })

})