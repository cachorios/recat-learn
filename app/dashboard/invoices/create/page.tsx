import { fetchCustomers } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { Customer } from '../../../lib/definitions';
import Form from "@/app/ui/invoices/create-form";

export default async function Page() {
    const customers = await fetchCustomers();

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Ivoices',         href: '/dashboard/invoices'},
                    { label: 'Create Invoice',  href:'/dashboard/invoices/create', active: true}
                ]}
            />
            <Form customers = {customers} />
        </main>
    )
}