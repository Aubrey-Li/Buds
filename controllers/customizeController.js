const Lofi = require("../models/Lofi");

module.exports.get_lofi = (req, res) => {
    // res.render('lofi');
}

module.exports.post_lofi = async (req, res) => {
    const { mood, avatar, time } = req.body;
    if (mood === "Chill") {
        const lofi = await Lofi.create({ music: './barradeen-bedtime-after-a-coffee.mp3', avatar: './purpleFlowerGuy.gif', bg: './blueSkyBkg.png'});
        console.log(lofi)
        res.render('lofichillav1morning', { lofi: lofi});
    }
}

