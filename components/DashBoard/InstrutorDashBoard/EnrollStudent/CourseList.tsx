import { CourseType } from '@/components/Courses/CourseCard/CourseCard'
import React, { ReactNode } from 'react'

export default function CourseList({courses}:{courses:ReactNode}) {
  return (
    <div className="w-full bg-white shadow-lg rounded-sm border border-gray-200">
        <header className="px-5 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-800">Course Lists</h2>
        </header>
        <div className="p-3">
          <div className="overflow-x-auto">
            <table className=" w-full">
              <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                <tr>
                  <th className="p-2 ">
                    <div className="font-semibold text-left">Name</div>
                  </th>
                  <th className="p-2 ">
                    <div className="font-semibold text-left">Enroll Students</div>
                  </th>
                  <th className="p-2 ">
                    <div className="font-semibold text-left">Pending Students</div>
                  </th>
                  <th className="p-2 ">
                    <div className="font-semibold text-center">Price</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
              {courses}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  )
}
