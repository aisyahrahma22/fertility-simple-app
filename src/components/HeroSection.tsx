import React from 'react';
import '../support/hero-section.css';
interface HeroSectionProps {
  title: string;
  description?: string;
  actions?: string[];
  onTabChange?: (tab: string) => void; 
  activeTab?: string; 
  isDetail: boolean
  duration?: string; 
  idx? : number
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, actions, onTabChange, activeTab, idx, isDetail, duration }) => {
  const [lessonsData, timeData] = duration? duration.split(', ') : '';
  const imageIndex = idx ? (idx % 6) + 1 : 1;

  return (
    <>
      {isDetail ? 
      <div className='lesson-container__header'>
       <div className="course-card__background"><img src={`/line-${imageIndex}.svg`} alt="Menu" className="image" /></div>
       <div className='lesson-inside'>
        <div className='lesson-inside-row'>
          <img src={`/total-lesson.svg`} alt="Menu" className="image-icon" />
          <span>{lessonsData}</span>
        </div>
        <div className='lesson-inside-row'>
          <img src={`/duration.svg`} alt="Menu" className="image-icon" />
          <span className='time-data'>{timeData}</span>
        </div>
       </div>
       <h1 className='courses__heading extra-size'>{title}</h1>
       {description && <p className="lesson-description">{description}</p>}
       <div className="lesson-container__buttons">
          <a
            className="bt3 bt3--primary"
            href="#"
            title="What is IVF?"
          >
            Start Learning
          </a>
        </div>
        <button type="button" className="course-action">
          <span className="flex items-center gap-1">
            <span>Buy This Course</span>
            <img src="/next-logo.svg" alt="Menu" className="image-icon" />
          </span>
        </button>
      </div>: <>
        <div className="courses__header mx-auto py-8">
        <h1 className='courses__heading'>Courses</h1>
        <h2 className="mt-2">{title}</h2>
        {description && <p className="mt-4 text-4xl text-gray-600">{description}</p>}
      </div>
      <div className='tab-nav'>
        {actions && (
          <div className={activeTab? 'tab-buttons active' : 'tab-buttons'}>
            {actions.map((tab) => (
              <div
                key={tab}
                onClick={(e) => {
                  e.preventDefault(); 
                  onTabChange?.(tab); 
                }}
                className={activeTab === tab? 'tab-buttons-text active' : 'tab-buttons-text'}
              >
                {tab}
              </div>
            ))}
          </div>
        )}
      </div>
      </>}
    </>
  );
};

export default HeroSection;
