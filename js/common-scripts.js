
;(function($){
	$(function(){
        

        if ($(".styled-select").length) {
            $(".styled-select").selectric();
        }
        
            $("#sign-up-content-wrap .sign-up-content").hide()
            $("#sign-up-content-wrap .sign-up-content").eq(0).show()
            $(".pagination-wrap ul li").eq(0).addClass('active')
            $(".pagination-wrap ul li").each(function(i){
                var $this = $(this);
                $this.on("click touch", function(){
                    if( $(this).hasClass('active') ){
                        return false;
                    } 
                    else{
                        $(".pagination-wrap ul li").removeClass('active')
                        $(this).addClass('active')
                        $("#sign-up-content-wrap .sign-up-content").hide()
                        $("#sign-up-content-wrap .sign-up-content").eq(i).show()
                    }
                })
            })
        
                $('#back').on("click touch", function(e){
                    e.preventDefault()
                    var activeTogo = $(this).attr('href')
                    $(".pagination-wrap ul li").removeClass('active')
                    $(".pagination-wrap ul li").eq(0).addClass('active')
                    $(activeTogo).show()
                    $('#sign-up-02').hide()
                        
                })
        
        $('#get-started-btn').on("click touch", function(e){
            e.preventDefault()
            var activeTogo = $(this).attr('href')
            $(".pagination-wrap ul li").removeClass('active')
            $(".pagination-wrap ul li").eq(1).addClass('active')
            $(activeTogo).show()
            $('#sign-up-01').hide()
            $('#sign-up-02').show()
       })
        
         $('#create-account').on("click touch", function(e){
            e.preventDefault()
            var activeTogo = $(this).attr('href')
            $(".pagination-wrap ul li").removeClass('active')
            $(".pagination-wrap ul li").eq(2).addClass('active')
            $(activeTogo).show()
            $('#sign-up-02').hide()
            $('#thank-you').show()
             $(".pagination-wrap ul li").hide()
       })
        
        $("#content-tab > div.content-info-inner").hide()
        $("#content-tab > div.content-info-inner").eq(0).show()
        $(".nav-item").removeClass("active")
        $(".nav-item").eq(0).addClass("active")

        $(".nav-item").each(function (i) {
            $(this).click(function () {
                if ($(this).hasClass("active")) return false
                else {
                    $(".nav-item").removeClass("active")
                    $(this).addClass("active")
                    $("#content-tab > div.content-info-inner").hide()
                    $("#content-tab > div.content-info-inner").eq(i).show()
                }
            })
        });
        
        $("#account-tab > div.accoun-info-des-item").hide()
        $("#account-tab > div.accoun-info-des-item").eq(0).show()
        $(".account-info-bottom-row > ul > li").removeClass("active")
        $(".account-info-bottom-row > ul > li").eq(0).addClass("active")

        $(".account-info-bottom-row > ul > li").each(function (i) {
            $(this).click(function () {
                if ($(this).hasClass("active")) return false
                else {
                    $(".account-info-bottom-row > ul > li").removeClass("active")
                    $(this).addClass("active")
                    $("#account-tab > div.accoun-info-des-item").hide()
                    $("#account-tab > div.accoun-info-des-item").eq(i).show()
                }
            })
        });
        

	})
    
    
})(jQuery);

