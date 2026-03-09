import { Customer } from "@/features/admin-dashboard/components/CustomerColumns";

export class CustomersService {
  private readonly API_URL_CUSTOMERS = process.env.API_URL + "/customers";
  constructor() {}
  async getCustomers(): Promise<Customer[]> {
    return fetch(this.API_URL_CUSTOMERS, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (r) => (r.status != 200 ? null : await r.json()));
  }
  async createCustomer(data: Partial<Customer>): Promise<Customer> {
    return fetch(this.API_URL_CUSTOMERS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(async (r) => (r.status != 201 ? null : await r.json()));
  }
}
