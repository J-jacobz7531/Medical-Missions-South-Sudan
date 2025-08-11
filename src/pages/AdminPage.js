import React, { useState } from 'react';
import { useCMS } from '../contexts/CMSContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Save, Edit, Eye, EyeOff, Plus, Trash2 } from 'lucide-react';

const AdminPage = () => {
  const { content, loading, error, updateContent, saveContent, getContent } = useCMS();
  const [editMode, setEditMode] = useState({});
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const handleSave = async () => {
    setSaving(true);
    const success = await saveContent(content);
    if (success) {
      alert('Content saved successfully!');
    } else {
      alert('Error saving content. Please try again.');
    }
    setSaving(false);
  };

  const toggleEditMode = (field) => {
    setEditMode(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleInputChange = (path, value) => {
    updateContent(path, value);
  };

  const EditableField = ({ label, path, type = 'text', placeholder = '' }) => {
    const value = getContent(path);
    const isEditing = editMode[path];

    return (
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm font-medium text-gray-700">{label}</label>
          <Button
            size="sm"
            variant="outline"
            onClick={() => toggleEditMode(path)}
            className="h-6 w-6 p-0"
          >
            {isEditing ? <EyeOff className="h-3 w-3" /> : <Edit className="h-3 w-3" />}
          </Button>
        </div>
        {isEditing ? (
          type === 'textarea' ? (
            <textarea
              value={value || ''}
              onChange={(e) => handleInputChange(path, e.target.value)}
              placeholder={placeholder}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
            />
          ) : (
            <input
              type={type}
              value={value || ''}
              onChange={(e) => handleInputChange(path, e.target.value)}
              placeholder={placeholder}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          )
        ) : (
          <div className="p-2 bg-gray-50 rounded-md min-h-[40px] flex items-center">
            {value || <span className="text-gray-400">No content</span>}
          </div>
        )}
      </div>
    );
  };

  const ArrayEditor = ({ label, path, itemTemplate }) => {
    const items = getContent(path, []);
    const isEditing = editMode[path];

    const addItem = () => {
      const newItems = [...items, { ...itemTemplate }];
      handleInputChange(path, newItems);
    };

    const removeItem = (index) => {
      const newItems = items.filter((_, i) => i !== index);
      handleInputChange(path, newItems);
    };

    const updateItem = (index, field, value) => {
      const newItems = [...items];
      newItems[index] = { ...newItems[index], [field]: value };
      handleInputChange(path, newItems);
    };

    return (
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">{label}</h3>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => toggleEditMode(path)}
              className="h-8"
            >
              {isEditing ? <EyeOff className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
            </Button>
            {isEditing && (
              <Button
                size="sm"
                onClick={addItem}
                className="h-8"
              >
                <Plus className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-4">
                {isEditing && (
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => removeItem(index)}
                    className="absolute top-2 right-2 h-6 w-6 p-0"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                )}
                {Object.keys(itemTemplate).map(field => (
                  <div key={field} className="mb-3">
                    <label className="text-sm font-medium text-gray-600 capitalize">
                      {field.replace(/([A-Z])/g, ' $1').trim()}
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={item[field] || ''}
                        onChange={(e) => updateItem(index, field, e.target.value)}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <div className="mt-1 p-2 bg-gray-50 rounded-md">
                        {item[field] || <span className="text-gray-400">No content</span>}
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading CMS...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading CMS: {error}</p>
          <Button onClick={() => window.location.reload()}>Retry</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gray-900">Content Management System</h1>
            <Button
              onClick={handleSave}
              disabled={saving}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Save className="h-4 w-4 mr-2" />
              {saving ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {['home', 'about', 'gallery', 'settings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Sections */}
        {activeTab === 'home' && (
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Hero Section</CardTitle>
              </CardHeader>
              <CardContent>
                <EditableField
                  label="Hero Title"
                  path="pages.home.hero.title"
                  placeholder="Enter hero title"
                />
                <EditableField
                  label="Hero Subtitle"
                  path="pages.home.hero.subtitle"
                  type="textarea"
                  placeholder="Enter hero subtitle"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <ArrayEditor
                  label="Homepage Statistics"
                  path="pages.home.stats"
                  itemTemplate={{ value: '', label: '' }}
                />
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>About Page Content</CardTitle>
              </CardHeader>
              <CardContent>
                <EditableField
                  label="Page Title"
                  path="pages.about.hero.title"
                  placeholder="Enter page title"
                />
                <EditableField
                  label="Page Subtitle"
                  path="pages.about.hero.subtitle"
                  type="textarea"
                  placeholder="Enter page subtitle"
                />
                <EditableField
                  label="Mission Statement"
                  path="pages.about.mission"
                  type="textarea"
                  placeholder="Enter mission statement"
                />
                <EditableField
                  label="Vision Statement"
                  path="pages.about.vision"
                  type="textarea"
                  placeholder="Enter vision statement"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Core Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ArrayEditor
                  label="Core Values"
                  path="pages.about.values"
                  itemTemplate={{ title: '', description: '' }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
              </CardHeader>
              <CardContent>
                <ArrayEditor
                  label="Team Members"
                  path="pages.about.team"
                  itemTemplate={{ name: '', position: '', description: '', image: '' }}
                />
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Gallery Page Content</CardTitle>
              </CardHeader>
              <CardContent>
                <EditableField
                  label="Page Title"
                  path="pages.gallery.hero.title"
                  placeholder="Enter page title"
                />
                <EditableField
                  label="Page Subtitle"
                  path="pages.gallery.hero.subtitle"
                  type="textarea"
                  placeholder="Enter page subtitle"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Impact Stories</CardTitle>
              </CardHeader>
              <CardContent>
                <ArrayEditor
                  label="Impact Stories"
                  path="pages.gallery.impactStories"
                  itemTemplate={{
                    id: '',
                    title: '',
                    description: '',
                    impact: '',
                    category: 'healthcare',
                    image: ''
                  }}
                />
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Site Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <EditableField
                  label="Site Name"
                  path="siteSettings.siteName"
                  placeholder="Enter site name"
                />
                <EditableField
                  label="Tagline"
                  path="siteSettings.tagline"
                  placeholder="Enter tagline"
                />
                <EditableField
                  label="Site Description"
                  path="siteSettings.description"
                  type="textarea"
                  placeholder="Enter site description"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <EditableField
                  label="Email"
                  path="siteSettings.contact.email"
                  type="email"
                  placeholder="Enter email address"
                />
                <EditableField
                  label="Phone"
                  path="siteSettings.contact.phone"
                  type="tel"
                  placeholder="Enter phone number"
                />
                <EditableField
                  label="Street Address"
                  path="siteSettings.contact.address.street"
                  placeholder="Enter street address"
                />
                <EditableField
                  label="City"
                  path="siteSettings.contact.address.city"
                  placeholder="Enter city"
                />
                <EditableField
                  label="State"
                  path="siteSettings.contact.address.state"
                  placeholder="Enter state"
                />
                <EditableField
                  label="Country"
                  path="siteSettings.contact.address.country"
                  placeholder="Enter country"
                />
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
