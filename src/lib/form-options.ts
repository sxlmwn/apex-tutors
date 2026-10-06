/**
 * Centralized form options shared between /signup and SpringModal.
 * Keeps option lists in sync so neither form drifts from server allow-lists in src/lib/leads/validation.ts.
 */

export interface FormOption {
  value: string;
  label: string;
}

export const CITY_OPTIONS: readonly FormOption[] = [
  { value: "Lahore", label: "Lahore" },
  { value: "Karachi", label: "Karachi" },
  { value: "Islamabad", label: "Islamabad" },
  { value: "Rawalpindi", label: "Rawalpindi" },
  { value: "Multan", label: "Multan" },
  { value: "Faisalabad", label: "Faisalabad" },
  { value: "Bahawalpur", label: "Bahawalpur" },
  { value: "Other", label: "Other City (Online)" },
] as const;

export const GRADE_OPTIONS: readonly FormOption[] = [
  { value: "Primary", label: "Primary & Middle (Grades 1-8)" },
  { value: "O Level", label: "O Level / IGCSE (Cambridge / Edexcel)" },
  { value: "A Level", label: "A Level (AS & A2)" },
  { value: "FSc Pre-Medical", label: "FSc Pre-Medical (Part 1/2)" },
  { value: "FSc Pre-Engineering", label: "FSc Pre-Engineering (Part 1/2)" },
  { value: "ICS", label: "ICS Computer Science" },
  { value: "Matric Science 10th", label: "Matric Science (10th)" },
  { value: "Matric Science 9th", label: "Matric Science (9th)" },
  { value: "Matric Arts/General", label: "Matric Arts / General" },
] as const;

export const BOARD_OPTIONS: readonly FormOption[] = [
  { value: "Cambridge (CAIE / Edexcel)", label: "Cambridge (CAIE / Edexcel)" },
  { value: "Primary School Curriculum", label: "Primary School Curriculum" },
  { value: "Federal Board (FBISE)", label: "Federal Board (FBISE)" },
  { value: "Punjab Board (BISE Lahore)", label: "Punjab Board (BISE Lahore)" },
  { value: "BISE Rawalpindi", label: "BISE Rawalpindi" },
  { value: "BISE Multan", label: "BISE Multan" },
  { value: "BISE Faisalabad", label: "BISE Faisalabad" },
  { value: "BISE Bahawalpur", label: "BISE Bahawalpur" },
  { value: "Sindh Board (BSEK/BIEK)", label: "Sindh Board (BSEK / BIEK)" },
  { value: "AKU-EB", label: "Aga Khan Board (AKU-EB)" },
] as const;

export const STUDENT_MODE_OPTIONS: readonly string[] = [
  "Online (1-on-1 Interactive)",
  "In-Person Physical (Home Visit)",
] as const;
