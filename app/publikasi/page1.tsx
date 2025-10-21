import React from 'react'

// Import dengan error handling yang lebih baik
let BookOpenIcon: React.ComponentType<any>
let DocumentTextIcon: React.ComponentType<any>
let AcademicCapIcon: React.ComponentType<any>
let ExternalLinkIcon: React.ComponentType<any>
let CalendarIcon: React.ComponentType<any>
let TagIcon: React.ComponentType<any>
let GlobeAltIcon: React.ComponentType<any>
let PresentationChartLineIcon: React.ComponentType<any>
let BookmarkSquareIcon: React.ComponentType<any>
let ChartBarIcon: React.ComponentType<any>

try {
  const icons = require('@heroicons/react/24/outline')
  BookOpenIcon = icons.BookOpenIcon || (() => <span>📖</span>)
  DocumentTextIcon = icons.DocumentTextIcon || (() => <span>📄</span>)
  AcademicCapIcon = icons.AcademicCapIcon || (() => <span>🎓</span>)
  ExternalLinkIcon = icons.ExternalLinkIcon || (() => <span>🔗</span>)
  CalendarIcon = icons.CalendarIcon || (() => <span>📅</span>)
  TagIcon = icons.TagIcon || (() => <span>🏷️</span>)
  GlobeAltIcon = icons.GlobeAltIcon || (() => <span>🌍</span>)
  PresentationChartLineIcon = icons.PresentationChartLineIcon || (() => <span>📊</span>)
  BookmarkSquareIcon = icons.BookmarkSquareIcon || (() => <span>📚</span>)
  ChartBarIcon = icons.ChartBarIcon || (() => <span>📈</span>)
} catch (error) {
  // Fallback jika import gagal
  BookOpenIcon = () => <span>📖</span>
  DocumentTextIcon = () => <span>📄</span>
  AcademicCapIcon = () => <span>🎓</span>
  ExternalLinkIcon = () => <span>🔗</span>
  CalendarIcon = () => <span>📅</span>
  TagIcon = () => <span>🏷️</span>
  GlobeAltIcon = () => <span>🌍</span>
  PresentationChartLineIcon = () => <span>📊</span>
  BookmarkSquareIcon = () => <span>📚</span>
  ChartBarIcon = () => <span>📈</span>
}

export default function PublikasiPage() {
  // Safe icon wrapper function
  const SafeIcon = ({ icon: Icon, className, fallback = "📄" }: { 
    icon: React.ComponentType<any>, 
    className?: string, 
    fallback?: string 
  }) => {
    try {
      if (Icon && typeof Icon === 'function') {
        return <Icon className={className} />
      }
      return <span>{fallback}</span>
    } catch (error) {
      return <span>{fallback}</span>
    }
  }

  const publications = [
    {
      type: 'journal',
      title: 'Advanced Machine Learning Algorithms for Big Data Analytics in Healthcare Systems',
      authors: 'Zahari, Z., Smith, J., Anderson, P.',
      journal: 'IEEE Transactions on Biomedical Engineering',
      year: 2025,
      volume: '72',
      issue: '3',
      pages: '245-258',
      doi: '10.1109/TBME.2025.123456',
      abstract: 'This paper presents novel machine learning algorithms specifically designed for analyzing large-scale healthcare data...',
      keywords: ['Machine Learning', 'Healthcare', 'Big Data', 'Analytics'],
      url: 'https://doi.org/10.1109/TBME.2025.123456'
    },
    {
      type: 'conference',
      title: 'Real-time Web Application Performance Optimization using Next.js and Edge Computing',
      authors: 'Zahari, Z., Rahman, A.',
      journal: 'Proceedings of International Conference on Web Technologies (ICWT 2025)',
      year: 2025,
      pages: '112-119',
      location: 'Singapore',
      abstract: 'We propose a comprehensive approach to optimize web application performance by leveraging Next.js features...',
      keywords: ['Web Development', 'Performance', 'Next.js', 'Edge Computing'],
      url: 'https://example.com/icwt2025/paper123'
    },
    {
      type: 'journal',
      title: 'Deep Learning Models for Predictive Analysis in Educational Data Mining',
      authors: 'Zahari, Z., Williams, M., Chen, L.',
      journal: 'Computers & Education',
      year: 2024,
      volume: '195',
      pages: '104-117',
      doi: '10.1016/j.compedu.2024.104117',
      abstract: 'This study investigates the application of deep learning models for predicting student performance...',
      keywords: ['Deep Learning', 'Educational Data Mining', 'Predictive Analysis'],
      url: 'https://doi.org/10.1016/j.compedu.2024.104117'
    },
    {
      type: 'book-chapter',
      title: 'Modern Web Development Frameworks: A Comprehensive Comparison',
      authors: 'Zahari, Z.',
      journal: 'Advances in Web Technologies, Springer Nature',
      year: 2024,
      pages: '45-72',
      editor: 'Johnson, R., Lee, S.',
      abstract: 'This chapter provides a detailed comparison of modern web development frameworks including React, Vue.js, and Angular...',
      keywords: ['Web Frameworks', 'React', 'Vue.js', 'Angular'],
      url: 'https://link.springer.com/chapter/10.1007/978-3-030-12345-6_3'
    },
    {
      type: 'journal',
      title: 'Blockchain Technology Integration in Academic Information Systems',
      authors: 'Zahari, Z., Kumar, S., Thompson, D.',
      journal: 'Journal of Educational Technology & Society',
      year: 2024,
      volume: '27',
      issue: '2',
      pages: '88-102',
      abstract: 'This research explores the potential of blockchain technology for securing academic records...',
      keywords: ['Blockchain', 'Education Technology', 'Information Systems'],
      url: 'https://www.jstor.org/stable/jeductechsoci.27.2.88'
    },
    {
      type: 'conference',
      title: 'Artificial Intelligence in Higher Education: Opportunities and Challenges',
      authors: 'Zahari, Z., Garcia, M.',
      journal: 'International Conference on Artificial Intelligence in Education (AIED 2023)',
      year: 2023,
      pages: '234-241',
      location: 'Tokyo, Japan',
      abstract: 'This paper discusses the current state and future prospects of AI implementation in higher education...',
      keywords: ['Artificial Intelligence', 'Higher Education', 'Technology Integration'],
      url: 'https://link.springer.com/chapter/10.1007/978-3-031-11644-5_19'
    }
  ]

  const getTypeIcon = (type: string) => {
    try {
      switch (type) {
        case 'journal':
          return <SafeIcon icon={GlobeAltIcon} className="h-5 w-5" fallback="🌍" />
        case 'conference':
          return <SafeIcon icon={PresentationChartLineIcon} className="h-5 w-5" fallback="📊" />
        case 'book-chapter':
          return <SafeIcon icon={BookmarkSquareIcon} className="h-5 w-5" fallback="📚" />
        default:
          return <SafeIcon icon={DocumentTextIcon} className="h-5 w-5" fallback="📄" />
      }
    } catch (error) {
      return <span>📄</span>
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'journal':
        return 'bg-blue-100 text-blue-800'
      case 'conference':
        return 'bg-green-100 text-green-800'
      case 'book-chapter':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeName = (type: string) => {
    switch (type) {
      case 'journal':
        return 'Jurnal'
      case 'conference':
        return 'Konferensi'
      case 'book-chapter':
        return 'Bab Buku'
      default:
        return 'Publikasi'
    }
  }

  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="section-title">Publikasi Ilmiah</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Koleksi jurnal internasional, artikel konferensi, dan publikasi penelitian terbaru
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="card text-center hover:shadow-lg transition-shadow duration-300">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 shadow-lg">
              <SafeIcon icon={GlobeAltIcon} className="h-8 w-8 text-blue-600" fallback="🌍" />
            </div>
            <h3 className="mt-4 text-2xl font-bold text-gray-900">15+</h3>
            <p className="text-sm text-gray-600">Jurnal Internasional</p>
          </div>
          <div className="card text-center hover:shadow-lg transition-shadow duration-300">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-100 to-green-200 shadow-lg">
              <SafeIcon icon={PresentationChartLineIcon} className="h-8 w-8 text-green-600" fallback="📊" />
            </div>
            <h3 className="mt-4 text-2xl font-bold text-gray-900">25+</h3>
            <p className="text-sm text-gray-600">Paper Konferensi</p>
          </div>
          <div className="card text-center hover:shadow-lg transition-shadow duration-300">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-purple-200 shadow-lg">
              <SafeIcon icon={BookmarkSquareIcon} className="h-8 w-8 text-purple-600" fallback="📚" />
            </div>
            <h3 className="mt-4 text-2xl font-bold text-gray-900">8+</h3>
            <p className="text-sm text-gray-600">Bab Buku</p>
          </div>
          <div className="card text-center hover:shadow-lg transition-shadow duration-300">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-100 to-orange-200 shadow-lg">
              <SafeIcon icon={ChartBarIcon} className="h-8 w-8 text-orange-600" fallback="📈" />
            </div>
            <h3 className="mt-4 text-2xl font-bold text-gray-900">500+</h3>
            <p className="text-sm text-gray-600">Total Sitasi</p>
          </div>
        </div>

        {/* Publications List */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Publikasi Terbaru</h2>
          <div className="space-y-8">
            {publications.map((pub, index) => (
              <div key={index} className="card hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col space-y-4">
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${getTypeColor(pub.type)}`}>
                      {getTypeIcon(pub.type)}
                      <span className="ml-1">{getTypeName(pub.type)}</span>
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <SafeIcon icon={CalendarIcon} className="mr-1 h-4 w-4" fallback="📅" />
                      {pub.year}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                    {pub.title}
                  </h3>

                  {/* Authors */}
                  <p className="text-gray-700 font-medium">
                    {pub.authors}
                  </p>

                  {/* Journal/Conference */}
                  <div className="text-gray-600">
                    <span className="font-medium italic">{pub.journal}</span>
                    {pub.volume && pub.issue && (
                      <span>, Vol. {pub.volume}, No. {pub.issue}</span>
                    )}
                    {pub.pages && <span>, pp. {pub.pages}</span>}
                    {pub.location && <span>, {pub.location}</span>}
                  </div>

                  {/* Abstract */}
                  <p className="text-gray-700 text-justify">
                    {pub.abstract}
                  </p>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-2">
                    <SafeIcon icon={TagIcon} className="h-4 w-4 text-gray-400 mt-1" fallback="🏷️" />
                    {pub.keywords.map((keyword, idx) => (
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
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-700 hover:text-primary-800 font-medium"
                    >
                      <SafeIcon icon={ExternalLinkIcon} className="mr-1 h-4 w-4" fallback="🔗" />
                      Baca Selengkapnya
                    </a>
                    {pub.doi && (
                      <span className="text-sm text-gray-500">
                        DOI: {pub.doi}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Profiles */}
        <div className="mt-16">
          <div className="card bg-gradient-to-r from-primary-50 to-blue-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Profil Akademik</h2>
            <p className="text-gray-700 mb-6">
              Untuk melihat daftar publikasi lengkap dan metrics akademik, kunjungi profil akademik saya:
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <a
                href="https://scholar.google.com/citations?user=EXAMPLE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-center">
                  <div className="mx-auto mb-2 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <SafeIcon icon={AcademicCapIcon} className="h-5 w-5 text-blue-600" fallback="🎓" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">Google Scholar</span>
                </div>
              </a>
              <a
                href="https://orcid.org/0000-0000-0000-0000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-center">
                  <div className="mx-auto mb-2 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <SafeIcon icon={DocumentTextIcon} className="h-5 w-5 text-green-600" fallback="📄" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">ORCID</span>
                </div>
              </a>
              <a
                href="https://www.researchgate.net/profile/Dr-Zahari"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-center">
                  <div className="mx-auto mb-2 h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <SafeIcon icon={BookOpenIcon} className="h-5 w-5 text-purple-600" fallback="📖" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">ResearchGate</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kolaborasi Penelitian</h2>
            <p className="text-gray-700 mb-6">
              Tertarik untuk berkolaborasi dalam penelitian atau memiliki pertanyaan tentang publikasi saya? 
              Jangan ragu untuk menghubungi saya.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 sm:justify-center">
              <a href="/kontak" className="btn-primary">
                Hubungi Saya
              </a>
              <a href="/profil" className="btn-secondary">
                Lihat Profil & CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}