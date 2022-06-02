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

function onSuccess(data, status, jqXhr) {
    // display the requested data to the user
}

function onFail(jqXhr, status, error) {
    // tell the user something went wrong, and to try again later
}


function stopLoadingAnimation() {
    $('#loading').addClass('hide')
    $('footer').removeClass('d-none')
}
