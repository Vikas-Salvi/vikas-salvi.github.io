import { shuffle, sample, find, contains, each, includes, uniq } from 'underscore';

export const QuestionBank = {
    questions: [
        {
            id: 1,
            category: 'pictures',
            question: 'Please identify the image, and select one from the following options',
            imageUrl: 'images/animals/cat.jpg',
            answers: ['Cat']
        },
        {
            id: 2,
            category: 'pictures',
            question: 'Please identify the image, and select one from the following options',
            imageUrl: 'images/animals/tiger.jpg',
            answers: ['Tiger']
        },
        {
            id: 3,
            category: 'pictures',
            question: 'Please identify the image, and select one from the following options',
            imageUrl: 'images/animals/lion.jpg',
            answers: ['Lion']
        },
        {
            id: 4,
            category: 'pictures',
            question: 'Please identify the image, and select one from the following options',
            imageUrl: 'images/animals/leopard.jpg',
            answers: ['Leopard']
        },
        {
            id: 5,
            category: 'pictures',
            question: 'Please identify the image, and select one from the following options',
            imageUrl: 'images/animals/hippopotamus.jpg',
            answers: ['Hippopotamus']
        },
        {
            id: 6,
            category: 'pictures',
            question: 'Please identify the image, and select one from the following options',
            imageUrl: 'images/animals/elephant.jpg',
            answers: ['Elephant']
        },
        {
            id: 7,
            category: 'pictures',
            question: 'Please identify the image, and select one from the following options',
            imageUrl: 'images/animals/camel.jpg',
            answers: ['Camel']
        },
        {
            id: 8,
            category: 'pictures',
            question: 'Please identify the image, and select one from the following options',
            imageUrl: 'images/animals/rhino.jpg',
            answers: ['Rhino']
        },
        {
            id: 9,
            category: 'pictures',
            question: 'Please identify the image, and select one from the following options',
            imageUrl: 'images/animals/butterfly.jpg',
            answers: ['Butterfly']
        },
        {
            id: 10,
            category: 'pictures',
            question: 'Please identify the image, and select one from the following options',
            imageUrl: 'images/animals/goldfish.jpeg',
            answers: ['Goldfish']
        },
        {
            id: 22,
            category: 'pictures',
            question: 'Please identify the image, and select one from the following options',
            imageUrl: 'images/animals/dog.jpg',
            answers: ['Dog']
        },
        {
            id: 23,
            category: 'pictures',
            question: 'Please identify the image, and select one from the following options',
            imageUrl: 'images/animals/dolphin.jpg',
            answers: ['Dolphin']
        },
        {
            id: 24,
            category: 'pictures',
            question: 'Please identify the image, and select one from the following options',
            imageUrl: 'images/animals/starfish.jpg',
            answers: ['Starfish']
        },
        {
            id: 25,
            category: 'pictures',
            question: 'Please identify the image, and select one from the following options',
            imageUrl: 'images/animals/seahourse.jpg',
            answers: ['Seahourse']
        },
        {
            id: 26,
            category: 'pictures',
            question: 'Please identify the image, and select one from the following options',
            imageUrl: 'images/animals/mouse.jpg',
            answers: ['Mouse']
        },
        {
            id: 27,
            category: 'pictures',
            question: 'Please identify the image, and select one from the following options',
            imageUrl: 'images/animals/jellyfish.jpg',
            answers: ['Jelly fish']
        },
        {
            id: 28,
            category: 'pictures',
            question: 'Please identify the image, and select one from the following options',
            imageUrl: 'images/animals/whale.jpg',
            answers: ['Whale']
        },
        {
            id: 29,
            category: 'pictures',
            question: 'Please identify the image, and select one from the following options',
            imageUrl: 'images/animals/sealion.jpg',
            answers: ['Sealion']
        },
        {
            id: 30,
            category: 'pictures',
            question: 'Please identify the image, and select one from the following options',
            imageUrl: 'images/animals/dinosaur.jpg',
            answers: ['Dinosaur']
        },
        {
            id: 31,
            category: 'pictures',
            question: 'Please identify the image, and select one from the following options',
            imageUrl: 'images/animals/lizard.jpg',
            answers: ['Lizard']
        },
        {
            id: 9,
            category: 'maths',
            question: '3 + 3',
            imageUrl: '',
            answers: ['6']
        }
        ,
        {
            id: 10,
            category: 'maths',
            question: '7 + 3',
            imageUrl: '',
            answers: ['10']
        }
        ,
        {
            id: 11,
            category: 'maths',
            question: '6 - 6',
            imageUrl: '',
            answers: ['0']
        }
        ,
        {
            id: 12,
            category: 'maths',
            question: '10 - 7',
            imageUrl: '',
            answers: ['3']
        }
        ,
        {
            id: 13,
            category: 'maths',
            question: '12 + 7',
            imageUrl: '',
            answers: ['19']
        }
        ,
        {
            id: 14,
            category: 'maths',
            question: '4 + 7',
            imageUrl: '',
            answers: ['11']
        }
        ,
        {
            id: 15,
            category: 'maths',
            question: '11 - 4',
            imageUrl: '',
            answers: ['7']
        }
        ,
        {
            id: 16,
            category: 'maths',
            question: '9 + 3',
            imageUrl: '',
            answers: ['12']
        }
        ,
        {
            id: 17,
            category: 'maths',
            question: '8 - 7',
            imageUrl: '',
            answers: ['1']
        }
        ,
        {
            id: 18,
            category: 'maths',
            question: '6 + 7',
            imageUrl: '',
            answers: ['13']
        }
        ,
        {
            id: 19,
            category: 'maths',
            question: '7 - 2',
            imageUrl: '',
            answers: ['5']
        }
        ,
        {
            id: 20,
            category: 'maths',
            question: '9 - 5',
            imageUrl: '',
            answers: ['4']
        }
        ,
        {
            id: 21,
            category: 'maths',
            question: '4 + 4',
            imageUrl: '',
            answers: ['8']
        }
    ],
    getGameCategories: (questions) => {
        const categories = questions.reduce((p, c, i) => {
            return p.concat(c.category);
        }, []);
        const uniqcategories = uniq(categories);
        return {
            uniqcategories
        }
    },
    getQuestions: (selectedQuestions, questions, category) => {
        //debugger;
        const questionsByCategory = questions.filter((question) => question.category === category);
        const categories = questions.reduce((p, c, i) => {
            return p.concat(c.category);
        }, []);
        const allanswers = questionsByCategory.reduce((p, c, i) => {
            return p.concat(c.answers);
        }, []);
        const answers = shuffle(allanswers).splice(0, 4);
        const sampleAnswer = sample(answers, 1);
        const question = questionsByCategory.filter((question) => {
            return question.answers.some((answer) => {
                return answer === sampleAnswer[0]
            });
        });

        return {
            questions,
            questionsByCategory,
            answers,
            question
        }
    }

}