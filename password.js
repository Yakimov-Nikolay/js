function password(input){

    const password = "s3cr3t!P@ssw0rd"

    let rawPass = input;


    if( rawPass==password){
        console.log("Welcome")
    }else{
        console.log("Wrong password!")
    }
}

password(["s3cr3t!P@ssw0r"])