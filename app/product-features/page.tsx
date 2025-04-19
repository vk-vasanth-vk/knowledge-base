import { Suspense } from "react";
import ProductFeatureClient from "@/components/page-components/ProductFeatureClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductFeatureClient />
    </Suspense>
  );
}
