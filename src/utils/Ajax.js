import request from 'superagent';

class Ajax {
    static post(url, data, query = {}){
        return new Promise((resolve, reject) => {
            const req = request.post(url).send(data);

            req.set('Accept', 'application/json');
            req.set('Content-Type', 'application/json');
            req.query({ ...query });

            req.end((error, data) => {
                if (error) {
                    if (error.status === 401) {

                    }
                    reject(error);
                } else {
                    resolve(data);
                }
            });
        });
    }
}

export default Ajax;