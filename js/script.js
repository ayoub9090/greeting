String.prototype.escape = function () {
    var tagsToReplace = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;'
    };
    return this.replace(/[&<>]/g, function (tag) {
        return tagsToReplace[tag] || tag;
    });
};


function go() {

    if ($('.the-name').val() !== '') {

        var theName = $('.the-name').val().escape();

        $('#capture .name').html(theName.split(" ").join("&nbsp;"))
        $(".renderedimg").html('<img class="loading" src="images/cube.gif" />');

        var vp = document.getElementById("viewportMeta").getAttribute("content");

        document.getElementById("viewportMeta").setAttribute("content", "width=800");

        html2canvas(document.querySelector("#capture"), {
            width: 620,
            height: 408, scale: 1, allowTaint: false, removeContainer: false, logging: true, letterRendering: 1
        }).then(canvas => {

            // $('canvas,iframe').remove();
            // document.body.appendChild(canvas);
            var dataURL = canvas.toDataURL();

            $(".renderedimg").html('<img src="' + dataURL + '" />');

            $(".renderedimg").append('<a download="greeting.jpg" class="btn btn-primary" href="' + dataURL + '">تحميل الصورة</a>');

            document.getElementById("viewportMeta").setAttribute("content", vp);
        })
    } else {
        return false;
    }
}


