"use client";

import React, { useState, useEffect } from "react";
import { coursesData } from "../../data/dummyData";
import Navbar from "../../../components/Navbar";
import HeroSection from "../../../components/HeroSection";
import Footer from "../../../components/Footer";
import "../../../support/course-detail.css";
import { formatNumberToK } from "@/app/helper";
import ExpertCarousel from "@/components/ExpertCarousel";
import CourseCard from "@/components/CourseCard";
import CourseSyllabus from "@/components/CourseSyllabus";
import LoadingSpinner from "../../../components/LoadingSpinner"; 
import { useParams } from "next/navigation"; 

const CourseDetailPage = () => {
  const params = useParams(); 
  const [showAll, setShowAll] = useState(false);
  const [courseId, setCourseId] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (typeof params?.id === 'string') {
        setCourseId(params.id); 
      }
    };
    fetchData();
  }, [params]);

  if (!courseId) {
    return <LoadingSpinner />;
  }

  const course = coursesData.find((course) => course.id === courseId);
  const courseIndex = coursesData.findIndex((co) => co?.id === courseId);

  if (!course) {
    return <LoadingSpinner />;
  }

  const toggleQuickReads = () => {
    setShowAll(!showAll);
  };

  const relatedCourses = coursesData.filter(
    (co) => co.category === course.category && co.id !== courseId
  );

  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <HeroSection
        title={course.title}
        description={course.description}
        idx={courseIndex}
        isDetail={true}
        duration={course.duration}
      />
      <section className="px-9 mx-auto py-8">
        <h3 className="expert-title">Experts {'You’ll'} Learn From</h3>
        <div className="expert-container">
          {(showAll ? course.experts : course.experts.slice(0, 6)).map(
            (expert, index) => (
              <div key={index} className="byline-card">
                <img
                  src={expert.image}
                  alt="Profile Picture"
                  className="byline__profile-image"
                />
                <div>
                  <h4 className="text-lg font-semibold">{expert.name}</h4>
                  <p className="text-gray-600">{expert.description}</p>
                  <p className="text-gray-600">{expert.title}</p>
                </div>
              </div>
            )
          )}
        </div>
        {course.experts?.length > 6 && (
          <div className="text-right mt-5">
            <button onClick={toggleQuickReads} className="text-link">
              {showAll
                ? `Show ${course.experts.length - 6} Less`
                : `Show ${course.experts.length - 6} More`}
            </button>
          </div>
        )}
      </section>

      <section className="px-9 mx-auto py-8">
        <div className="section-course-detail">
          <div>
            <div className="refund">
              <div className="flex">
                <img
                  src={"/yes-logo.svg"}
                  alt="Profile Picture"
                  className="byline-image"
                />
                <div className="ml-3">
                  <p>{'"'}Full refund within 30 days, no questions asked{'"'}</p>
                  <p>Eligible for FSA/HSA</p>
                </div>
              </div>
              <p className="mt-2 course__price">${formatNumberToK(course.price)}</p>
            </div>
            <CourseSyllabus syllabus={course.syllabus} />

            <div className="expert-carousel-mobile">
              <ExpertCarousel experts={course.experts} />
            </div>
          </div>
          <div className="expert-carousel">
            <ExpertCarousel experts={course.experts} />
          </div>
        </div>
      </section>

      <section className="px-9 mx-auto py-8 course__description">
        <div className="lesson-container__sections">
          <h2 className="lesson-container__title">What you will learn</h2>
          <p className="course__description-inside leading-relaxed">
            {course.learningObjectives}
          </p>
        </div>
      </section>

      <section className="px-9 mx-auto py-8">
        <h3 className="other__sections">Other Courses You Might Like</h3>
        <div className="other__sections_body">
          {relatedCourses.map((relatedCourse: any, index: number) => (
            <div key={index}>
              <CourseCard key={index} course={relatedCourse} idx={index + 1} />
            </div>
          ))}
        </div>
      </section>
      <div className="flex justify-center">
        <div className="lesson-container__buttons">
            <a
              className="bt3 bt3--primary"
              href="/courses"
              title="What is IVF?"
            >
              Explore All Courses
            </a>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetailPage;
