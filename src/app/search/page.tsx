"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Input from "@/components/Input";
import Navbar from "@/components/Navbar";
import "../../support/search.css";
import { coursesData } from "../data/dummyData";
import { Course } from "../types";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<Course[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const filteredResults = coursesData.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResults(filteredResults);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
    if (!searchQuery.trim() && e.key === "Enter") setIsSearching(false);
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Navbar */}
      <Navbar />
      <section className="container-search">
      {isSearching ? (
        <div className="content-search">
          <div className="content-search-header2">
            <div className="input-field">
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search for FertilityIQ information"
                className="input-with-label"
              />
              <button
                onClick={handleSearch}
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                <img src="/search.svg" alt="Search" />
              </button>
            </div>
          </div>

          <div className="content-search__body">
            <div>{results.length} results</div>
            {results.length > 0 && (
              <>
                <div className="content-search-results-header">COURSES</div>
                <div className="content-search-result">
                  {results.map((result, index) => (
                    <Link
                      key={index}
                      href={`/course-detail/${result.id}`}
                      className="course-card mt-4"
                    >
                      <small>{result.category}</small>
                      <h5>{result.title}</h5>
                      <p>{result.description}</p>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="content-search-header">
          <p className="content-search__title">
            Do not see what you were looking for? Search for it...
          </p>
          <div className="input-field">
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search for FertilityIQ information"
              className="input-with-label"
            />
            <button
              onClick={handleSearch}
              className="p-2 text-gray-500 hover:text-gray-700"
            >
              <img src="/search.svg" alt="Search" />
            </button>
          </div>
        </div>
      )}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
