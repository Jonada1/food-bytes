import { Questionnaire } from '../questionnaire/questionnaire.model';

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

export interface ImageWithQuestionnaire extends Image {
  questionnaire: Questionnaire;
}
