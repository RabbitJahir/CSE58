// client/src/Popup.jsx
import { useState } from 'react';

export default function Popup({ data, onClose, onSave, backendUrl }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(data);
  const [status, setStatus] = useState(data.status || 'gray');

  const handleEditRequest = async () => {
    const pass = prompt("Enter password to enable editing:");
    if (!pass) return;

    try {
      const res = await fetch(`${backendUrl}/verify-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: pass })
      });
      const result = await res.json();
      if (result.authorized) setIsEditing(true);
      else alert("Wrong password!");
    } catch (err) {
      alert("Error verifying password");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...formData, status });
  };

  if (!data) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <h3>{data.subject} - {data.date}</h3>
        
        {!isEditing ? (
          <div className="view-content">
            <p><strong>Topic:</strong> {data.topic || 'No topic'}</p>
            <p><strong>Homework:</strong> {data.homework || 'No homework'}</p>
            <p><strong>Notes:</strong> {data.notes || 'No notes'}</p>
            <button id="popup-edit-btn" onClick={handleEditRequest}>Edit Details</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="status-button-container">
              <button type="button" className={`status-btn ${status === 'green' ? 'active' : ''}`} onClick={() => setStatus('green')}>Green</button>
              <button type="button" className={`status-btn ${status === 'red' ? 'active' : ''}`} onClick={() => setStatus('red')}>Red</button>
              <button type="button" className={`status-btn ${status === 'gray' ? 'active' : ''}`} onClick={() => setStatus('gray')}>Gray</button>
            </div>
            <div className="form-group">
              <label>Topic:</label>
              <textarea value={formData.topic || ''} onChange={(e) => setFormData({...formData, topic: e.target.value})} />
            </div>
            <div className="form-group">
              <label>Homework:</label>
              <textarea value={formData.homework || ''} onChange={(e) => setFormData({...formData, homework: e.target.value})} />
            </div>
            <div className="form-group">
              <label>Notes:</label>
              <textarea value={formData.notes || ''} onChange={(e) => setFormData({...formData, notes: e.target.value})} />
            </div>
            <button type="submit">Save Changes</button>
          </form>
        )}
        
        <button id="popup-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}