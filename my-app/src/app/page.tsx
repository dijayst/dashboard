"use client"
import Image from "next/image";
import { Overview } from '../component/Content/Data'
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { LiaAngleRightSolid } from "react-icons/lia";
import { GoDotFill } from "react-icons/go";
import CardSummary from "@/component/Card/CardSummary";
import WeeklyActivityChart from "@/component/WeeklyActivity/WeeklyActivityChart";

export default function Home() {



  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Overview</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CardSummary />
        <div className="space-y-6">
          <WeeklyActivityChart />
          <p>ExpensePieChart</p> 
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <p>QuickTransfer </p>
        <p>BalanceHistoryChart </p>
      </div>
    </div>
  );
}
