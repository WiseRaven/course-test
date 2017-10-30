$(document).ready(function() {
    
    // add number to input 
    $(".num").on("click", function() {
        var num_val = $(this).data("num");
        $(".panel-input").val($(".panel-input").val() + num_val);

        // random number position
        $(function () {
            var num_parent = $(".panel-numbers");
            var num_item = num_parent.children(".num");
            while (num_item.length) {
                num_parent.append( num_item.splice(Math.floor(Math.random() * num_item.length), 1)[0] );
            }
        });
        
    });

    // number delete
    $(".cancel").on("click", function() {
        $(".panel-input").val( $(".panel-input").val().substr(0, $(".panel-input").val().length - 1) );
    });

    // all number delete
    $(".clear").on("click", function() {
        $(".panel-input").val("");
    });

    // alert number
    $(".enter").on("click", function() {
        var inp_val = $(".panel-input").val();
        if ( (inp_val == "") || ($(".panel-input").attr("type") == "password") ) {
            alert("Input field empty or hide");
        }
        else {
            alert("Input numbers: " + inp_val );
        }
    });

    // hide number
    $(".hide-sumb").on("click", function() {
        if ( $(".panel-input").attr("type") ==  "password" ) {
            $(".panel-input").attr("type", "text");
        } 
        else {
            $(".panel-input").attr("type", "password");
        }
    });

});