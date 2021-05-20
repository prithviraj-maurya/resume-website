export interface Article {
    title: string;
    summary: string;
    link: string;
}

export const articles: Article[] = [
    {
        title: 'Airbnb Amenities Detection',
        summary: `Model to detect Amenities from apartment images from Airbnb. Detecting amenities will help Airbnb 
        to prefill all the amenities in the upload form for the user and rate the Ad. Created a model to identify
        and highlight close to 200 amenities ie Swimming pool, sofa, fireplace etc.`,
        link: 'https://www.notion.so/Airbnb-Amenities-Detection-2020-5079c38d2d2b4ffc94d617272914cc01'
    },
    {
        title: 'TensorFlow Course 2021',
        summary: `Started with TensorFlow 2.0 from scratch, right from building a simple regression model
        to build a neural network from scratch all the way upto CNN and 
        completed two captstone projects as well as part of the course. Wrote a blog explaining all the steps
        and code examples for the same.`,
        link: 'https://www.notion.so/Tensorflow-Course-2021-4efa17ac70f44917ac2f8716667a3153'
    },
    {
        title: 'Pytorch Course 2021',
        summary: `Replicated the TensorFlow 2.0 course in Pytorch, followed all the same steps but using
        Pytorch framework and modules. Compared the results of these two frameworks and compared the ease
        of writing code, learning curve for both frameworks and utility functions.`,
        link: 'https://www.notion.so/DLwPT-Deep-Learning-with-Pytorch-a1068de76f31404eb8198f864bd36ef4'
    }
]