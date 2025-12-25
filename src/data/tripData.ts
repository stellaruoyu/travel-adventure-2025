
export interface Point {
    id: string;
    name: string;
    lat: number;
    lng: number;
    description: string;
    day: number;
}

export interface DailyPlan {
    day: number;
    title: string;
    date: string;
    activities: string[];
    stay: string;
    color: string;
}

export const tripPoints: Point[] = [
    { id: 'phoenix', name: 'Phoenix (Home)', lat: 33.4484, lng: -112.0740, description: 'Start of our adventure!', day: 0 },
    { id: 'lajolla', name: 'La Jolla Cove', lat: 32.8504, lng: -117.2731, description: 'Sea lions, seals, and sea birds!', day: 1 },
    { id: 'sandiego', name: 'San Diego', lat: 32.7157, lng: -117.1611, description: 'Our first night stay.', day: 1 },
    { id: 'sdzoo', name: 'San Diego Zoo', lat: 32.7353, lng: -117.1490, description: 'Giant Pandas, Kangaroos, and Elephants!', day: 2 },
    { id: 'palmsprings', name: 'Palm Springs', lat: 33.8303, lng: -116.5453, description: 'Desert resort town with giant statues.', day: 2 },
    { id: 'marilyn', name: 'Marilyn Monroe Statue', lat: 33.8246, lng: -116.5456, description: 'She’s huge!', day: 3 },
    { id: 'joshuatree', name: 'Joshua Tree NP', lat: 33.8734, lng: -115.9010, description: 'Giant rocks and funny trees.', day: 3 },
    { id: 'keysview', name: 'Keys View', lat: 33.9271, lng: -116.1668, description: 'Amazing sunset view.', day: 3 },
    { id: 'tramway', name: 'Aerial Tramway', lat: 33.8372, lng: -116.6140, description: 'Ride up to the snow!', day: 4 },
    { id: 'oasis', name: 'Indian Canyons', lat: 33.7451, lng: -116.5398, description: 'Hidden oasis with palm trees.', day: 4 },
    { id: 'salvation', name: 'Salvation Mountain', lat: 33.2539, lng: -115.4740, description: 'A painted mountain of colors!', day: 4 },
];

export const dailyPlans: DailyPlan[] = [
    {
        day: 1,
        title: "Hello, Sea Lions!",
        date: "Sunday, Dec 28",
        activities: ["Drive from Phoenix to San Diego", "Visit La Jolla Cove (Sea Lions!)", "Check into hotel"],
        stay: "San Diego",
        color: "bg-kid-blue"
    },
    {
        day: 2,
        title: "Zoo & Desert Drive",
        date: "Monday, Dec 29",
        activities: ["San Diego Zoo (Giant Pandas first!)", "See Kangaroos & Elephants", "Ride Skyfari", "Drive to Palm Springs"],
        stay: "Palm Springs",
        color: "bg-kid-green"
    },
    {
        day: 3,
        title: "Movie Star & Desert Rocks",
        date: "Tuesday, Dec 30",
        activities: ["Walk around Palm Springs", "See Marilyn Monroe Statue", "Joshua Tree National Park", "Climb Jumbo Rocks", "Sunset at Keys View"],
        stay: "Palm Springs / Joshua Tree",
        color: "bg-kid-yellow"
    },
    {
        day: 4,
        title: "Snow or Oasis & Art Hill",
        date: "Wednesday, Dec 31",
        activities: ["Choose: Aerial Tramway OR Indian Canyons Oasis", "Drive to Salvation Mountain", "Drive back to Phoenix"],
        stay: "Home Sweet Home",
        color: "bg-kid-pink" // or a mix
    }
];

export const journalCategories = [
    { id: 'terrain', label: 'Land/Hills', prompt: 'Is the ground flat, hills, or mountains?' },
    { id: 'weather', label: 'Weather', prompt: 'Sunny, cloudy, windy? Warm or cold?' },
    { id: 'population', label: 'People & Towns', prompt: 'Lots of houses or empty land?' },
    { id: 'landuse', label: 'Land Use', prompt: 'Farms, factories, or parks?' },
    { id: 'industry', label: 'Things Made', prompt: 'Trucks, stores, or crops?' },
    { id: 'landmarks', label: 'Fun Places', prompt: 'Any cool statues or buildings?' },
    { id: 'other', label: 'Other Fun Stuff', prompt: 'Animals, funny signs?' },
];
