const num = "vikash";
try {
    if(isNaN(num)) throw "Not a number";
    else if(num >40) throw "Enter less than 40";
    else if (num<30) throw "Num is less than 30";
} catch (error) {
    console.log('error-->', error)
    
}