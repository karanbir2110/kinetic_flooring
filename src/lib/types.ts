export type QuestionType =
  | "text"
  | "email"
  | "phone"
  | "textarea"
  | "select"      // dropdown
  | "radio"       // tap-to-select, single choice
  | "multiselect" // tap-to-select, several choices (see maxSelect)
  | "checkbox"    // single tick box
  | "rating";

/** Show this question only when another question has one of these answers. */
export type ShowIf = {
  questionId: string;
  equals: string[];
};

export type Question = {
  id: string;
  label: string;
  type: QuestionType;
  placeholder?: string;
  /** Used by select, radio and multiselect */
  options?: string[];
  /** multiselect only: max number of options the visitor may pick */
  maxSelect?: number;
  /** Conditional display. Omit to always show. */
  showIf?: ShowIf;
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
