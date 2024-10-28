import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend, Tooltip } from 'recharts';

const ManChart = () => {
    const playerPerformanceData = [
        { name: "Messi", goals: 30, assists: 20, tackles: 5 },
        { name: "Ronaldo", goals: 28, assists: 18, tackles: 8 },
        { name: "Neymar", goals: 25, assists: 22, tackles: 4 },
        { name: "Mbappe", goals: 27, assists: 15, tackles: 10 },
        { name: "Lewandowski", goals: 35, assists: 10, tackles: 7 },
        { name: "De Bruyne", goals: 15, assists: 25, tackles: 12 },
        { name: "Salah", goals: 26, assists: 16, tackles: 9 },
        { name: "Mane", goals: 20, assists: 18, tackles: 6 },
        { name: "Rashford", goals: 18, assists: 14, tackles: 11 },
        { name: "Kane", goals: 22, assists: 19, tackles: 5 }
    ];
    
    return (
        <div>
            <h3>Football Player Performance Chart</h3>
            <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={playerPerformanceData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis angle={30} domain={[0, 40]} />
                <Tooltip />
                <Legend />
                <Radar name="Goals" dataKey="goals" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name="Assists" dataKey="assists" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Radar name="Tackles" dataKey="tackles" stroke="#ffc658" fill="#ffc658" fillOpacity={0.6} />
            </RadarChart>
        </div>
    );
};

export default ManChart;
