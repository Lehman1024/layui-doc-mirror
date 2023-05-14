module.exports = (req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const parsedBody = JSON.parse(body);
            res.end(decodeURIComponent(parsedBody.html));
        });
    } else {
        res.status(405).send("Method Not Allowed");
    }
};
