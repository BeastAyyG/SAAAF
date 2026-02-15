export const MOCK_REPORTS = [
    {
        id: "demo-1",
        title: "Large Pothole causing traffic",
        description: "Deep pothole on main road (MG Road). Risk of accidents.",
        category: "Pothole",
        severity_score: 7,
        status: "open",
        latitude: 28.6139,
        longitude: 77.2090, // Connaught Place
        image_url: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=800",
        created_at: new Date().toISOString(),
        user_id: "demo-user",
        upvotes: 12
    },
    {
        id: "demo-2",
        title: "Garbage Overflow near park",
        description: "Bins are full and waste is spilling onto the street.",
        category: "Garbage",
        severity_score: 5,
        status: "in_progress",
        latitude: 28.6129,
        longitude: 77.2100,
        image_url: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800",
        created_at: new Date(Date.now() - 3600000).toISOString(),
        user_id: "demo-user",
        upvotes: 45
    },
    {
        id: "demo-3",
        title: "Broken Streetlight",
        description: "Light pole damaged, area is very dark at night.",
        category: "Streetlight",
        severity_score: 4,
        status: "open",
        latitude: 28.6145,
        longitude: 77.2085,
        image_url: "https://images.unsplash.com/photo-1555617981-d5a4f5a2b66d?auto=format&fit=crop&q=80&w=800",
        created_at: new Date(Date.now() - 7200000).toISOString(),
        user_id: "demo-user",
        upvotes: 8
    },
    {
        id: "demo-4",
        title: "Fire Hazard - Exposed Wiring",
        description: "Live wires hanging low near bus stop.",
        category: "Fire",
        severity_score: 9, // Critical
        status: "open",
        latitude: 28.6150,
        longitude: 77.2110,
        image_url: "https://images.unsplash.com/photo-1605218427360-36390f85522b?auto=format&fit=crop&q=80&w=800",
        created_at: new Date(Date.now() - 1800000).toISOString(),
        user_id: "demo-user",
        upvotes: 150
    },
    {
        id: "demo-5",
        title: "Water Leakage",
        description: "Main pipe burst, water flooding street.",
        category: "Water",
        severity_score: 6,
        status: "resolved",
        latitude: 28.6135,
        longitude: 77.2095,
        image_url: "https://images.unsplash.com/photo-1584699863268-8094a4c4ea21?auto=format&fit=crop&q=80&w=800",
        created_at: new Date(Date.now() - 86400000).toISOString(),
        user_id: "demo-user",
        upvotes: 30
    }
];

export const MOCK_UPDATES = [
    {
        id: "update-1",
        report_id: "demo-2",
        officer_id: "officer-x",
        image_url: "https://images.unsplash.com/photo-1595246140625-573b715d1128?auto=format&fit=crop&q=80&w=800",
        description: "Cleanup crew dispatched. Removing waste now.",
        type: "progress",
        created_at: new Date().toISOString()
    }
];
