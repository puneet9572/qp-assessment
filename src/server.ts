import App from './app';

let server  = App.instance.listen(2000);

server.on('listening', function() {
    console.log(`Server has started and listening on port : ${'2000'}`);
})