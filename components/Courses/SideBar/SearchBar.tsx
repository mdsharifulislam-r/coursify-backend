"use client";
import { getCourse } from "@/lib/Helper/getCourse";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CourseType } from "../CourseCard/CourseCard";
import { useRouter } from "next/router";
interface SuggetionType {
  id: string;
  text: string;
}
export default function SearchBar() {
  const [search, setSearch] = useState<string>("");
  const [course, setCourse] = useState<CourseType[]>([]);
  const [suggetion, setSuggetion] = useState<SuggetionType[]>([]);
    const [error,setError] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/course`, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (data.isOk) {
          setCourse(data.data);
        }
      })
      .catch((err) => {
        setError(err?.message);
      });
  }, []);

  function AddValue(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    setSuggetion(() => {
      const data = course.filter((item) => {
        return (
          (item.name.toLowerCase().includes(e.target.value.toLowerCase()) &&
            item) ||
          (item.type.toLowerCase().includes(e.target.value.toLowerCase()) &&
            item) ||
          (item.instructor.name
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) &&
            item) ||
          (item.language
            ?.toLowerCase()
            .includes(e.target.value.toLowerCase()) &&
            item)
        );
      });

      return data?.map((item) => {
        return { text: item.name, id: item._id };
      });
    });
  }
  const sugetions = suggetion.slice(0, 4).map((item, index) => {
    return (
      <Link
        key={index}
        href={`/courses?id=${item.id}&text=${item.text.split(" ").slice(0.1)}`}
        onClick={() => setSearch("")}
        className="w-full py-1 text-slate-600 "
      >
        {item.text}
      </Link>
    );
  });

  if(error){
    return <h1>{error}</h1>
  }

  return (
    <div className="relative w-full">
      <div className="w-full flex">
        <input
          type="text"
          value={search}
          placeholder="Search course"
          onChange={AddValue}
          className=" focus:outline-none bg-dark px-3 py-2 rounded-md"
        />
        <Link
          onClick={() => setSearch("")}
          href={`/courses?text=${search}`}
          className="text-xl block text-primary -translate-x-8 translate-y-2"
        >
          <FaSearch />
        </Link>
        <div
          className={`absolute w-[90%] flex-col  gap-1 z-50 p-5 bg-white shadow left-0 top-10 ${
            sugetions.length && search ? "flex" : "hidden"
          }`}
        >
          {sugetions}
        </div>
      </div>
    </div>
  );
}
