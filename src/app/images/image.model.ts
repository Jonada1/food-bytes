export interface Color {
    rgb: [string, string, string];
    population: number;
}

export interface Image {
    text: string;
    url: string;
    colors: Color[];
}
