import { Lead } from "@/features/admin-dashboard/components/LeadColumns";

export class LeadsService {
  private readonly API_URL_LEADS = process.env.API_URL + "/leads";
  private readonly API_URL_CONVERTION = process.env.API_URL + "/customer-leads";
  constructor() {}
  async getLeads(): Promise<Lead[] | null> {
    return fetch(this.API_URL_LEADS, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (r) => (r.status != 200 ? null : await r.json()));
  }
  async createLead(data: Partial<Lead>): Promise<Lead> {
    return fetch(this.API_URL_LEADS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(async (r) => (r.status != 201 ? null : await r.json()));
  }
  async convertLead(customerId: number, leadId: number): Promise<any> {
    const url = `${this.API_URL_CONVERTION}/vincular?customerId=${customerId}&leadId=${leadId}`;

    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (r) => (r.status != 201 ? null : await r.json()));
  }
  async deleteLead(id: number): Promise<Lead> {
    return fetch(this.API_URL_LEADS + "/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (r) => (r.status != 204 ? null : await r.json()));
  }
}
