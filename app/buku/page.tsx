import React from 'react'

// Import dengan error handling yang lebih baik
let BookOpenIcon: React.ComponentType<any>
let DocumentTextIcon: React.ComponentType<any>
let AcademicCapIcon: React.ComponentType<any>
let ExternalLinkIcon: React.ComponentType<any>
let CalendarIcon: React.ComponentType<any>
let TagIcon: React.ComponentType<any>
let UserIcon: React.ComponentType<any>
let BuildingLibraryIcon: React.ComponentType<any>

try {
  const icons = require('@heroicons/react/24/outline')
  BookOpenIcon = icons.BookOpenIcon || (() => <span>📖</span>)
  DocumentTextIcon = icons.DocumentTextIcon || (() => <span>📄</span>)
  AcademicCapIcon = icons.AcademicCapIcon || (() => <span>🎓</span>)
  ExternalLinkIcon = icons.ExternalLinkIcon || (() => <span>🔗</span>)
  CalendarIcon = icons.CalendarIcon || (() => <span>📅</span>)
  TagIcon = icons.TagIcon || (() => <span>🏷️</span>)
  UserIcon = icons.UserIcon || (() => <span>👤</span>)
  BuildingLibraryIcon = icons.BuildingLibraryIcon || (() => <span>🏛️</span>)
} catch (error) {
  // Fallback jika import gagal
  BookOpenIcon = () => <span>📖</span>
  DocumentTextIcon = () => <span>📄</span>
  AcademicCapIcon = () => <span>🎓</span>
  ExternalLinkIcon = () => <span>🔗</span>
  CalendarIcon = () => <span>📅</span>
  TagIcon = () => <span>🏷️</span>
  UserIcon = () => <span>👤</span>
  BuildingLibraryIcon = () => <span>🏛️</span>
}

export default function BukuPage() {
  const books = [
    {
      type: 'authored',
      title: 'Komunikasi Islam di Era Digital: Transformasi Dakwah Melalui Media Sosial',
      authors: 'Dr. Zahari, S.Kom.I, M.Kom.I',
      publisher: 'Penerbit Universitas Islam Negeri',
      year: 2025,
      isbn: '978-602-123-456-7',
      pages: '298',
      abstract: 'Buku ini membahas secara komprehensif tentang transformasi dakwah Islam di era digital. Menganalisis strategi komunikasi yang efektif melalui berbagai platform media sosial, serta tantangan dan peluang yang dihadapi oleh para da\'i modern dalam menyampaikan pesan Islam.',
      keywords: ['Komunikasi Islam', 'Dakwah Digital', 'Media Sosial', 'Era Digital'],
      price: 'Rp 85.000',
      available: true,
      description: 'Panduan lengkap untuk memahami dinamika komunikasi Islam di era digital dengan pendekatan praktis dan teoritis.'
    },
    {
      type: 'authored',
      title: 'Jurnalistik Islam: Prinsip dan Praktik Media Massa dalam Perspektif Islam',
      authors: 'Dr. Zahari, S.Kom.I, M.Kom.I',
      publisher: 'CV. Media Islamika',
      year: 2024,
      isbn: '978-602-987-654-3',
      pages: '245',
      abstract: 'Menguraikan prinsip-prinsip jurnalistik dari perspektif Islam, mulai dari etika jurnalistik, objektivitas, hingga tanggung jawab media dalam menyampaikan informasi yang benar dan bermanfaat bagi umat.',
      keywords: ['Jurnalistik Islam', 'Media Massa', 'Etika Jurnalistik', 'Komunikasi'],
      price: 'Rp 75.000',
      available: true,
      description: 'Referensi penting bagi mahasiswa dan praktisi jurnalistik yang ingin memahami jurnalistik dari sudut pandang Islam.'
    },
    {
      type: 'edited',
      title: 'Antologi Penelitian Komunikasi Islam Nusantara',
      authors: 'Dr. Zahari, S.Kom.I, M.Kom.I (Editor)',
      publisher: 'Penerbit Akademia',
      year: 2024,
      isbn: '978-602-111-222-3',
      pages: '456',
      abstract: 'Kumpulan hasil penelitian terbaik tentang komunikasi Islam di Indonesia, mencakup berbagai aspek mulai dari dakwah tradisional hingga media digital, disunting dan diedit dengan standar akademik tinggi.',
      keywords: ['Penelitian Komunikasi', 'Islam Nusantara', 'Dakwah', 'Indonesia'],
      price: 'Rp 120.000',
      available: true,
      description: 'Kompilasi penelitian komunikasi Islam terkini di Indonesia dengan kontribusi dari berbagai ahli.'
    },
    {
      type: 'co-authored',
      title: 'Media dan Dakwah: Strategi Komunikasi Efektif untuk Da\'i Milenial',
      authors: 'Dr. Zahari, S.Kom.I, M.Kom.I, Prof. Dr. Ahmad Rahman, Dr. Siti Aminah',
      publisher: 'Gramedia Pustaka Utama',
      year: 2023,
      isbn: '978-602-444-555-6',
      pages: '312',
      abstract: 'Buku kolaboratif yang membahas strategi komunikasi dakwah yang sesuai dengan karakteristik generasi milenial. Menyajikan pendekatan fresh dan inovatif dalam menyampaikan pesan-pesan Islam.',
      keywords: ['Dakwah Milenial', 'Strategi Komunikasi', 'Generasi Milenial', 'Media Modern'],
      price: 'Rp 95.000',
      available: true,
      description: 'Strategi komunikasi dakwah yang disesuaikan dengan karakteristik dan preferensi generasi milenial.'
    },
    {
      type: 'authored',
      title: 'Metodologi Penelitian Komunikasi Islam: Pendekatan Kuantitatif dan Kualitatif',
      authors: 'Dr. Zahari, S.Kom.I, M.Kom.I',
      publisher: 'Penerbit Universitas Malikussaleh',
      year: 2023,
      isbn: '978-602-777-888-9',
      pages: '278',
      abstract: 'Panduan metodologi penelitian khusus untuk bidang komunikasi Islam, menggabungkan pendekatan kuantitatif dan kualitatif dengan studi kasus praktis dan relevan.',
      keywords: ['Metodologi Penelitian', 'Komunikasi Islam', 'Kuantitatif', 'Kualitatif'],
      price: 'Rp 80.000',
      available: true,
      description: 'Buku metodologi penelitian yang dirancang khusus untuk mahasiswa dan peneliti komunikasi Islam.'
    },
    {
      type: 'authored',
      title: 'Retorika Islam: Seni Berbicara dan Berargumentasi dalam Perspektif Al-Quran dan Hadits',
      authors: 'Dr. Zahari, S.Kom.I, M.Kom.I',
      publisher: 'Mizan Pustaka',
      year: 2022,
      isbn: '978-602-333-444-5',
      pages: '198',
      abstract: 'Mengkaji seni retorika dalam Islam berdasarkan Al-Quran dan Hadits, memberikan panduan praktis untuk komunikasi yang efektif sesuai dengan ajaran Islam.',
      keywords: ['Retorika Islam', 'Al-Quran', 'Hadits', 'Komunikasi Efektif'],
      price: 'Rp 65.000',
      available: false,
      description: 'Panduan seni berbicara dan berargumentasi dalam perspektif Islam yang komprehensif.'
    }
  ]

  const getTypeIcon = (type: string) => {
    try {
      switch (type) {
        case 'authored':
          return <BookOpenIcon className="h-5 w-5" />
        case 'co-authored':
          return <UserIcon className="h-5 w-5" />
        case 'edited':
          return <DocumentTextIcon className="h-5 w-5" />
        default:
          return <BookOpenIcon className="h-5 w-5" />
      }
    } catch (error) {
      return <span>📖</span>
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'authored':
        return 'bg-blue-100 text-blue-800'
      case 'co-authored':
        return 'bg-green-100 text-green-800'
      case 'edited':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeName = (type: string) => {
    switch (type) {
      case 'authored':
        return 'Penulis Tunggal'
      case 'co-authored':
        return 'Penulis Bersama'
      case 'edited':
        return 'Editor'
      default:
        return 'Buku'
    }
  }

  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="section-title">Karya Buku</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Koleksi buku dan karya tulis dalam bidang komunikasi Islam, dakwah, dan media digital
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-blue-50 rounded-lg shadow-md p-6 border border-blue-200 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <BookOpenIcon className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="mt-4 text-2xl font-bold text-gray-900">6+</h3>
            <p className="text-sm text-gray-600">Total Buku</p>
          </div>
          <div className="bg-green-50 rounded-lg shadow-md p-6 border border-green-200 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <UserIcon className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="mt-4 text-2xl font-bold text-gray-900">4+</h3>
            <p className="text-sm text-gray-600">Penulis Tunggal</p>
          </div>
          <div className="bg-purple-50 rounded-lg shadow-md p-6 border border-purple-200 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
              <DocumentTextIcon className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="mt-4 text-2xl font-bold text-gray-900">1+</h3>
            <p className="text-sm text-gray-600">Editor</p>
          </div>
          <div className="bg-orange-50 rounded-lg shadow-md p-6 border border-orange-200 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
              <BuildingLibraryIcon className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="mt-4 text-2xl font-bold text-gray-900">8+</h3>
            <p className="text-sm text-gray-600">Penerbit</p>
          </div>
        </div>

        {/* Latest Books */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Buku Terbaru</h2>
          <div className="space-y-6">
            {books.slice(0, 3).map((book, index) => (
              <div key={index} className="card hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col space-y-4">
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${getTypeColor(book.type)}`}>
                      {getTypeIcon(book.type)}
                      <span className="ml-1">{getTypeName(book.type)}</span>
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarIcon className="mr-1 h-4 w-4" />
                      {book.year}
                    </div>
                    <div className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                      book.available 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {book.available ? 'Tersedia' : 'Habis'}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                    {book.title}
                  </h3>

                  {/* Publisher Info */}
                  <div className="text-gray-600">
                    <span className="font-medium">{book.publisher}</span>
                    <span className="mx-2">•</span>
                    <span>{book.pages} halaman</span>
                    <span className="mx-2">•</span>
                    <span className="font-semibold text-primary-700">{book.price}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700">
                    {book.description}
                  </p>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-2">
                    <TagIcon className="h-4 w-4 text-gray-400 mt-1" />
                    {book.keywords.slice(0, 3).map((keyword, idx) => (
                      <span
                        key={idx}
                        className="inline-block rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200">
                    <button
                      className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                        book.available
                          ? 'bg-primary-700 text-white hover:bg-primary-800'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                      disabled={!book.available}
                    >
                      <BookOpenIcon className="mr-2 h-4 w-4" />
                      {book.available ? 'Pesan Buku' : 'Tidak Tersedia'}
                    </button>
                    <button className="inline-flex items-center text-primary-700 hover:text-primary-800 font-medium">
                      <ExternalLinkIcon className="mr-1 h-4 w-4" />
                      Lihat Preview
                    </button>
                    <span className="text-sm text-gray-500 flex items-center">
                      ISBN: {book.isbn}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Books List */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Daftar Buku Lengkap</h2>
          <div className="space-y-8">
            {books.map((book, index) => (
              <div key={index} className="card hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col space-y-4">
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${getTypeColor(book.type)}`}>
                      {getTypeIcon(book.type)}
                      <span className="ml-1">{getTypeName(book.type)}</span>
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarIcon className="mr-1 h-4 w-4" />
                      {book.year}
                    </div>
                    <div className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                      book.available 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {book.available ? 'Tersedia' : 'Habis'}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                    {book.title}
                  </h3>

                  {/* Authors */}
                  <p className="text-gray-700 font-medium">
                    {book.authors}
                  </p>

                  {/* Publisher Info */}
                  <div className="text-gray-600">
                    <span className="font-medium">{book.publisher}</span>
                    <span className="mx-2">•</span>
                    <span>{book.pages} halaman</span>
                    <span className="mx-2">•</span>
                    <span>ISBN: {book.isbn}</span>
                  </div>

                  {/* Price */}
                  <div className="text-lg font-semibold text-primary-700">
                    {book.price}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 italic">
                    {book.description}
                  </p>

                  {/* Abstract */}
                  <p className="text-gray-700 text-justify">
                    {book.abstract}
                  </p>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-2">
                    <TagIcon className="h-4 w-4 text-gray-400 mt-1" />
                    {book.keywords.map((keyword, idx) => (
                      <span
                        key={idx}
                        className="inline-block rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200">
                    <button
                      className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                        book.available
                          ? 'bg-primary-700 text-white hover:bg-primary-800'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                      disabled={!book.available}
                    >
                      <BookOpenIcon className="mr-2 h-4 w-4" />
                      {book.available ? 'Pesan Buku' : 'Tidak Tersedia'}
                    </button>
                    <button className="inline-flex items-center text-primary-700 hover:text-primary-800 font-medium">
                      <ExternalLinkIcon className="mr-1 h-4 w-4" />
                      Lihat Preview
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact for Books */}
        <div className="mt-16">
          <div className="card bg-gradient-to-r from-primary-50 to-blue-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pemesanan Buku</h2>
            <p className="text-gray-700 mb-6">
              Untuk pemesanan buku atau informasi lebih lanjut, silakan hubungi melalui:
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">📧</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Email</p>
                  <p className="text-sm text-gray-600">zahari@unimal.ac.id</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 font-semibold">📱</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">WhatsApp</p>
                  <p className="text-sm text-gray-600">+62 812-3456-7890</p>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600">
                <strong>Catatan:</strong> Semua buku tersedia dalam format cetak dan digital. 
                Harga dapat berubah sewaktu-waktu. Untuk pembelian dalam jumlah banyak 
                (institusi/universitas), tersedia diskon khusus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}