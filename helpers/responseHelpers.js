function ResponseBody(status, data, success, message) {
    this.status = status
    this.data = data
    this.meta = {
        success: success,
        message: message
    }


}
module.exports=ResponseBody