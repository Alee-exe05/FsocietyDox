"use client"

import React, { useState, useEffect } from "react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

const initialData = [
    { name: "Jan", users: 0 },
    { name: "Feb", users: 0 },
    { name: "Mar", users: 0 },
    { name: "Apr", users: 0 },
    { name: "May", users: 0 },
    { name: "Jun", users: 0 },
    { name: "Jul", users: 0 },
    { name: "Aug", users: 0 },
    { name: "Sep", users: 0 },
    { name: "Oct", users: 0 },
    { name: "Nov", users: 0 },
    { name: "Dec", users: 0 },
];

export function UserActivityChart() {
    const { dictionary } = useLanguage();
    const { chart } = dictionary.info_users;
    const [data, setData] = useState(initialData);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isMounted) {
            const generatedData = initialData.map(item => ({
                ...item,
                users: Math.floor(Math.random() * 50) + 10
            }));
            setData(generatedData);
        }
    }, [isMounted]);

    if (!isMounted) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">{chart.title}</CardTitle>
                    <CardDescription>{chart.description}</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center">
                    <p>Loading chart...</p>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">{chart.title}</CardTitle>
                <CardDescription>{chart.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
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
                            tickFormatter={(value) => `${value}`}
                        />
                        <Tooltip
                            contentStyle={{
                                background: "hsl(var(--background))",
                                border: "1px solid hsl(var(--border))",
                                borderRadius: "var(--radius)",
                            }}
                        />
                        <Legend />
                        <Bar dataKey="users" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} name={chart.legend} />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}
