'use client'

import { EyeIcon } from '@heroicons/react/24/outline'

export default function CVPreviewButton() {
  const handlePreview = () => {
    window.open('/files/cv-dr-zahari.pdf', '_blank')
  }

  return (
    <button 
      className="btn-secondary inline-flex items-center justify-center"
      onClick={handlePreview}
    >
      <EyeIcon className="mr-2 h-5 w-5" />
      Preview CV
    </button>
  )
}