const NASA = require('http');

const httpServer = NASA.createServer(function(req, res) {

    if(req.url === '/Mercury') {
        res.writeHead(201, {'Content-Type' : 'text/plain'});
        res.end('Mercury is the smallest of the eight planets. It is also the closest to the sun. Mercury goes around the sun the fastest of all the planets. Mercury has no moons.\n');
     }  else if (req.url === '/Venus') {
     	res.writeHead(202, {'Content-Type' : 'text/plain'});
     	res.end('Venus is the second planet from the Sun, and is Earths closest neighbor in the solar system. Venus is the brightest object in the sky after the Sun and the Moon.\n');
     }	else if (req.url === '/Mars') {
    	res.writeHead(202, {'Content-Type' : 'text/plain'});
    	res.end('Mars is known as the Red Planet. Mars is more than 142 million miles from the sun. The planet is about one-sixth the size of Earth.\n'); 
     }	else if(req.url === '/Jupiter') {
    	res.writeHead(205, {'Content-Type' : 'text/plain'});
        res.end('Jupiter is the largest planet in the solar system. Jupiter is so big that all the other planets in the solar system could fit inside it. More than 1,300 Earths would fit inside Jupiter.\n');
     } else if(req.url === '/Pluto') {
    	res.writeHead (206, {'Content-Type' : 'text/plain'});
    	res.end('Pluto is a dwarf planet. A dwarf planet travels around, or orbits, the sun just like other planets. But it is much smaller.\n');
     } else if(req.url === '/Saturn') {
     	res.writeHead(207, {'Content-Type' : 'text/plain'});
     	res.end('Saturn is the second largest planet in the solar system. It is a gas giant and has rings.\n');
     } else if (req.url === '/Uranus') {
        res.writeHead(208, {'Content-Type' : 'text/plain'});
        res.end('Uranus has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.\n');
     } else if(req.url ==='/Neptune') {
     	res.writeHead(209, {'Content-Type' : 'text/plain'});
     	res.end('Neptune is the densest giant planet. It is 17 times the mass of Earth\n');
     } else {
        res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end('Earth is the third planet from the Sun.');
    }
});

httpServer.listen(2017);