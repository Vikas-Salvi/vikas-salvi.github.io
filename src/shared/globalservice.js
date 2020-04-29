const globalService = {
    authenticate: async () => {
        let promise = new Promise((resolve, reject) => {
            setTimeout(()=> resolve("authenticated!"), 100)
        });
        let result = await promise;      
        return result;  
    },
    signout: async () => {
        let promise = new Promise((resolve, reject) => {
            setTimeout(()=> resolve("signed out!"), 1000)
        });
        let result = await promise;
        return result;
    }
}

export default globalService