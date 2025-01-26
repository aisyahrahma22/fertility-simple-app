// components/CourseCard.tsx
import { formatNumberToK } from "@/app/helper";
import Link from "next/link";
import { Course } from "@/app/types";
import '../support/course-card.css';

interface CourseCardProps {
  course: Course;
  idx?: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ idx, course }) => {
  const imageIndex = idx ? (idx % 6) + 1 : 1;

  return (
    // Wrap the course card with the Link component
    <Link href={`/course-detail/${course.id}`} className="course-card">
      <div className="course-card__background">
        <img src={`/line-${imageIndex}.svg`} alt="Menu" className="image" />
      </div>
      <h3 className="title">{course.title}</h3>
      <p className="mt-2">{course.description}</p>

      <p className="mt-5">
        {course.feat.split('from').length > 1 ? (
          <>
            {course.feat.split('from')[0]} 
            from<strong>{course.feat.split('from')[1]}</strong>
          </>
        ) : (
          course.feat
        )}
      </p>
      <div className="course-card__buttons">
        {course.views ? (
          <div className="course-card__button-stand-in">
            <div className="course-card__viewers">
              {course.views ? formatNumberToK(course.views) : null}
            </div>
          </div>
        ) : null}
        <div className="course-card__button">
          View Course
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
