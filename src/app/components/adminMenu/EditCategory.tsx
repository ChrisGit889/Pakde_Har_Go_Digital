'use client';
import React, { useState, useEffect } from 'react';
import './AdminMenu.css';

interface EditCategoryProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategories: string[]; 
  onUpdateCategories: (newCategories: string[]) => void;
}

export default function EditCategory({ 
  isOpen, 
  onClose, 
  initialCategories, 
  onUpdateCategories 
}: EditCategoryProps) {
  
  const [currentCategories, setCurrentCategories] = useState<string[]>([]);
  const [newCategoryName, setNewCategoryName] = useState('');

  useEffect(() => {
    if (isOpen) {
      setCurrentCategories(initialCategories);
    }
  }, [isOpen, initialCategories]);

  if (!isOpen) {
    return null;
  }

  const handleAdd = () => {
    if (!newCategoryName) {
      alert('Harap isi nama kategori.');
      return;
    }
    if (currentCategories.includes(newCategoryName)) {
      alert('Kategori sudah ada.');
      return;
    }
    setCurrentCategories([...currentCategories, newCategoryName]);
    setNewCategoryName('');
  };

  const handleDelete = (categoryToDelete: string) => {
    setCurrentCategories(
      currentCategories.filter(cat => cat !== categoryToDelete)
    );
  };

  const handleSaveChanges = () => {
    onUpdateCategories(currentCategories);
    onClose(); 
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Edit Kategori</h3>
        <div className="category-list-section">
          {currentCategories.map((category) => (
            category !== 'Semua' ? (
              <div key={category} className="category-item">
                <span className="category-name">{category}</span>
                <button 
                  className="delete-button" 
                  onClick={() => handleDelete(category)}
                >
                  Hapus
                </button>
              </div>
            ) : null
          ))}
        </div>
        
        <div className="add-category-section">
          <input 
            type="text" 
            className="modal-input" 
            placeholder="Nama Kategori Baru..." 
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          />
          <button className="modal-button green" onClick={handleAdd}>
            Tambah
          </button>
        </div>
        
        <div className="modal-actions">
          <button className="modal-button secondary" onClick={onClose}>
            Batal
          </button>
          <button className="modal-button primary" onClick={handleSaveChanges}>
            Simpan Perubahan
          </button>
        </div>
      </div>
    </div>
  );
}