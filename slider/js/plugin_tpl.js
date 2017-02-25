/*
// Common JS
// Date: November 2013
// Developers:
//  Jose Turcios- jturcios@sanservices.hn
// Description:
//  This is a simple boilerplate for plugins with requirejs
// ---------------------------------------------------------
*/

// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.
;(function($){

    // Defaults
        var pluginName = "consoleDisplay",
            defaults = {
                speed:1000,
                effect: 'easeOutBounce'

            };


    // Plugin Constructor
        function Plugin( element, options ) {
            this.$el        = $(element);
            this._defaults  = defaults;
            this._name      = pluginName;

            // jQuery has an extend method that merges the
            // contents of two or more objects, storing the
            // result in the first object. The first object
            // is generally empty because we don't want to alter
            // the default options for future instances of the plugin
            this.options    = $.extend( {}, defaults, options); // Merging defaults with parametes received
            // Fire up the plugin
            this.init();
            this.startSlider();
        }

    // Plugin methods
        Plugin.prototype = {
            init: function() {
                // Place initialization logic here
                // You already have access to the DOM element and
                // the options via the instance, e.g. this.$el
                // and this.options
                // you can add more functions like the one below and
                // call them like so: this.yourOtherFunction(this.$el, this.options).
                console.log("[" + this._name + "-plugin]: Initiated");
                console.log(this);

            },
 
        };

    // First we check if we can access the plugin method, then we have
    // a really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations on the same element.
        $.fn[pluginName] = function ( options ) {
               var sliderHeight = $("#slider").height();
               var slides = $("#slider").children(".slide");
               var icons = $(".slider-icon").children(".slider-select");
               var iconCount = icons.length
               var count = slides.length;
               var current = 0;
               var next = 1;
               var prev = count-1;
               var time = 4000;
               var timer = 0;
               var animated = false;

               timer = setInterval(function(){
                            start("foward");
                        },time);


               $(slides[current]).css({"z-index":2});
               $(icons[current]).addClass("selected");
               $(slides[next]).css({"z-index":3, "top":"-"+sliderHeight+"px"});
               $(slides[prev]).css({"z-index":1});

               $(".nav-next").on('click',function(e){
                    start("foward");
               });

               $(".nav-prev").on('click',function(e){
                    start("backward");
               });

               function order(){
                    $(slides[current]).css({"z-index":2});
                    $(slides[next]).css({"z-index":3, "top":"-"+sliderHeight+"px"});
                    $(slides[prev]).css({"z-index":1});
                    animated = false;
               }

               function start(side){
                    if(!animated){
                        animated = true;
                        switch(side){
                            case "foward":
                                $(slides[next]).animate({"top":0},options.speed,function(){
                                    $(slides[prev]).css({"z-index":0});
                                    $(icons[current]).addClass("selected");
                                    prev = current;
                                    current = next;
                                   
                                    $(icons[prev]).removeClass("selected");
                                    $(icons[next]).addClass("selected");
                                    if(current==(count-1)){
                                        next=0;
                                    }
                                    else{
                                        next++;
                                    }
                                    order();
                                });
                                break;
                            case "backward":
                                $(slides[current]).animate({"top":"-"+sliderHeight+"px"}, options.speed,  function(){
                                    $(slides[next]).css({"z-index":0, "top":0});
                                    $(icons[current]).removeClass("selected");
                                    next=current;
                                    current=prev;
                                    $(icons[current]).addClass("selected");
                                    if (current==0){
                                        prev=count-1;
                                    } else {
                                        prev--;
                                    }
                                    order();
                                });
                                break;
                        }
                    }
               }

            return this;
        };
}(jQuery));