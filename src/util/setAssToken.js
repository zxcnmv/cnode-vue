export default {
    writeAssToken(data){
        localStorage.setItem('assToken',data);
    },
    getAssToken(){
        return localStorage.getItem('assToken')||'';
    }
}