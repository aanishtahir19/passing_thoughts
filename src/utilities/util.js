export function getExpiryTime(){
    return Date.now() + 10*1000;
}
let id = -1;
export function getNewId(){
    id++;
    return id;
}
