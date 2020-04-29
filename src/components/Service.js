const Service = {

    cleanRoom: () => {
        return new Promise(function (resolve, reject) {
            resolve('Cleaned the Room');
        });
    },

    removeGarbage: () => {
        return new Promise(function (resolve, reject) {
            resolve('remove garbage');
        });
    },

    winIcecream: () => {
        return new Promise(function (resolve, reject) {
            resolve('won icecream');
        });
    }

}

export default Service