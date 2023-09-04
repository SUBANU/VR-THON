var e1 = document.getElementById('event1')
var e2 = document.getElementById('event2')
var e3 = document.getElementById('event3')
var e4 = document.getElementById('event4')
var e5 = document.getElementById('event5')
var msg = document.getElementById("desc")
e1.addEventListener("mouseover", function(){
    msg.innerHTML = "new event1 of VR"
})

e2.addEventListener("mouseover", function(){
    msg.innerHTML = "new event2 of VR"
})
e3.addEventListener("mouseover", function(){
    msg.innerHTML = "new event3 of VR"
})
e4.addEventListener("mouseover", function(){
    msg.innerHTML = "new event4 of VR"
})
e5.addEventListener("mouseover", function(){
    msg.innerHTML = "new event5 of VR"
})

