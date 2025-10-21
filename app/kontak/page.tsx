'use client'

import { useState } from 'react'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  AcademicCapIcon,
  DocumentTextIcon,
  LinkIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulasi pengiriman form
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="section-title">Hubungi Saya</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Mari berkolaborasi dalam penelitian, diskusi akademik, atau pertanyaan lainnya
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="card">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Informasi Kontak</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="rounded-full bg-primary-100 p-2">
                      <EnvelopeIcon className="h-5 w-5 text-primary-700" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">zahari@unimal.ac.id</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="rounded-full bg-green-100 p-2">
                      <PhoneIcon className="h-5 w-5 text-green-700" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-900">Telepon</h3>
                    <p className="text-gray-600">+62 21 1234 5678 (Kantor)</p>
                    <p className="text-gray-600">+62 812 3456 7890 (Mobile)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="rounded-full bg-blue-100 p-2">
                      <MapPinIcon className="h-5 w-5 text-blue-700" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-900">Alamat Kantor</h3>
                    <p className="text-gray-600">
                      Fakultas Ilmu Sosial dan Ilmu Politik<br />
                      Universitas Malikussaleh<br />
                      Jl. Paloh Lada, Bukit Indah<br />
                      Lhokseumawe, Aceh 24351, Indonesia
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="text-sm font-medium text-gray-900 mb-4">Jam Konsultasi</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Senin - Kamis</span>
                    <span>09:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Jumat</span>
                    <span>09:00 - 11:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu - Minggu</span>
                    <span>Tutup</span>
                  </div>
                </div>
                <p className="mt-3 text-xs text-gray-500">
                  * Konsultasi di luar jam kerja dapat diatur melalui appointment
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Kirim Pesan</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 rounded-md bg-green-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircleIcon className="h-5 w-5 text-green-400" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-green-800">
                        Pesan berhasil dikirim!
                      </h3>
                      <div className="mt-2 text-sm text-green-700">
                        <p>Terima kasih atas pesan Anda. Saya akan merespons dalam 1-2 hari kerja.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 rounded-md bg-red-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <ExclamationTriangleIcon className="h-5 w-5 text-red-400" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">
                        Terjadi kesalahan
                      </h3>
                      <div className="mt-2 text-sm text-red-700">
                        <p>Maaf, pesan tidak dapat dikirim. Silakan coba lagi atau hubungi langsung via email.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm border px-3 py-2"
                      placeholder="Masukkan nama lengkap Anda"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm border px-3 py-2"
                      placeholder="nama@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subjek <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="subject"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm border px-3 py-2"
                  >
                    <option value="">Pilih subjek pesan</option>
                    <option value="collaboration">Kolaborasi Penelitian</option>
                    <option value="consultation">Konsultasi Akademik</option>
                    <option value="student">Pertanyaan Mahasiswa</option>
                    <option value="media">Media & Interview</option>
                    <option value="speaking">Undangan Seminar/Workshop</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Pesan <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm border px-3 py-2"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-primary-700 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'
                    } transition-colors duration-200`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Mengirim Pesan...
                      </>
                    ) : (
                      <>
                        <EnvelopeIcon className="mr-2 h-5 w-5" />
                        Kirim Pesan
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Academic Social Links */}
        <div className="mt-16">
          <div className="card bg-gradient-to-r from-primary-50 to-blue-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Profil Akademik & Sosial</h2>
            <p className="text-gray-700 text-center mb-8 max-w-2xl mx-auto">
              Terhubung dengan saya melalui platform akademik dan profesional untuk mendapatkan update terbaru 
              tentang penelitian dan publikasi.
            </p>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Google Scholar */}
              <a
                href="https://scholar.google.com/citations?hl=id&user=1XXkS4kAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <div className="rounded-full bg-blue-100 p-4 group-hover:bg-blue-200 transition-colors duration-200">
                  <AcademicCapIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Google Scholar</h3>
                <p className="mt-2 text-sm text-gray-600 text-center">
                  Publikasi & sitasi akademik
                </p>
                <div className="mt-3 inline-flex items-center text-primary-700 group-hover:text-primary-800">
                  <LinkIcon className="mr-1 h-4 w-4" />
                  <span className="text-sm">Kunjungi Profil</span>
                </div>
              </a>

              {/* Scopus */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <div className="rounded-full bg-orange-100 p-4 group-hover:bg-orange-200 transition-colors duration-200">
                  <DocumentTextIcon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Scopus</h3>
                <p className="mt-2 text-sm text-gray-600 text-center">
                  ID: 123456AB
                </p>
                <div className="mt-3 inline-flex items-center text-primary-700 group-hover:text-primary-800">
                  <LinkIcon className="mr-1 h-4 w-4" />
                  <span className="text-sm">Lihat Profil</span>
                </div>
              </a>

              {/* Sinta */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <div className="rounded-full bg-red-100 p-4 group-hover:bg-red-200 transition-colors duration-200">
                  <AcademicCapIcon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Sinta</h3>
                <p className="mt-2 text-sm text-gray-600 text-center">
                  ID: 6901252
                </p>
                <div className="mt-3 inline-flex items-center text-primary-700 group-hover:text-primary-800">
                  <LinkIcon className="mr-1 h-4 w-4" />
                  <span className="text-sm">Lihat Sinta</span>
                </div>
              </a>

              {/* ResearchGate */}
              <a
                href="https://www.researchgate.net/profile/Dr-Zahari"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <div className="rounded-full bg-teal-100 p-4 group-hover:bg-teal-200 transition-colors duration-200">
                  <svg className="h-8 w-8 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.586 0H4.414C1.988 0 0 1.988 0 4.414v15.172C0 22.012 1.988 24 4.414 24h15.172C22.012 24 24 22.012 24 19.586V4.414C24 1.988 22.012 0 19.586 0zM8.008 18.408c0 .45-.364.814-.814.814s-.814-.364-.814-.814v-6.156c0-.45.364-.814.814-.814s.814.364.814.814v6.156zM7.194 10.632c-.51 0-.924-.414-.924-.924 0-.51.414-.924.924-.924.51 0 .924.414.924.924 0 .51-.414.924-.924.924zm10.814 7.776c0 .45-.364.814-.814.814s-.814-.364-.814-.814v-2.916c0-1.188-.24-2.106-1.398-2.106-1.134 0-1.566.942-1.566 2.106v2.916c0 .45-.364.814-.814.814s-.814-.364-.814-.814v-6.156c0-.45.364-.814.814-.814s.814.364.814.814v.282c.318-.51.942-.996 2.022-.996 2.106 0 2.97 1.398 2.97 3.084v3.786z"/>
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">ResearchGate</h3>
                <p className="mt-2 text-sm text-gray-600 text-center">
                  Kolaborasi penelitian
                </p>
                <div className="mt-3 inline-flex items-center text-primary-700 group-hover:text-primary-800">
                  <LinkIcon className="mr-1 h-4 w-4" />
                  <span className="text-sm">Follow</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}