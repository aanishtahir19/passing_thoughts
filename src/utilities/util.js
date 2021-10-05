export function getExpiryTime(){
    return Date.now() + 15*1000;
}
let id = -1;
export function getNewId(){
    id++;
    return id;
}
