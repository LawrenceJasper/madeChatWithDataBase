
// Make connection
let socket = io.connect('http://10.10.20.157:2650');
let randomColor = Math.floor(Math.random()*16777215).toString(16);
let count1 =0;



// Query DOM
let message = document.getElementById('message'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');

message.addEventListener('keypress', function(event){
   if(event.key === 'Enter'){
       document.getElementById('send').click();

   }
});
// Emit events
    btn.addEventListener('click', function () {
        socket.emit('chat', {
            message: message.value,
            handle: 'boop1'
        });
        message.value = "";

    });

    // let count =0;
// Listen for events
socket.on('chat', function(data){
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong class = strongClass>' + data.handle + ': </strong>' + data.message + '</p>';
    let title = document.getElementsByClassName('strongClass')
    title[count1].id = 'user' + count1;
    let title2 = document.getElementById('user' + count1);
    //colorMan = randomColor;
    title2.style.color = randomColor;
    count1++
});

socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});



socket.on('vv', function(){
    console.log('hi')
})






