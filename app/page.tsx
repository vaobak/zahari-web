import Image from 'next/image'
import Link from 'next/link'
import { 
  AcademicCapIcon,
  CheckIcon, 
  BookOpenIcon, 
  EnvelopeIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline'

export default function HomePage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        {/* Background Image with Opacity */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url(/images/background.avif)'
          }}
        ></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
            {/* Profile Photo */}
            <div className="flex justify-center lg:justify-start-0">
              <div className="relative">
                <div className="h-80 w-80 overflow-hidden rounded-full border-4 border-white shadow-2xl">
                  <img 
                    src="/images/foto-zahari.avif" 
                    alt="Dr. Zahari" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-0 rounded-full bg-primary-500 p-1 shadow-lg" style={{ right: '50px' }}>
                  <CheckIcon className="h-9 w-9 text-white" />
                </div>
              </div>
            </div>

            {/* Profile Information */}
            <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-4xl">
                  Dr. Zahari, S.Kom.I, M.Kom.I
                </h1>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-primary-100">
                  Dosen & Peneliti Komunikasi
                </h2>
                <p className="text-lg text-primary-200">
                  Universitas Malikussaleh • Fakultas Ilmu Sosial dan Ilmu Politik
                </p>
              </div>

              {/* Motivational Quote */}
              <blockquote className="border-l-4 border-primary-300 pl-6 italic">
                <p className="text-lg text-primary-100">
                  "Komunikasi yang baik adalah jembatan yang menghubungkan hati dan pikiran, 
                  sedangkan komunikasi Islam adalah cahaya yang menerangi jalan menuju kebenaran."
                </p>
              </blockquote>

              {/* CTA Buttons */}
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link 
                  href="/profil" 
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Lihat Profil Lengkap
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  href="/kontak" 
                  className="btn-secondary bg-white text-primary-700 hover:bg-gray-50 inline-flex items-center justify-center"
                >
                  <EnvelopeIcon className="mr-2 h-4 w-4" />
                  Hubungi Saya
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Expertise */}
            <div className="bg-blue-50 rounded-lg shadow-md p-6 border border-blue-200 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-blue-50 p-4">
                  <AcademicCapIcon className="h-8 w-8 text-blue-700" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Bidang Keahlian</h3>
              <p className="mt-2 text-gray-600">
                Komunikasi Islam, Media & Dakwah, Jurnalistik Islam, dan Metodologi Penelitian Komunikasi
              </p>
              <Link 
                href="/profil" 
                className="mt-4 inline-flex items-center text-blue-700 hover:text-blue-800"
              >
                Selengkapnya
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Publications */}
            <div className="bg-green-50 rounded-lg shadow-md p-6 border border-green-200 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-green-50 p-4">
                  <BookOpenIcon className="h-8 w-8 text-green-700" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Publikasi</h3>
              <p className="mt-2 text-gray-600">
                Jurnal nasional, artikel ilmiah, dan penelitian di bidang komunikasi Islam
              </p>
              <Link 
                href="/publikasi" 
                className="mt-4 inline-flex items-center text-green-700 hover:text-green-800"
              >
                Lihat Publikasi
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Teaching */}
            <div className="bg-yellow-50 rounded-lg shadow-md p-6 border border-yellow-200 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-yellow-50 p-4">
                  <EnvelopeIcon className="h-8 w-8 text-yellow-700" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Pengajaran</h3>
              <p className="mt-2 text-gray-600">
                Mengajar mahasiswa S1 dengan pengalaman lebih dari 6 tahun di bidang Komunikasi Islam
              </p>
              <Link 
                href="/profil" 
                className="mt-4 inline-flex items-center text-yellow-700 hover:text-yellow-800"
              >
                Lihat Profil & CV
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Books */}
            <div className="bg-gradient-to-br from-white to-gray-100 rounded-lg shadow-md p-6 border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-gradient-to-br from-gray-50 to-gray-100 p-4">
                  <BookOpenIcon className="h-8 w-8 text-gray-700" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Buku</h3>
              <p className="mt-2 text-gray-600">
                Karya tulis dan buku-buku dalam bidang komunikasi Islam, dakwah, dan media digital
              </p>
              <Link 
                href="/buku" 
                className="mt-4 inline-flex items-center text-gray-700 hover:text-gray-800"
              >
                Lihat Buku
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Update Terbaru</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Informasi terkini tentang penelitian, publikasi, dan aktivitas akademik
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="card">
              <div className="mb-4">
                <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                  Publikasi Terbaru
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Media Dakwah di Era Digital
              </h3>
              <p className="mt-2 text-gray-600">
                Artikel terbaru tentang strategi komunikasi dakwah melalui media digital dan platform online.
              </p>
              <p className="mt-2 text-sm text-gray-500">Oktober 2025</p>
            </div>

            <div className="card">
              <div className="mb-4">
                <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                  Konferensi
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Seminar Komunikasi Islam
              </h3>
              <p className="mt-2 text-gray-600">
                Presentasi penelitian di seminar nasional tentang komunikasi Islam dan media massa.
              </p>
              <p className="mt-2 text-sm text-gray-500">September 2025</p>
            </div>

            <div className="card">
              <div className="mb-4">
                <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">
                  Penelitian
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Proyek Penelitian Komunikasi
              </h3>
              <p className="mt-2 text-gray-600">
                Memulai penelitian baru dalam bidang komunikasi antar budaya dan media sosial untuk dakwah.
              </p>
              <p className="mt-2 text-sm text-gray-500">Agustus 2025</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}