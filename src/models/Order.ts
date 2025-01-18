export class Order {
    orderId!:string;
    customerId!:string;
    date!:string;
    customerName!:string;
    total!:number;
    discount!:number;
    subtotal!:number;

    constructor(orderId:string,customerId:string,date:string,customerName:string,total:number,discount:number,subtotal:number) {
        this.orderId = orderId;
        this.customerId = customerId;
        this.date = date;
        this.customerName = customerName;
        this.total = total;
        this.discount = discount;
        this.subtotal = subtotal;
    }
}