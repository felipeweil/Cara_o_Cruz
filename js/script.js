$(document).ready(function(){
    
    let $coin = $("#coin");
    let $resultTxt = $("#resultTxt");
    
    $coin.on("click", function(){
        let randNum = Math.random();
        console.log(randNum);

        $coin.removeClass();
        // $resultTxt.

        setTimeout(function(){
            if (randNum <= 0.5) {
                console.log("es cara");
                $coin.addClass("isHeads");
            } else {
                console.log("es cruz");
                $coin.addClass("isTails");
            }
        }, 100);
    })

});
