declare module "mailgun.js" {
  import FormData from "form-data";

  export default class Mailgun {
    constructor(formData: typeof FormData);
    client(options: { username: string; key: string }): {
      messages: {
        create(
          domain: string,
          data: {
            from: string;
            to: string;
            subject: string;
            text: string;
            html?: string;
          }
        ): Promise<any>;
      };
    };
  }
}
