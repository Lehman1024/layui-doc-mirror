module.exports = (req, res) => {
    if (req.method === 'POST') {
        res.send(decodeURIComponent(req.body.html));
    } else {
        res.status(405).send("Method Not Allowed");
    }
};
