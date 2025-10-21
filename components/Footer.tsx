export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="flex flex-col items-center space-y-2 md:items-start">
            <h3 className="text-lg font-semibold text-white">Dr. Zahari, S.Kom.I, M.Kom.I</h3>
            <p className="text-sm text-gray-300">Dosen & Peneliti di bidang Ilmu Komunikasi</p>
          </div>
          
          <div className="flex flex-col items-center space-y-2 md:items-end">
            <p className="text-sm text-gray-300">
              © {currentYear} Dr. Zahari. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}