import DappSolutions from "@/components/solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Solutions | CrySecure",
};

export default function Page() {
  return (
    <>
      <DappSolutions />
    </>
  );
}
