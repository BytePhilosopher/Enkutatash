import { QuizQuestion } from "@/types/quiz";

export const QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    question: "It's Enkutatash morning. Adey Abeba everywhere. How are you feeling?",
    options: [
      {
        id: "q1-a",
        text: "Same me, new calendar.",
        personality: "procrastinator",
        easterEgg: "We respect the honesty.",
      },
      {
        id: "q1-b",
        text: "New year, new me. I already made a spreadsheet.",
        personality: "academic",
      },
      {
        id: "q1-c",
        text: "This is the year I finally start that business.",
        personality: "millionaire",
      },
      {
        id: "q1-d",
        text: "Manifesting a one-way ticket out of here. ✈️",
        personality: "leaving",
      },
      {
        id: "q1-e",
        text: "I just want to make it to Meskel in one piece.",
        personality: "survivor",
      },
    ],
  },
  {
    id: "q2",
    question: "Be honest — your 2019 resolution list looks like:",
    options: [
      {
        id: "q2-a",
        text: "Step 1: Get rich. Step 2: TBD.",
        personality: "millionaire",
      },
      {
        id: "q2-b",
        text: "Move abroad. That's it. That's the whole list.",
        personality: "leaving",
      },
      {
        id: "q2-c",
        text: "Survive. Repeat.",
        personality: "survivor",
      },
      {
        id: "q2-d",
        text: "One item, copy-pasted from last year's list.",
        personality: "procrastinator",
      },
      {
        id: "q2-e",
        text: "12 pages, color-coded, with deadlines.",
        personality: "academic",
      },
    ],
  },
  {
    id: "q3",
    question: "Someone invites you to a 6am run to start the year right. You say:",
    options: [
      {
        id: "q3-a",
        text: "Let me rest first.",
        personality: "procrastinator",
        easterEgg: "Finally. Someone honest.",
      },
      {
        id: "q3-b",
        text: "Already up, already ran 10k, already showered.",
        personality: "academic",
      },
      {
        id: "q3-c",
        text: "Can't, I'm calculating compound interest.",
        personality: "millionaire",
      },
      {
        id: "q3-d",
        text: "6am? I'll be running through immigration soon enough.",
        personality: "leaving",
      },
      {
        id: "q3-e",
        text: "6am is when I finally fall asleep.",
        personality: "survivor",
      },
    ],
  },
  {
    id: "q4",
    question: "Your bank balance situation going into the new year:",
    options: [
      {
        id: "q4-a",
        text: "What balance.",
        personality: "survivor",
      },
      {
        id: "q4-b",
        text: "Ask me in Tikimt. I'm avoiding my banking app.",
        personality: "procrastinator",
      },
      {
        id: "q4-c",
        text: "I have a budget spreadsheet with 6 tabs.",
        personality: "academic",
      },
      {
        id: "q4-d",
        text: "Down to the last birr, but the vision is there.",
        personality: "millionaire",
      },
      {
        id: "q4-e",
        text: "Saving in dollars. Just in case.",
        personality: "leaving",
      },
    ],
  },
  {
    id: "q5",
    question: "By the time Meskel rolls around, your resolutions are:",
    options: [
      {
        id: "q5-a",
        text: "97% complete, with receipts.",
        personality: "academic",
      },
      {
        id: "q5-b",
        text: "Replaced by a completely new business idea.",
        personality: "millionaire",
      },
      {
        id: "q5-c",
        text: "I'm leaving.",
        personality: "leaving",
        easterEgg: "Your suitcase has been packed since 2019.",
      },
      {
        id: "q5-d",
        text: "What resolutions.",
        personality: "survivor",
      },
      {
        id: "q5-e",
        text: "Postponed to next Enkutatash.",
        personality: "procrastinator",
      },
    ],
  },
  {
    id: "q6",
    question: "How much of your list will you actually finish this year? Be honest.",
    options: [
      {
        id: "q6-a",
        text: "100%, obviously.",
        personality: "academic",
        easterEgg: "Please provide evidence. 😂",
      },
      {
        id: "q6-b",
        text: "0%, but I'll be “busy building.”",
        personality: "millionaire",
      },
      {
        id: "q6-c",
        text: "N/A, I won't be here to find out.",
        personality: "leaving",
      },
      {
        id: "q6-d",
        text: "Finishing this quiz is enough for today.",
        personality: "survivor",
      },
      {
        id: "q6-e",
        text: "25%, and I'll round up.",
        personality: "procrastinator",
      },
    ],
  },
];
