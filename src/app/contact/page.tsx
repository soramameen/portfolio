// pages/contact.tsx
import Head from "next/head";
import ContactForm from "../components/layout/ContactForm";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | My Portfolio</title>
      </Head>
      <div className="space-y-6 max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="mb-4">お問い合わせは以下のフォームからお願いします。</p>
        <ContactForm />
      </div>
    </>
  );
}
