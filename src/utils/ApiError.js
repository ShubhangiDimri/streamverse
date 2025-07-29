class ApiError extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
        errors=[],
        stack=""
){
    super(message)
    this.statusCode= statusCode
    this.data=null
    this.message=message
    this.success=false; //because we are handling api errors not api response
    this.errors=errors

//inproduction
    if(stack){
        this.stack=stack
    }else{
        Error.captureStackTrace(this,this.constructor)
    }


}
}
export {ApiError}