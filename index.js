let express = require('express');
let socket = require('socket.io');
let firebase = require("firebase/app");
let io;


// App setup
let app = express();
let server = app.listen(2650, function(){
    console.log("Alright... You're connected to the port!");
});

// Static files
app.use(express.static('public'));

// Socket setup & pass server
    io = socket(server);
        io.on('connection', (socket) => {
            console.log('made socket connection', socket.id);


            // Handle chat event
            socket.on('chat', function (data) {
                // console.log(data);
                io.sockets.emit('chat', data);
            });

            // Handle typing event
            socket.on('typing', function (data) {
                socket.broadcast.emit('typing', data);
            });

            socket.on('js', function (data) {
                try {
                    msg = JSON.parse(data);

                    switch (msg.type) {

                        case 'indexHTML':
                                console.log('chat')
                            break;

                        case 'chatPageHTML':
                            io.sockets.emit('vv', data)
                            break;

                        default:
                            break;
                    }

                } catch (ex) {

                }
            });

        })


