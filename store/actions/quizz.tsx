export const CREATE_QUIZZ = 'CREATE_QUIZZ';

export const createQuizz = (themeId: string, numberOfQuestions: number|null) => {
    return { 
        type: CREATE_QUIZZ, 
        theme: themeId,
        questionsNumber: numberOfQuestions
    };
};