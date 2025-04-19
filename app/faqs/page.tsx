import { Suspense } from "react";
import FaqClient from "@/components/page-components/FaqClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FaqClient />
    </Suspense>
  );
}
