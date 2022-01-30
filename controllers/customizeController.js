
module.exports.get_lofi = (req, res) => {
    res.render('lofi');
}

module.exports.post_lofi = async (req, res) => {
    const { mood, avatar, time } = req.body;
    
}

