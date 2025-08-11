import React, { createContext, useContext, useState, useEffect } from 'react';

const CMSContext = createContext();

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (!context) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
};

export const CMSProvider = ({ children }) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load content from JSON file
  const loadContent = async () => {
    try {
      setLoading(true);
      const response = await fetch('/data/content.json');
      if (!response.ok) {
        throw new Error('Failed to load content');
      }
      const data = await response.json();
      setContent(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error loading CMS content:', err);
    } finally {
      setLoading(false);
    }
  };

  // Save content to JSON file (for admin interface)
  const saveContent = async (newContent) => {
    try {
      setLoading(true);
      // In a real implementation, this would make an API call to save the content
      // For now, we'll update the local state and localStorage
      const updatedContent = {
        ...newContent,
        lastUpdated: new Date().toISOString()
      };
      
      setContent(updatedContent);
      localStorage.setItem('cmsContent', JSON.stringify(updatedContent));
      
      // In production, you would send this to your backend
      console.log('Content saved:', updatedContent);
      return true;
    } catch (err) {
      setError(err.message);
      console.error('Error saving CMS content:', err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Get content by path (e.g., 'pages.home.hero.title')
  const getContent = (path, defaultValue = '') => {
    if (!content) return defaultValue;
    
    const keys = path.split('.');
    let value = content;
    
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        return defaultValue;
      }
    }
    
    return value;
  };

  // Update specific content by path
  const updateContent = (path, newValue) => {
    if (!content) return;

    const keys = path.split('.');
    const newContent = { ...content };
    let current = newContent;

    // Navigate to the parent of the target property
    for (let i = 0; i < keys.length - 1; i++) {
      const key = keys[i];
      if (!(key in current)) {
        current[key] = {};
      }
      current = current[key];
    }

    // Set the new value
    current[keys[keys.length - 1]] = newValue;
    
    setContent(newContent);
  };

  useEffect(() => {
    // Try to load from localStorage first (for admin changes)
    const savedContent = localStorage.getItem('cmsContent');
    if (savedContent) {
      try {
        const parsedContent = JSON.parse(savedContent);
        setContent(parsedContent);
        setLoading(false);
        return;
      } catch (err) {
        console.error('Error parsing saved content:', err);
      }
    }

    // Fallback to loading from JSON file
    loadContent();
  }, []);

  const value = {
    content,
    loading,
    error,
    getContent,
    updateContent,
    saveContent,
    loadContent
  };

  return (
    <CMSContext.Provider value={value}>
      {children}
    </CMSContext.Provider>
  );
};

export default CMSContext;
