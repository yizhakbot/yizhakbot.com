import type { Metadata } from "next";
import ContactView from "./ContactView";

export const metadata: Metadata = {
  title: "Contact – Yizhak Bot",
  description: "Get in touch with Yizhak Bot and BQR Reliability Engineering Ltd.",
};

export default function ContactPage() {
  return <ContactView />;
}
