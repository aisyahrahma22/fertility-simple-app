import { useState } from "react";
import '../support/syllabus.css';
interface Lesson {
  title: string;
  duration: string;
  details: string[];
}

interface CourseSyllabusProps {
  syllabus: Lesson[];
}

const CourseSyllabus = ({ syllabus }: CourseSyllabusProps) => {
  const [expandedLesson, setExpandedLesson] = useState<number | null>(null);

  const toggleLesson = (index: number) => {
    setExpandedLesson(expandedLesson === index ? null : index);
  };

  return (
    <section className="container mx-auto py-8">
      <h3 className="syllabus-title">Course Syllabus</h3>
      <div className="syllabus">
        {syllabus.map((lesson, index) => (
          <div
            key={index}
            className={`syllabus-box ${expandedLesson === index ? 'syllabus-box-active' : ''}`}
          >
            <div className="flex justify-between items-center p-3">
              <div>
                <p className="syllabus__lesson__number">Lesson {index + 1}</p>
                <h3 className="syllabus__lesson__name">{lesson.title}</h3>
              </div>
              <div className="icon-box-syllabus">
                <span className="syllabus__lesson__duration ">{lesson.duration}</span>
                {lesson.details.length > 0 && (
                  <button
                    onClick={() => toggleLesson(index)}
                    className="ml-2"
                  >
                    {expandedLesson === index ? <img
                        src="/next-logo.svg"
                        alt="Show Less"
                        className="image-icon-syllabus rotate-90"
                        /> : (
                      <img
                        src="/next-logo.svg"
                        alt="Show More"
                        className="image-icon-syllabus"
                      />
                    )}
                  </button>
                )}
              </div>
            </div>
            {expandedLesson === index && lesson.details.length > 0 && (
              <div>
                {lesson.details.map((detail, i) => (
                  <div className='syllabus__lesson' key={i}>{detail}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseSyllabus;
