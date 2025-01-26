// Define the types for course-related data
export type Expert = {
    name: string;
    title: string;
    description: string;
    image: any;
    notes: string;

  };
  
  export type Lesson = {
    title: string;
    duration: string;
    details: string[];
  };
  
  export type RelatedCourse = {
    id: string;
    title: string;
    description: string;
  };
  
  export type Course = {
    id: string;
    title: string;
    description: string;
    category: string;
    price: number;
    duration: string;
    feat: string;
    views: number | null;
    learningObjectives: string;
    experts: Expert[];
    syllabus: Lesson[];
    relatedCourses: RelatedCourse[];
  };
  