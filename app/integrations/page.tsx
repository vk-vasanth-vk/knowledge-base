import { Suspense } from "react";
import IntegrationsClient from "@/components/page-components/IntegrationsClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <IntegrationsClient />
    </Suspense>
  );
}
