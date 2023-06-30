$(document).ready(function () {

    // Add click event to tabs
    $(".tab").click(function () {
        var filter = $(this).data("filter");

        // Add "active" class to clicked tab and remove it from others
        $(".tab").removeClass("active");
        $(this).addClass("active");

        // Show or hide shapes based on filter
        if (filter === "all") {
            $(".shape").show();
        } else {
            $(".shape").hide();
            $("." + filter).show();
        }
    });
});
