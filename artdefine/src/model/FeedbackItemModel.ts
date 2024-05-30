export interface FeedbackItemModel {
  id: string;
  question: string;
  type: FeedbackStarRatingModel | FeedbackRatioModel | FeedbackOpenModel;
}

export interface FeedbackStarRatingModel {
    type: string;
  title: string;
  //empty: boolean;
  starAmount?: number;
}

export interface FeedbackRatioModel {
    type: string;
  title: string;
  //empty: boolean;
  content: string[];
}

export interface FeedbackOpenModel {
    type: string;
  title: string;
  //empty: boolean;
  text?: string;
}
