import { useCMS } from '../contexts/CMSContext';

// Custom hook for easy content access with fallbacks
export const useCMSContent = () => {
  const { getContent, loading, error } = useCMS();

  // Helper functions for common content access patterns
  const getHeroContent = (page) => ({
    title: getContent(`pages.${page}.hero.title`, ''),
    subtitle: getContent(`pages.${page}.hero.subtitle`, ''),
    ctaButtons: getContent(`pages.${page}.hero.ctaButtons`, [])
  });

  const getPageContent = (page) => getContent(`pages.${page}`, {});

  const getSiteSettings = () => getContent('siteSettings', {});

  const getContactInfo = () => getContent('siteSettings.contact', {});

  const getStats = () => getContent('pages.home.stats', []);

  const getImpactStories = () => getContent('pages.gallery.impactStories', []);

  const getTeamMembers = () => getContent('pages.about.team', []);

  const getCoreValues = () => getContent('pages.about.values', []);

  const getAboutStory = () => getContent('pages.about.story', []);

  return {
    getContent,
    getHeroContent,
    getPageContent,
    getSiteSettings,
    getContactInfo,
    getStats,
    getImpactStories,
    getTeamMembers,
    getCoreValues,
    getAboutStory,
    loading,
    error
  };
};

export default useCMSContent;
