(function(){

    // 바다
    var $waterFront = $("#water-front");
    var $waterBack= $("#water-back");

    (function loopSea(){
        $waterFront
        .animate({'bottom' : '-65px', 'left' : "-30px"},500)
        .animate({'bottom' : '-60px', 'left' : "-25px"},500)
    
        $waterBack
        .animate({'bottom' : '15px', 'left' : "-20px"},500)
        .animate({'bottom' : '10px', 'left' : "-25px"},500)

        $.when($waterFront, $waterBack).done(loopSea);
    })();
    
    //구름
    var $cloud1 = $('#cloud-group-1');
    var $cloud2 = $('#cloud-group-2');

    (function loopCloud(){
        $cloud1.animate({'left' : '-720px'}, 10000,"linear")
        .animate({'left' : '0px'}, 0)
        $cloud2.animate({'left' : '0px'}, 10000,"linear")
        .animate({'left' : '720px'}, 0,loopCloud);
    
    })();

    //보트
    var $boat = $('#boat');
    var $questionMark = $('#question-mark');

    $boat.css({'left' : '-220px'});
    $questionMark.css({'opacity' : 0})

    $boat.animate({'left' : '20px'},2000,function(){
        // $boat 두둥실
        loopBoat();
        $questionMark.delay(500).animate({
            'opacity' : '1'
        },1000)
    });

    //boat
    function loopBoat(){
        $boat
            .animate({'bottom' : '15px'},500)
            .animate({'bottom' : '25px'},500,loopBoat)

        
    }



})();