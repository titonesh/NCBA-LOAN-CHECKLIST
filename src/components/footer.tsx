export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          

         

          
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-white-500 text-sm">
          © {new Date().getFullYear()} NCBA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
