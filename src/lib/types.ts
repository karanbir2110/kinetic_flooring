export type QuestionType = "text" | "email" | "phone" | "textarea" | "select" | "rating";

export type Question = {
  id: string;
  label: string;
  type: QuestionType;
  placeholder?: string;
  /** Only used when type === "select" */
  options?: string[];
  required: boolean;
  active: boolean;
  order: number;
};

export type Answer = {
  questionId: string;
  label: string; // snapshot of the question label at submission time
  value: string;
};

export type PartnerResponse = {
  id: string;
  submittedAt: string; // ISO date
  answers: Answer[];
};
