/*
// Common JS
// Date: November 2013d
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
               var sliderHeight = $(".slider").width();
               var slides = $(".slider").children(".slide");
               var icons = $(".selection").children(".slider-select");
               var count = slides.length;
               var current = 0;
               var next = 1;
               var prev = count-1;
               var time = 3000;
               var timer = 0;
               var animated = false;
               var x=0;
              
              /* timer = setInterval(function(){
                            start("foward");
                        },time);
              */

              for(x=0; x<count; x++){
                  $(".selection").append('<a id='+x+' class="icon-bullet"></a>');

              }
              $(".icon-bullet").css({
                "color":"#f1f1f1",
                "margin":"2px","float":"left","border":"4px solid #babcb3",
                "border-radius":"20px"
              });

              $(".icon-bullet").click(function(e){
                  e.preventDefault();
                  var clickSlider =  this.id;
                  var tslider = timer;
                  next = clickSlider;
                  /*
                  clearInterval(timer);
                  timer = setInterval(function(){
                      start("foward");
                  },time);

                  */
                  start("foward");

              });
               $("#0").css({"color":"#28bdf1","border":"4px solid #f8f8f7"})
               $(slides[current]).css({"z-index":2});
               $(slides[next]).css({"z-index":3, "left":+sliderHeight+"px"});
               $(slides[prev]).css({"z-index":1});

               $(".nav-next").on('click',function(e){
                    start("foward");
               });

               $(".nav-prev").on('click',function(e){
                    start("backward");
               });
                console.log(prev, current, next);

               
               
               function order(){
                    $(slides[current]).css({"z-index":2});
                    $(slides[next]).css({"z-index":3, "left":+sliderHeight+"px"});
                    $(slides[prev]).css({"z-index":1});
                    animated = false;
               }

               function clear(){
                  $(slides).css({"z-index":0, "left":0});
                  animated = false;
                
               }


               function start(side){
                    if(!animated){
                        animated = true;
                        switch(side){
                            case "foward":
                              
                                $(slides[current]).css({"z-index":2, "opacity":1});
                                var x=0;
                                $(slides[next]).animate({"left":0},options.speed,options.effect,function(){
                                    $(this).fadeTo("slow",1);
                                    $(slides[prev]).css({"z-index":0});
                                    prev = current;
                                    current = next;
                                    $("#"+(next)).css({"color":"#28bdf1","border":"4px solid #f8f8f7"});
                                    $("#"+(prev)).css({"color":"#f1f1f1","border":"4px solid #babcb3"});                                
                                    if(current==(count-1)){
                                        next=0;
                                    }
                                    else{
                                        next++;
                                    }
                                    order();

                                });
                                $(slides[current]).animate({"left":"-"+sliderHeight+"px"},options.speed, options.effect, function(){
                                    $(this).fadeTo("slow",1)});
                                break;
                            case "backward":
                                
                                $(slides[current]).css({"z-index":2,"opacity":1});
                                var x =0;
                                $(slides[current]).animate({"left":+sliderHeight+"px"}, options.speed, options.effect, function(){
                                    $(slides[next]).css({"z-index":0, "top":0});
                                    next=current;
                                    current=prev;
                                    $("#"+(x+next)).css({"color":"#f1f1f1","border":"4px solid #babcb3"});
                                    $("#"+(x+prev)).css({"color":"#28bdf1","border":"4px solid #f8f8f7"});
                                    if (current==0){
                                        prev=count-1;
                                    } else {
                                        prev--;
                                    }
                                    order();
                                });
                                $(slides[prev]).animate({"left":"0px"}, options.speed, options.effect, function(){
                                  $(this).fadeTo("slow",1)});
                                break;
                        }
                    }
               }

            return this;
        };
}(jQuery));