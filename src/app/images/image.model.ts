export interface Color {
    rgb: [string, string, string];
    population: number;
}

export interface Image {
    id: string;
    text: string;
    url: string;
    colors: Color[];
}
