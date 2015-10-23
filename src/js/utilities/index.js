
keyGen = num => {
    var str = '';
    for(var i = 0; i < num; i++) {
        str += Math.floor((Math.random() * 10));
    }
    return str;
};

module.exports = {
    keyGen
}