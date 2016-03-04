declare module iap {
    export interface response {

    }
    export interface errorInfo {

    }
    export interface purcahseData {
        transactionId:string
        productId:string
        purchaseDate:number
        quantity:number
        expirationDate:number
    }
    export interface iapOptions {
        requestDefaults:{
            timeout:number
        }
        applePassword:string
        googlePublicKeyPath:string
    }
    export interface iapStatic {
        APPLE:string
        GOOGLE:string
        WINDOWS:string
        AMAZON:string
        config(options:iapOptions):void
        setup(callback:(err:errorInfo)=>void):void
        validate(type:string, receipt:string, callback:(err:errorInfo, res:response)=>void)
        isValidated(res:response)
        getPurchaseData(res:response):purcahseData[]
    }
}
declare var iap:iap.iapStatic;
declare module "in-app-purchase" {
    export = iap;
}
