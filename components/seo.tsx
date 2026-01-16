'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string[];
  businessType?: 'Organization' | 'MedicalBusiness' | 'LocalBusiness';
}

// Define business data for structured data
const BUSINESS_DATA = {
  name: 'Lincare Saúde',
  legalName: 'Lincare Assistência Domiciliar LTDA',
  description: 'Soluções de qualidade em assistência à saúde com cuidado humanizado no conforto do seu lar',
  url: 'https://lincare.netlify.app',
  logo: 'https://lincare.netlify.app/logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Paulista, 1000',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    postalCode: '01310-100',
    addressCountry: 'BR'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+5511999999999',
    contactType: 'customer service',
    areaServed: 'BR',
    availableLanguage: 'Portuguese'
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '150'
  }
};

const SEO = ({
  title = 'Lincare Saúde - Assistência Domiciliar de Qualidade',
  description = 'Soluções de qualidade em assistência à saúde com cuidado humanizado no conforto do seu lar',
  canonical = typeof window !== 'undefined' ? window.location.href : 'https://lincare.netlify.app',
  ogImage = '/og-image.jpg',
  keywords = ['assistência domiciliar', 'saúde', 'enfermagem', 'cuidados'],
  businessType = 'MedicalBusiness'
}: SEOProps) => {
  const pathname = usePathname();
  
  // Generate structured data based on business type
  const getStructuredData = () => {
    let structuredData: any = {
      '@context': 'https://schema.org',
      '@type': businessType,
      ...BUSINESS_DATA
    };

    // Add specific properties based on business type
    if (businessType === 'MedicalBusiness') {
      structuredData = {
        ...structuredData,
        medicalSpecialty: ['HomeHealthCare', 'NursingCare', 'PersonalCare'],
        availableService: ['Assistência Domiciliar', 'Enfermagem Domiciliar', 'Cuidadores de Idosos']
      };
    }

    return JSON.stringify(structuredData);
  };

  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = description;
      document.head.appendChild(metaDescription);
    }

    // Update or create keywords meta
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords.join(', '));
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      metaKeywords.content = keywords.join(', ');
      document.head.appendChild(metaKeywords);
    }

    // Update or create canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonical);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = canonical;
      document.head.appendChild(canonicalLink);
    }

    // Update Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage.startsWith('/') ? `${window.location.origin}${ogImage}` : ogImage },
      { property: 'og:url', content: window.location.href },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Lincare Saúde' },
      { property: 'og:locale', content: 'pt_BR' }
    ];

    ogTags.forEach(tag => {
      let element = document.querySelector(`meta[property="${tag.property}"]`);
      if (element) {
        element.setAttribute('content', tag.content);
      } else {
        element = document.createElement('meta');
        element.setAttribute('property', tag.property);
        element.setAttribute('content', tag.content);
        document.head.appendChild(element);
      }
    });

    // Update Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage.startsWith('/') ? `${window.location.origin}${ogImage}` : ogImage }
    ];

    twitterTags.forEach(tag => {
      let element = document.querySelector(`meta[name="${tag.name}"]`);
      if (element) {
        element.setAttribute('content', tag.content);
      } else {
        element = document.createElement('meta');
        element.name = tag.name;
        element.setAttribute('content', tag.content);
        document.head.appendChild(element);
      }
    });
  }, [title, description, canonical, ogImage, keywords, pathname]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getStructuredData() }}
      />
    </>
  );
};

export default SEO;