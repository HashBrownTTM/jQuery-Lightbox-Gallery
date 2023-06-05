$(document).ready(function(){
    $('.gallery-image').click(function(event){
        event.preventDefault();
        event.stopImmediatePropagation();
        
        //clicked image file path
        var filepath=$(this).attr("href");

        //creates an array of the href (filepaths) of the images in the gallery, Stack Overflow (2012)
        $.fn.collect = function(fn) {
            var values = [];
        
            if (typeof fn == 'string') {
                var prop = fn;
                fn = function() { return this.attr(prop); };
            }
        
            $(this).each(function() {
                var val = fn.call($(this));
                values.push(val);
            });
            return values;
        };

        var href = $('.gallery-image').collect('href');

        //checks if the clicked image exisst in the same index as in the array
        var currentIndex = 0;
        for(i = 0; i < href.length; i++){
            if(filepath == href[i]){
                currentIndex = i;
                break;
            }
        }

        function showLightboxImage(n){
            if (n > href.length - 1) 
            {
                currentIndex = 0;
            }
            else if(n < 0){
                currentIndex = href.length - 1;
            }
            
            var loader = $(".lightbox-content .image-loader");
            var imageContainer = $(".lightbox-content img");
            loader.css("display", "block");
            imageContainer.css("display", "none");
    
            var newImg = new Image();
            newImg.src = href[currentIndex];
            
            newImg.onload = function() {
                imageContainer.css("display", "block");
                imageContainer.attr("src", newImg.src);
                
                loader.css("display", "none"); 
    
                var currentDesc = descriptions[currentIndex];
                
                $(".desc").html(currentDesc);
            };
    
            $(".pgNum").html(currentIndex + 1);
        }

        // Define descriptions array
        var descriptions = [];
        $('.image-container a').each(function() {
            var desc = $(this).data('desc');
            descriptions.push(desc);
        });

         //html components
        $("body").append('<div class="lightbox-overlay"><div class="lightbox-content"></div></div>');
        $(".lightbox-content").append('<a class="prev">&#10094;</a>');
        $(".lightbox-content").append('<a class="next">&#10095;</a>');
        
        $(".lightbox-overlay").append('<div class="index-counter"><span class="pgNum"></span> | <span class="totalPg"></span></div>');
        $(".totalPg").html(href.length);
        //close button
        $(".lightbox-overlay").append('<button class="close">&times;</button>');
        //content/image description
        $(".lightbox-content").append('<div class="desc"></div>');

        $(".lightbox-content").append('<img loading="lazy">');
        
        $(".lightbox-content").append('<div class="image-loader"></div>');

        showLightboxImage(currentIndex);

        // disables scrolling in window
        $("body").css("overflow", "hidden");
        
        //CLICK EVENTS
        $(".lightbox-overlay>button").click(function(){
            $(".lightbox-overlay").remove();
            // enables scrolling in window
            $("body").css("overflow-y", "scroll");
        });

        $(".next").click(function(){
            showLightboxImage(currentIndex += 1);
        });

        $(".prev").click(function(){
            showLightboxImage(currentIndex -= 1);
        });


    });
});