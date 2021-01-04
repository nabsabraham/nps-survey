
$("#question-1 .choice").on("click", function () {
    var ranking1 = $(this).attr("data-value")
}); 

$(".choice").on("click", function () {
    var $this = $(this);
    console.log('in the clicked');
  
    //$(".reaction").removeClass("reaction-fade-in");
    //$(".emoji").removeClass("emoji-selected");
    $this.find(".reaction").addClass("reaction-fade-in");
    //$this.find(".emoji").addClass("emoji-selected");
  });