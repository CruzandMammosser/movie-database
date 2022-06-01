fetch('https://helpful-mercurial-eyebrow.glitch.me/movies')
    .then(function (res) {
        console.log(res)
        return res.json();
    }).then(function (data){
        console.log(data)
        $("#loading-image").addClass('hide')
    // $(window).on('load', function () {
    //     $('#loading').hide();
    // })

    });
