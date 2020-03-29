$(document).ready(function() {
    const colorCombo = ["#08f7fe", "#09fbd3", "#fe53bb", "#fafafa"]
    const alphaNums = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    function shuffleWords(holder){
        let origCopy = []
    
        let randText = (mindex, savecopy) => {
            $(holder).children().each(function(i) {
                    if (i > mindex){
                        if (savecopy){
                            origCopy[i] = $(this).text();
                        }
                        $(this).text(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
                        $(this).css("color", colorCombo[Math.floor(Math.random()*4)]);
                    }
            });
        }

        randText(0, true)

        let time = 100;

        $(holder).children().each(function(i){
            let obj = this;
            setTimeout(function() { 
                $(obj).text(origCopy[i]);
                $(obj).css("color", "#f5d300");
                randText(i, false);
                if (i == origCopy.length-1){
                    holder.removeClass("block");
                }
            }, time);
            time += 100;
        });
    }
    
    
    $("#tran-1-txt").waypoint(function() {
        if (!$("#tran-1-txt").hasClass("block")){
            $("#tran-1-txt").addClass("block");
            shuffleWords($("#tran-1-txt"));
        }
    }, {offset: "100%"});
});