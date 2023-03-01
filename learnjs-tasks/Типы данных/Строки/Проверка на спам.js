function checkSpam(str){
    let lcStr = str.toLowerCase();
    if (lcStr.includes("viagra") || lcStr.includes("ххх")){
        return true;
    }
    return false;
}
