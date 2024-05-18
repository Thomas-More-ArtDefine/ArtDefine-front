export interface FeedbackItemModel {
  id: string;
  question: string;
  type: FeedbackStarRatingModel | FeedbackRatioModel | FeedbackOpenModel;
}

export interface FeedbackStarRatingModel {
  title: string;
  empty: boolean;
  starAmount?: number;
}

export interface FeedbackRatioModel {
  title: string;
  empty: boolean;
  options: string[];
  active?: number;
}

export interface FeedbackOpenModel {
  title: string;
  empty: boolean;
  text?: string;
}
