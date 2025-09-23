
"use client"

import { useState, useEffect } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

const generateChartData = () => [
    { name: "Jan", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Feb", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Mar", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Apr", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "May", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Jun", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Jul", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Aug", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Sep", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Oct", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Nov", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Dec", total: Math.floor(Math.random() * 5000) + 1000 },
];

export function UserActivityChart() {
    const { dictionary } = useLanguage();
    const { activityChart } = dictionary.infoUsers;
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        setData(generateChartData());
    }, []);

    if (data.length === 0) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>{activityChart.title}</CardTitle>
                    <CardDescription>{activityChart.description}</CardDescription>
                </CardHeader>
                <CardContent className="h-[350px] flex justify-center items-center">
                    <p>Loading chart data...</p>
                </CardContent>
            </Card>
        )
    }

  return (
    <Card>
        <CardHeader>
            <CardTitle>{activityChart.title}</CardTitle>
            <CardDescription>{activityChart.description}</CardDescription>
        </CardHeader>
        <CardContent>
            <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
                <XAxis
                dataKey="name"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                />
                <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value}`}
                />
                <Bar
                dataKey="total"
                fill="currentColor"
                radius={[4, 4, 0, 0]}
                className="fill-primary"
                />
            </BarChart>
            </ResponsiveContainer>
        </CardContent>
    </Card>
  )
}
