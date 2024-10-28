import { LineChart as LChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const LineChart = () => {
    const mathMarksData = [
        { name: "Sakib", math: 78, physics: 85, chemistry: 72 },
        { name: "Rabi", math: 85, physics: 88, chemistry: 75 },
        { name: "Ismail", math: 92, physics: 91, chemistry: 89 },
        { name: "Tania", math: 68, physics: 74, chemistry: 69 },
        { name: "Mitu", math: 74, physics: 79, chemistry: 77 },
        { name: "Nayeem", math: 81, physics: 83, chemistry: 80 },
        { name: "Rahim", math: 89, physics: 87, chemistry: 85 },
        { name: "Karim", math: 95, physics: 92, chemistry: 94 },
        { name: "Rina", math: 76, physics: 78, chemistry: 73 },
        { name: "Nila", math: 88, physics: 90, chemistry: 86 }
    ];
    

    return (
        <div>
            <h3>Math Marks Line Chart</h3>

            <ResponsiveContainer width="95%" height={400}>
                <LChart width={500} height={300} data={mathMarksData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                    <Line dataKey="math" stroke='red'></Line>
                    <Line dataKey={'physics'} stroke='blue'></Line>
                </LChart>
            </ResponsiveContainer>
        </div>

    );
};

export default LineChart;
