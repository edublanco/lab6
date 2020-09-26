$("#button").on("click",function(e){
    e.preventDefault()
    var input = $("#input").val()
    console.log(input)
    $("#bList").append(`<li><div id = "buttons2"><div> ${input} </div><button type="submit" class="checkC"id= "check">check</button><button type="submit" class ="deleteC"id= "delete">delete</button></div></li>`)
    
})


$("#bList").on("click",".checkC",function(e){
    e.preventDefault()
    console.log("check")
    $(this).parent().parent().toggleClass('line')
})

$("#bList").on("click",".deleteC",function(e){
    e.preventDefault()
    console.log("delete")
    $(this).parent().parent().remove()
})