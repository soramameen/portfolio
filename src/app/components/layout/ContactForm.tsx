// components/ContactForm.tsx
"use client"; // クライアントコンポーネントとして指定

import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email: string) => {
    // 簡単なメールアドレスのバリデーション
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // フォームのバリデーション
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("全てのフィールドを入力してください。");
      setStatus("error");
      return;
    }

    if (!validateEmail(formData.email)) {
      setErrorMessage("有効なメールアドレスを入力してください。");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/your_form_id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(
          "メッセージの送信に失敗しました。もう一度お試しください。"
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setErrorMessage("メッセージの送信中にエラーが発生しました。");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          名前
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="あなたの名前"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          メールアドレス
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          メッセージ
        </label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="あなたのメッセージをここに..."
        ></textarea>
      </div>

      {status === "error" && (
        <div className="text-red-500 text-sm">{errorMessage}</div>
      )}

      {status === "success" && (
        <div className="text-green-500 text-sm">
          メッセージが正常に送信されました。ありがとうございます！
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={status === "sending"}
          className={`w-full px-4 py-2 font-semibold text-white rounded-md ${
            status === "sending"
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {status === "sending" ? "送信中..." : "送信"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
