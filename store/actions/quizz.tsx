export const CREATE_QUIZZ = 'CREATE_QUIZZ';
export const CREATE_THEME = 'CREATE_THEME';

export const createQuizz = (themeId: string, numberOfQuestions: number|null) => {
    return { 
        type: CREATE_QUIZZ, 
        theme: themeId,
        questionsNumber: numberOfQuestions
    };
};

export const createTheme = (themeName: string) => {
    return { 
        type: CREATE_THEME, 
        name: themeName,
    };
};