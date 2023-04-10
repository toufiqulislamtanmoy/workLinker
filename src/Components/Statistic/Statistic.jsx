import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Cell, Label, ResponsiveContainer } from 'recharts';

const data = [
    { assignment: 1, mark: 60, },
    { assignment: 2, mark: 57 },
    { assignment: 3, mark: 29},
    { assignment: 4, mark: 60},
    { assignment: 5, mark: 60},
    { assignment: 6, mark: 60},
    { assignment: 7, mark: 60},
    { assignment: 8, mark: 60},
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'cyan','green'];

const Statistic = () => {
    return (
        <div className='flex flex-col items-center justify-center h-[100vh]'>
            <h2 className='text-center text-4xl text-blue-500 font-bold mb-5'>Student Statistic</h2>
            <ResponsiveContainer width="70%" height="70%">
                <ScatterChart
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid />
                    <XAxis type="number" dataKey="assignment" interval={0}>
                        <Label value="Assignment" offset={-5} position="insideBottom" />
                    </XAxis>
                    <YAxis type="number" dataKey="mark">
                        <Label angle={-90} value="Marks" position="insideLeft" />
                    </YAxis>
                    <Tooltip cursor={{ strokeDasharray: '5 5' }} />
                    <Scatter name="A school" data={data} fill="#8884d8">
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Scatter>
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistic;
