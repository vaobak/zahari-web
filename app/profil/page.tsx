import { 
  AcademicCapIcon, 
  BriefcaseIcon, 
  LightBulbIcon,
  CalendarIcon,
  MapPinIcon,
  CheckCircleIcon,
  DocumentArrowDownIcon,
  EyeIcon,
  DocumentTextIcon,
  TrophyIcon
} from '@heroicons/react/24/outline'

export default function ProfilPage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto mb-8 h-32 w-32 rounded-full overflow-hidden">
            <img 
              src="/images/foto-zahari.avif" 
              alt="Dr. Zahari" 
              className="h-full w-full object-cover"
            />
          </div>
          <h1 className="section-title">Dr. Zahari, S.Kom.I, M.Kom.I</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Asisten Ahli - Dosen dan Peneliti Komunikasi Islam
          </p>
        </div>

        {/* Education Section */}
        <section className="mt-16">
          <div className="mb-8 flex items-center">
            <div className="rounded-full bg-primary-100 p-3">
              <AcademicCapIcon className="h-6 w-6 text-primary-700" />
            </div>
            <h2 className="ml-4 text-2xl font-bold text-gray-900">Riwayat Pendidikan</h2>
          </div>

          <div className="space-y-8">
            {/* S3 */}
            <div className="card">
              <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-x-6 lg:space-y-0">
                <div className="flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-700 text-white">
                    <span className="text-xl font-bold">S3</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Doktor (S3)
                  </h3>
                  <p className="text-primary-700 font-medium">Universitas Islam Negeri Sumatera Utara Medan</p>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <CalendarIcon className="mr-1 h-4 w-4" />
                      2019
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="mr-1 h-4 w-4" />
                      Medan, Indonesia
                    </div>
                  </div>
                  <p className="mt-3 text-gray-700">
                    Program Doktor Komunikasi Islam
                  </p>
                </div>
              </div>
            </div>

            {/* S2 */}
            <div className="card">
              <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-x-6 lg:space-y-0">
                <div className="flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 text-white">
                    <span className="text-xl font-bold">S2</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Magister Komunikasi Islam (S2)
                  </h3>
                  <p className="text-primary-700 font-medium">IAIN Sumatera Utara</p>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <CalendarIcon className="mr-1 h-4 w-4" />
                      2014
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="mr-1 h-4 w-4" />
                      Medan, Indonesia
                    </div>
                  </div>
                  <p className="mt-3 text-gray-700">
                    Program Magister Komunikasi Islam
                  </p>
                </div>
              </div>
            </div>

            {/* S1 */}
            <div className="card">
              <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-x-6 lg:space-y-0">
                <div className="flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 text-white">
                    <span className="text-xl font-bold">S1</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Sarjana Komunikasi Islam (S1)
                  </h3>
                  <p className="text-primary-700 font-medium">STAIN Malikussaleh</p>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <CalendarIcon className="mr-1 h-4 w-4" />
                      2012
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="mr-1 h-4 w-4" />
                      Aceh, Indonesia
                    </div>
                  </div>
                  <p className="mt-3 text-gray-700">
                    Program Sarjana Komunikasi Islam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Information */}
        <section className="mt-16">
          <div className="mb-8 flex items-center">
            <div className="rounded-full bg-indigo-100 p-3">
              <DocumentTextIcon className="h-6 w-6 text-indigo-700" />
            </div>
            <h2 className="ml-4 text-2xl font-bold text-gray-900">Informasi Personal</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Pribadi</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Nama Lengkap</span>
                  <span className="font-medium">Dr. Zahari, S.Kom.I, M.Kom.I</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">NIPK</span>
                  <span className="font-medium">198904062024211001</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">NIDN</span>
                  <span className="font-medium">1306048902</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Jabatan</span>
                  <span className="font-medium">Asisten Ahli</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Institusi</span>
                  <span className="font-medium">Universitas Malikussaleh</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Email</span>
                  <span className="font-medium">zahari@unimal.ac.id</span>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Profil Akademik</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Google Scholar</span>
                    <a href="https://scholar.google.com/citations?hl=id&user=1XXkS4kAAAAJ" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-primary-700 hover:text-primary-800 text-sm"
                    >
                      Lihat Profil
                    </a>
                  </div>
                  <p className="text-sm text-gray-500">ID: 1XXkS4kAAAAJ</p>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Scopus ID</span>
                  <span className="font-medium">123456AB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sinta ID</span>
                  <span className="font-medium">6901252</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bidang Penelitian</span>
                  <span className="font-medium">Komunikasi Islam</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Teaching Experience */}
        <section className="mt-16">
          <div className="mb-8 flex items-center">
            <div className="rounded-full bg-green-100 p-3">
              <BriefcaseIcon className="h-6 w-6 text-green-700" />
            </div>
            <h2 className="ml-4 text-2xl font-bold text-gray-900">Pengalaman Mengajar</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900">Mata Kuliah yang Diampu</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <div>
                    <span className="font-medium">Komunikasi Islam</span>
                    <p className="text-sm text-gray-600">S1 - Semester 1</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <div>
                    <span className="font-medium">Media dan Dakwah</span>
                    <p className="text-sm text-gray-600">S1 - Semester 3</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <div>
                    <span className="font-medium">Jurnalistik Islam</span>
                    <p className="text-sm text-gray-600">S1 - Semester 4</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <div>
                    <span className="font-medium">Komunikasi Massa</span>
                    <p className="text-sm text-gray-600">S1 - Semester 5</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <div>
                    <span className="font-medium">Metodologi Penelitian Komunikasi</span>
                    <p className="text-sm text-gray-600">S1/S2 - Semester 6/2</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900">Statistik Mengajar</h3>
              <div className="mt-4 space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Pengalaman Mengajar</span>
                  <span className="font-semibold">6+ Tahun</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Mahasiswa Dibimbing</span>
                  <span className="font-semibold">100+ Mahasiswa</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tesis/Skripsi Dibimbing</span>
                  <span className="font-semibold">25+ Karya Ilmiah</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rating Evaluasi</span>
                  <span className="font-semibold">4.7/5.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Jabatan Akademik</span>
                  <span className="font-semibold">Asisten Ahli</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="mt-16">
          <div className="mb-8 flex items-center">
            <div className="rounded-full bg-yellow-100 p-3">
              <LightBulbIcon className="h-6 w-6 text-yellow-700" />
            </div>
            <h2 className="ml-4 text-2xl font-bold text-gray-900">Bidang Keahlian</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900">Komunikasi Islam</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Teori Komunikasi Islam</li>
                <li>• Komunikasi Antar Budaya</li>
                <li>• Etika Komunikasi Islam</li>
                <li>• Retorika dalam Islam</li>
                <li>• Komunikasi Interpersonal</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900">Media & Dakwah</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Media Massa dan Islam</li>
                <li>• Strategi Dakwah Digital</li>
                <li>• Komunikasi Persuasif</li>
                <li>• Media Sosial untuk Dakwah</li>
                <li>• Analisis Konten Media</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900">Jurnalistik</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Jurnalistik Islam</li>
                <li>• Penulisan Berita</li>
                <li>• Media Online</li>
                <li>• Fotojurnalistik</li>
                <li>• Etika Jurnalistik</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900">Penelitian Komunikasi</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Metodologi Penelitian</li>
                <li>• Analisis Wacana</li>
                <li>• Penelitian Kualitatif</li>
                <li>• Studi Kasus</li>
                <li>• Analisis Data</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900">Media Digital</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Literasi Media</li>
                <li>• Konten Digital</li>
                <li>• Multimedia</li>
                <li>• Platform Digital</li>
                <li>• Media Interaktif</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900">Publikasi & Karya</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Jurnal Komunikasi Islam</li>
                <li>• Prosiding Konferensi</li>
                <li>• Buku dan Artikel</li>
                <li>• Review Sejawat</li>
                <li>• Penelitian Kolaboratif</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="mt-16">
          <div className="card bg-gradient-to-r from-primary-50 to-blue-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Penghargaan & Pengakuan</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-gray-900">Best Teacher Award</h3>
                <p className="text-sm text-gray-600">Universitas XYZ, 2023</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Research Excellence Award</h3>
                <p className="text-sm text-gray-600">Indonesian Computer Society, 2022</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Outstanding Publication</h3>
                <p className="text-sm text-gray-600">IEEE Indonesia, 2021</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Innovation in Teaching</h3>
                <p className="text-sm text-gray-600">Ministry of Education, 2020</p>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mt-16">
          <div className="mb-8 flex items-center">
            <div className="rounded-full bg-blue-100 p-3">
              <BriefcaseIcon className="h-6 w-6 text-blue-700" />
            </div>
            <h2 className="ml-4 text-2xl font-bold text-gray-900">Pengalaman Kerja</h2>
          </div>
          
          <div className="space-y-6">
            <div className="card">
              <h4 className="font-semibold text-gray-900 text-lg">Asisten Ahli</h4>
              <p className="text-primary-700 font-medium">Universitas Malikussaleh</p>
              <p className="text-gray-600">2019 - Sekarang</p>
              <ul className="mt-3 text-gray-700 text-sm list-disc list-inside space-y-1">
                <li>Mengajar mata kuliah Komunikasi Islam dan Media Dakwah</li>
                <li>Membimbing penelitian mahasiswa S1 bidang Komunikasi Islam</li>
                <li>Melakukan penelitian di bidang Media dan Dakwah Digital</li>
                <li>Aktif dalam kegiatan pengabdian masyarakat</li>
              </ul>
            </div>
            
            <div className="card">
              <h4 className="font-semibold text-gray-900 text-lg">Dosen Luar Biasa</h4>
              <p className="text-primary-700 font-medium">IAIN Lhokseumawe</p>
              <p className="text-gray-600">2016 - 2019</p>
              <ul className="mt-3 text-gray-700 text-sm list-disc list-inside space-y-1">
                <li>Mengajar Jurnalistik Islam dan Komunikasi Massa</li>
                <li>Koordinator kegiatan media kampus</li>
                <li>Penelitian tentang media sosial dan dakwah</li>
                <li>Pembimbing organisasi kemahasiswaan</li>
              </ul>
            </div>
            
            <div className="card">
              <h4 className="font-semibold text-gray-900 text-lg">Asisten Peneliti</h4>
              <p className="text-primary-700 font-medium">IAIN Sumatera Utara</p>
              <p className="text-gray-600">2014 - 2016</p>
              <ul className="mt-3 text-gray-700 text-sm list-disc list-inside space-y-1">
                <li>Asisten penelitian komunikasi dan media Islam</li>
                <li>Mengumpulkan dan menganalisis data penelitian</li>
                <li>Membantu penulisan artikel jurnal</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Academic Statistics */}
        <section className="mt-16">
          <div className="mb-8 flex items-center">
            <div className="rounded-full bg-purple-100 p-3">
              <TrophyIcon className="h-6 w-6 text-purple-700" />
            </div>
            <h2 className="ml-4 text-2xl font-bold text-gray-900">Statistik Akademik</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="card">
              <h4 className="font-semibold text-gray-900 mb-4">Pengalaman</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Pengalaman Mengajar</span>
                  <span className="font-medium">6+ Tahun</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Mahasiswa Dibimbing</span>
                  <span className="font-medium">50+ Orang</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tesis/Skripsi Dibimbing</span>
                  <span className="font-medium">15+ Karya</span>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h4 className="font-semibold text-gray-900 mb-4">Publikasi</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Publikasi Jurnal</span>
                  <span className="font-medium">8+ Paper</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Konferensi Nasional</span>
                  <span className="font-medium">12+ Presentasi</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sinta ID</span>
                  <span className="font-medium">6901252</span>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h4 className="font-semibold text-gray-900 mb-4">Identitas Akademik</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">NIDN</span>
                  <span className="font-medium">1306048902</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Scopus ID</span>
                  <span className="font-medium">123456AB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Jabatan Akademik</span>
                  <span className="font-medium">Asisten Ahli</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CV Download Section */}
        <section className="mt-16">
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
        </section>
      </div>
    </div>
  )
}