import { 
  DocumentArrowDownIcon, 
  EyeIcon,
  CalendarIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  TrophyIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

export default function CVPage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="section-title">Curriculum Vitae</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Download CV lengkap atau lihat ringkasan profil akademik dan profesional
          </p>
        </div>

        {/* CV Download Section */}
        <div className="mt-12">
          <div className="card bg-gradient-to-r from-primary-50 to-blue-50 text-center">
            <div className="mx-auto mb-6 h-20 w-20 rounded-full bg-primary-100 flex items-center justify-center">
              <DocumentTextIcon className="h-10 w-10 text-primary-700" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">CV Dr. Zahari</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Download CV lengkap dalam format PDF yang berisi informasi detail tentang pendidikan, 
              pengalaman kerja, publikasi, penghargaan, dan aktivitas akademik lainnya.
            </p>
            
            {/* Download Buttons */}
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 sm:justify-center">
              <a 
                href="/files/cv-dr-zahari.pdf" 
                download="CV-Dr-Zahari-2025.pdf"
                className="btn-primary inline-flex items-center justify-center"
              >
                <DocumentArrowDownIcon className="mr-2 h-5 w-5" />
                Download CV (PDF)
              </a>
              <a 
                href="/files/cv-dr-zahari.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center"
              >
                <EyeIcon className="mr-2 h-5 w-5" />
                Preview CV
              </a>
            </div>

            {/* File Info */}
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <CalendarIcon className="mr-1 h-4 w-4" />
                Update Terakhir: Oktober 2025
              </div>
              <div className="flex items-center">
                <DocumentTextIcon className="mr-1 h-4 w-4" />
                Format: PDF
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="mr-1 h-4 w-4" />
                Ukuran: 2.5 MB
              </div>
            </div>
          </div>
        </div>

        {/* CV Summary */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Ringkasan CV</h2>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Personal Information */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <AcademicCapIcon className="mr-2 h-5 w-5 text-primary-700" />
                Informasi Personal
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Nama Lengkap</span>
                  <span className="font-medium">Dr. Zahari, S.Kom.I, M.Kom.I</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Jabatan</span>
                  <span className="font-medium">Lektor Kepala</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Institusi</span>
                  <span className="font-medium">Universitas XYZ</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Fakultas</span>
                  <span className="font-medium">Ilmu Komputer</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Email</span>
                  <span className="font-medium">zahari@university.ac.id</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">NIDN</span>
                  <span className="font-medium">0123456789</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <TrophyIcon className="mr-2 h-5 w-5 text-primary-700" />
                Statistik Akademik
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Pengalaman Mengajar</span>
                  <span className="font-medium">10+ Tahun</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Publikasi Jurnal</span>
                  <span className="font-medium">15+ Paper</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Konferensi Internasional</span>
                  <span className="font-medium">25+ Presentasi</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">H-Index</span>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Sitasi</span>
                  <span className="font-medium">500+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Mahasiswa Dibimbing</span>
                  <span className="font-medium">200+ Orang</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <AcademicCapIcon className="mr-2 h-6 w-6 text-primary-700" />
            Riwayat Pendidikan
          </h3>
          <div className="space-y-4">
            <div className="card">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-primary-700 flex items-center justify-center text-white font-bold">S3</div>
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-gray-900">Doktor Ilmu Komputer</h4>
                  <p className="text-gray-600">Universitas Teknologi Indonesia (2018-2022)</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold">S2</div>
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-gray-900">Magister Ilmu Komputer</h4>
                  <p className="text-gray-600">Institut Teknologi Bandung (2015-2017)</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold">S1</div>
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-gray-900">Sarjana Ilmu Komputer</h4>
                  <p className="text-gray-600">Universitas Gadjah Mada (2011-2015)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <BriefcaseIcon className="mr-2 h-6 w-6 text-primary-700" />
            Pengalaman Kerja
          </h3>
          <div className="space-y-4">
            <div className="card">
              <h4 className="font-semibold text-gray-900">Lektor Kepala</h4>
              <p className="text-primary-700 font-medium">Universitas XYZ</p>
              <p className="text-gray-600">2020 - Sekarang</p>
              <ul className="mt-2 text-gray-700 text-sm list-disc list-inside">
                <li>Mengajar mata kuliah Machine Learning dan Data Science</li>
                <li>Membimbing penelitian mahasiswa S1 dan S2</li>
                <li>Melakukan penelitian di bidang AI dan Web Development</li>
              </ul>
            </div>
            <div className="card">
              <h4 className="font-semibold text-gray-900">Lektor</h4>
              <p className="text-primary-700 font-medium">Universitas XYZ</p>
              <p className="text-gray-600">2017 - 2020</p>
              <ul className="mt-2 text-gray-700 text-sm list-disc list-inside">
                <li>Mengajar Algoritma dan Struktur Data</li>
                <li>Koordinator Lab Pemrograman</li>
                <li>Penelitian sistem informasi berbasis web</li>
              </ul>
            </div>
            <div className="card">
              <h4 className="font-semibold text-gray-900">Asisten Ahli</h4>
              <p className="text-primary-700 font-medium">Universitas XYZ</p>
              <p className="text-gray-600">2015 - 2017</p>
              <ul className="mt-2 text-gray-700 text-sm list-disc list-inside">
                <li>Asisten dosen untuk mata kuliah Pemrograman Web</li>
                <li>Penelitian tentang web development frameworks</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills & Expertise */}
        <div className="mt-16">
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Keahlian Utama</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Python</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">JavaScript</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Java</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">PHP</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">R</span>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Frameworks & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Next.js</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Laravel</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">TensorFlow</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">PyTorch</span>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Databases</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">MySQL</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">PostgreSQL</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">MongoDB</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Redis</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="card bg-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Butuh Informasi Lebih Lanjut?</h2>
            <p className="text-gray-700 mb-6">
              Jika Anda memerlukan informasi lebih detail atau memiliki pertanyaan tentang CV saya, 
              jangan ragu untuk menghubungi saya.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 sm:justify-center">
              <a href="/kontak" className="btn-primary">
                Hubungi Saya
              </a>
              <a href="/publikasi" className="btn-secondary">
                Lihat Publikasi
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}