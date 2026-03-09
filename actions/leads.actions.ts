"use server";

import { Lead } from "@/features/admin-dashboard/components/LeadColumns";
import { LeadsService } from "@/services/leads.service";

export async function getLeads() {
  const service = new LeadsService();
  return await service.getLeads();
}
export async function createLead(data: Partial<Lead>) {
  const service = new LeadsService();
  return await service.createLead(data);
}
export async function deleteLead(id: number) {
  const service = new LeadsService();
  return await service.deleteLead(id);
}
export async function convertLead(customerId: number, leadId: number) {
  const service = new LeadsService();
  return await service.convertLead(customerId, leadId);
}
