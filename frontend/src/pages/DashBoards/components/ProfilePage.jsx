import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { User, Mail, Building, Phone, MapPin, Calendar, GraduationCap, Briefcase } from 'lucide-react';

const ProfilePage = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    personalEmail: user?.personalEmail || '',
    phone: user?.phone || '',
    address: user?.address || '',
    bio: user?.bio || '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic here
    setIsEditing(false);
  };

  const renderRoleSpecificContent = () => {
    switch (user?.role) {
      case 'intern':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 mt-6"
          >
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Internship Details
              </h2>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Program</label>
                <div className="text-sm text-gray-600">Software Development Internship</div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Start Date</label>
                <div className="text-sm text-gray-600">January 15, 2024</div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Mentor</label>
                <div className="text-sm text-gray-600">John Doe</div>
              </div>
            </div>
          </motion.div>
        );
      case 'employee':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 mt-6"
          >
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Employment Details
              </h2>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Department</label>
                <div className="text-sm text-gray-600">Engineering</div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Position</label>
                <div className="text-sm text-gray-600">Senior Developer</div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Join Date</label>
                <div className="text-sm text-gray-600">March 1, 2022</div>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="space-y-6">
        <div className="flex space-x-1 border-b border-gray-200">
          {['profile', 'account'].map((tab) => (
            <motion.button
              key={tab}
              className={`px-4 py-2 text-sm font-medium relative ${
                activeTab === tab ? 'text-primary' : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {activeTab === tab && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  layoutId="activeTab"
                />
              )}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'profile' ? (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Profile Information</h2>
                    <motion.button
                      className={`px-4 py-2 rounded-md text-sm font-medium ${
                        isEditing
                          ? 'text-gray-600 hover:bg-gray-100'
                          : 'border border-gray-200 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsEditing(!isEditing)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isEditing ? 'Cancel' : 'Edit Profile'}
                    </motion.button>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-20 w-20 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                        <span className="text-primary text-2xl font-medium">
                          {user?.name?.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h2 className="text-2xl font-semibold">{user?.name}</h2>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Building size={14} />
                          <span className="capitalize">{user?.role}</span>
                        </div>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        {['name', 'personalEmail', 'phone', 'address'].map((field) => (
                          <div key={field}>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                            </label>
                            <input
                              type="text"
                              name={field}
                              value={formData[field]}
                              onChange={handleInputChange}
                              disabled={!isEditing}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:bg-gray-50 disabled:text-gray-500"
                            />
                          </div>
                        ))}
                      </div>

                      {isEditing && (
                        <motion.button
                          type="submit"
                          className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Save Changes
                        </motion.button>
                      )}
                    </form>
                  </div>
                </div>

                {renderRoleSpecificContent()}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-4 border-b border-gray-200">
                  <h2 className="text-xl font-semibold">Account Information</h2>
                </div>
                <div className="p-4 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Work Email (Cannot be changed)
                    </label>
                    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{user?.email}</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Account Type
                    </label>
                    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                      <User className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600 capitalize">{user?.role} Account</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Join Date
                    </label>
                    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">January 15, 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProfilePage;