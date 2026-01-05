
export interface FeaturedProjectCard {
    title: string;
    text: string;
    iconName: 'LuCalendar' | 'LuMonitor' | 'LuPenTool' | 'LuTrendingUp';
}

export const FEATURED_PROJECT_CARDS: FeaturedProjectCard[] = [
    {
        iconName: 'LuCalendar',
        title: "International Design",
        text: "Crafted by a globally renowned architectural firm for a world class commercial experience."
    },
    {
        iconName: 'LuMonitor',
        title: "Prime Location",
        text: "Strategically positioned on Main GT Road for maximum visibility and commercial value."
    },
    {
        iconName: 'LuPenTool',
        title: "Engineering Excellence",
        text: "Developed with CM Holdings' expert planning and engineering teams for superior build quality."
    },
    {
        iconName: 'LuTrendingUp',
        title: "Investment Growth",
        text: "Designed to deliver long-term commercial returns and high-value business opportunities."
    }
];
