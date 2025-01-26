"use client";
import React, { useState } from "react";
import { coursesData, quickReads, exploreTopics } from "../data/dummyData";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import CourseCard from "../../components/CourseCard";
import Footer from "../../components/Footer";
import { formatNumberToK } from "../helper";
import Link from "next/link";

const Course = () => {
  const [filter, setFilter] = useState("Introduction");
  const [showAll, setShowAll] = useState(false);

  const toggleQuickReads = () => setShowAll(!showAll);

  const filteredCourses =
    filter === "All"
      ? coursesData
      : coursesData.filter((course) => course.category === filter);

  return (
    <div className="bg-white text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        title="Explore 30+ courses and 200+ lessons taught by experts in their field."
        actions={["All", "Introduction", "Advanced", "Population Specific"]}
        onTabChange={setFilter}
        activeTab={filter}
        isDetail={false}
      />

      {/* Courses Section */}
      <h4 className="section-title">Courses ({filteredCourses.length})</h4>
      <section className="course-cards">
        {filteredCourses.map((course, index) => (
          <CourseCard key={index} course={course} idx={index + 1} />
        ))}
      </section>

      {/* Popular Lessons Section */}
      <h4 className="section-title">Popular Lessons (6)</h4>
      <section>
        <div className="lesson-cards">
          {coursesData
            .sort((a, b) => (b.views || 0) - (a.views || 0)) // Sort by most views
            .slice(0, 6) // Limit to 6
            .map((course, index) => (
              <div key={index} className="lesson-card">
                <Link href={`/course-detail/${course.id}`}>
                  <p className="context">{course.title.toUpperCase()}</p>
                  <ul>
                    {course.syllabus.slice(0, 1).map((lesson, idx) => (
                      <li key={idx} className="name">{lesson.title}</li>
                    ))}
                  </ul>
                </Link>
              </div>
            ))}
        </div>
      </section>

      {/* Quick Reads Section */}
      <h4 className="section-title">Quick Reads</h4>
      <section>
        <div className="lesson-cards">
          {(showAll ? quickReads : quickReads.slice(0, 4)).map((read, index) => (
            <div key={index} className="lesson-card">
              <div className="font-semibold">{read.topic}</div>
              <div className="name">{read.title}</div>
            </div>
          ))}
        </div>
        <div className="lesson-card-btn">
          <button onClick={toggleQuickReads} className="text-link">
            {showAll ? `Show ${quickReads.length} Less` : `Show ${quickReads.length} More`}
          </button>
        </div>
      </section>

      {/* Explore More Topics Section */}
      <h4 className="section-title">Explore More Topics</h4>
      <section>
        <div className="topic-picker">
          {exploreTopics.map((topic, index) => (
            <a key={index} href="#">
              <span className="topic_name">{topic.name}</span>
              <div className="topic-picker__viewers">
                <span aria-hidden="true" className="viewers-count">
                  {formatNumberToK(topic.views)}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Course;
