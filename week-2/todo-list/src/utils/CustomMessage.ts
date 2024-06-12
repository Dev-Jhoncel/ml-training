interface CustomResponse {
  code: number;
  message: string;
  data?: any;
}

class CustomeMessage {
  customMessage(code: number, data: any) {
    let message: string = '';
    switch (code) {
      case 200:
        message = 'Success';
        break;
      case 404:
        message = 'No Data Found';
        break;
      case 500:
        message = 'Something went wrong';
        break;
      default:
        message = 'Undeclared Code';
        break;
    }

    const response: CustomResponse = {
      code: code,
      message: message,
      data: data == code ? null : data,
    };

    return response;
  }
}
const getCustomMessage = new CustomeMessage();
Object.freeze(getCustomMessage);
export default getCustomMessage;
