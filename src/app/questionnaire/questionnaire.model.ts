export interface Questionnaire {
  questionOneAnswer: number;
  questionTwoAnswer: number;
  questionThreeAnswer: number;
  questionFourAnswer: number;
  questionFiveAnswer: number;
  userId: string;
  imageId: string;
}

export class PostQuestionnaireDto {
  questionOneAnswer: number;
  questionTwoAnswer: number;
  questionThreeAnswer: number;
  questionFourAnswer: number;
  questionFiveAnswer: number;
  imageId: string;

  constructor({ answer1, answer2, answer3, answer4, answer5, imageId }) {
    this.questionOneAnswer = answer1;
    this.questionTwoAnswer = answer2;
    this.questionThreeAnswer = answer3;
    this.questionFourAnswer = answer4;
    this.questionFiveAnswer = answer5;
    this.imageId = imageId;
  }
}
