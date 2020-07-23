$(function(){

    // header sticky

    $(window).scroll(function() {
        if ($(this).scrollTop() > 250){
            $(".header").addClass("sticky");
        }
        else{
            $(".header").removeClass("sticky");
        }
    });

    $(".btn-open").on("click", function () {
        $(this).hide().siblings(".btn-close").show();
        $(".sidebar").addClass("active");
    });
    $(".btn-close").on("click", function () {
        $(this).hide().siblings(".btn-open").show();
        $(".sidebar").removeClass("active");
    });

    // sidebar btn

    $(".company-select").select2({
        placeholder: "Company Autocomplete",
        allowClear: true,
        width: 300
    });

    $(".commodity").select2({
        width: '100%'
    });

    $(".un--select").select2({
        placeholder: "UN",
        allowClear: true,
        width: '100%'
    });
    $(".un__number--select").select2({
        placeholder: "UN NUMBER",
        allowClear: true,
        width: '100%'
    });
    $(".ship__name--select").select2({
        placeholder: "Proper Shipping Name",
        allowClear: true,
        width: '100%'
    });
    $(".hazard--select").select2({
        placeholder: "Hazard Class",
        allowClear: true,
        width: '100%'
    });

    $(".packing--select").select2({
        placeholder: "Packing Group",
        allowClear: true,
        width: '100%'
    });
    $(".packing__type--select").select2({
        placeholder: "Packing Type",
        allowClear: true,
        width: '100%'
    });


});
