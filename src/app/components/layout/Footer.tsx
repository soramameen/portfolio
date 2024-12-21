// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 border-t border-gray-200 py-4 mt-8">
      <div className="container mx-auto px-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </div>
    </footer>
  );
}
