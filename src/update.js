export function getServerData(user, password){
var req= new XMLHttpRequest();
req.onreadystatechange= function(){
    if(this.readyState===4 && this.status===200){
        return JSON.parse(this.responseText);//it returns a json file when its done
    }
}
req.open("GET","The url of the server or the handlers place",true,user,password)
req.send();
}
/*
The getServerData function gets all the data from the server and parses it into a json file. That json file gets returned.
The function has to be provided with username and the password.
*/
export function addMedicineToServer(user,password,medinf){
    var pos=new XMLHttpRequest();
    pos.onreadystatechange=function(){
        if(this.readyState === XMLHttpRequest.DONE && this.status === 200){
            return this.readyState; //if the ready state is 4 the it has finished the process
        }
    }
    pos.open("POST","The url of the server or the handlers place",true,user,password);
    pos.send(medinf);
}
/* This function should be used when adding a new medicine. The Medicine information (medinf) should be a string containing all the data. */

export function addNewPatientToServer(user,password,patinf){
var pos=new XMLHttpRequest();
pos.onreadystatechange=function(){
    if(this.readyState === XMLHttpRequest.DONE && this.status === 200){
        return this.readyState; //if the ready state is 4 the it has finished the process
    }
}
pos.open("POST","The url of the server or the handlers place",true,user,password);
pos.send(patinf);
}
/* this function sends the new patient information (patinf) to the server.*/ 

export function sendChatMessage(user,password,message){
    var pos=new XMLHttpRequest();
pos.onreadystatechange=function(){
    if(this.readyState === XMLHttpRequest.DONE && this.status === 200){
        return this.readyState; //if the ready state is 4 the it has finished the process
    }
}
pos.open("POST","The url of the server or the handlers place",true,user,password);
pos.send(message);
}
/* this function sends a message to the database.*/ 