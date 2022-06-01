fetch('https://helpful-mercurial-eyebrow.glitch.me/movies')
    .then(function (res) {
        console.log(res)
        return res.json();
    }).then(function (data){
        for (let i = 0; i<data.length; i++) {
            console.log(data[i].title)
        }
        $("#loading-image").addClass('hide')
    // $(window).on('load', function () {
    //     $('#loading').hide();
    // })

    });
function stopLoadingAnimation() {
    $('.loading').addClass('d-none')
    $('footer').removeClass('d-none')
}
