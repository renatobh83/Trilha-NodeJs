interface IMailProvider {
    sendmail(to: string, subject:string, variables:any,path:string): Promise<string>
}

export {IMailProvider}