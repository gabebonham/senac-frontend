"use server";

import { Customer } from "@/features/admin-dashboard/components/CustomerColumns";
import { CustomersService } from "@/services/customers.service";

export async function getCustomers() {
  const service = new CustomersService();
  return service.getCustomers();
}
export async function createCustomer(data: Partial<Customer>) {
  const service = new CustomersService();
  return await service.createCustomer(data);
}
