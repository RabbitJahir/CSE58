// client/src/Calendar.jsx
import { useState } from 'react';
import Popup from './Popup';

export default function Calendar({ scheduleData, calendarData, backendUrl, onSave }) {
  const [expandedWeeks, setExpandedWeeks] = useState({});
  const [popupData, setPopupData] = useState(null);

  const toggleWeek = (week) => {
    setExpandedWeeks(prev => ({ ...prev, [week]: !prev[week] }));
  };

  const openPopup = (date, subject) => {
    const details = calendarData[date]?.[subject] || {};
    setPopupData({ date, subject, ...details });
  };

  const renderSlot = (slot, date) => {
    if (!slot) return <td></td>;

    // Handle Split Cells (A1/A2)
    if (slot.type === 'split') {
      return (
        <td className="split-cell" colSpan={slot.colspan || 1}>
          <div className="split-container">
            {slot.sections.map(sec => {
              const status = calendarData[date]?.[sec.subject]?.status || 'gray';
              return (
                <div 
                  key={sec.subject} 
                  className={`sub-cell status-${status}`}
                  onClick={() => openPopup(date, sec.subject)}
                >
                  <span className="section-info">{sec.content}</span>
                </div>
              );
            })}
          </div>
        </td>
      );
    }

    // Handle Regular Cells
    const status = calendarData[date]?.[slot.subject]?.status || 'gray';
    return (
      <td 
        key={slot.subject} 
        className={`status-${status}`} 
        colSpan={slot.colspan || 1}
        onClick={() => openPopup(date, slot.subject)}
        style={{ cursor: 'pointer' }}
      >
        {slot.content}
      </td>
    );
  };

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr className="time-row">
            <th><b>Day</b></th>
            <th><b>Date</b></th>
            <th><b>8-9</b></th>
            <th><b>9-10</b></th>
            <th><b>10-11</b></th>
            <th><b>11-12</b></th>
            <th><b>12-1</b></th>
            <th><b>1-2</b></th>
            <th><b>2-3</b></th>
            <th><b>3-4</b></th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map(weekObj => (
            <>
              {/* Week Header */}
              <tr 
                key={weekObj.week} 
                className={`week-header week-${weekObj.week} ${expandedWeeks[weekObj.week] ? '' : 'collapsed'}`}
                onClick={() => toggleWeek(weekObj.week)}
              >
                <td className="week-left-cell">
                  <span className="arrow">{expandedWeeks[weekObj.week] ? '▼' : '▶'}</span>
                  <span className="week-title">{weekObj.title}</span>
                </td>
                <td></td>
                {Array(8).fill(<td></td>)}
              </tr>

              {/* Day Rows */}
              {weekObj.days.map(day => (
                <tr key={day.date} className={`day-row ${expandedWeeks[weekObj.week] ? '' : 'collapsed'}`}>
                  <td>{day.day}</td>
                  <td style={{ fontWeight: 'bold' }}>{day.date}</td>
                  {day.slots.map((slot, idx) => renderSlot(slot, day.date))}
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>

      {popupData && (
        <Popup 
          data={popupData} 
          onClose={() => setPopupData(null)} 
          onSave={(data) => { onSave(data); setPopupData(null); }}
          backendUrl={backendUrl}
        />
      )}
    </div>
  );
}