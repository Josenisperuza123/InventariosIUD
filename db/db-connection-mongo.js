const mongoose = require('mongoose');

const getConnection = async () => {

    try {
        const url = 'mongodb+srv://Admin123_mongoDb-IUD:<Admin12345>@cluster0.ot3x6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


        await mongoose.connect(url);

        console.log('Connected')

    } catch (error) {
        console.log(error)
    }


}

module.exports = {
    getConnection
}