import { Suspense } from "react";
import TroubleShootClient from "@/components/page-components/TroubleShootClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TroubleShootClient />
    </Suspense>
  );
}
