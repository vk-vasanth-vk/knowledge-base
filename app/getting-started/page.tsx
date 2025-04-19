import { Suspense } from "react";
import GettingStartedClient from "@/components/page-components/GettingStartedClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GettingStartedClient />
    </Suspense>
  );
}
