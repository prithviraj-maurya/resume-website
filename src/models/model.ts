export interface project {
    name: string;
    description: string;
    url: string;
    image: string;
}

export const projects: project[] = [
    {
        name: 'Age Group CLassification using Images',
        description: `An Age Group Classifier trained on custom images of 3 classes groups 
        Adults, Teenagers and Toddlers. Trained a custom Resnet9 model as well as a pretrained model
        for comparing results. Given an input image model can classify the age group pf people in the images
        with 78% accuracy`,
        url: 'https://console.paperspace.com/te7qp7xse/notebook/pr5gy5h8s',
        image: '/images/age-group-clf.jpg'
    },
    {
        name: 'Expenses App',
        description: `A React-D3 based webapp for data visualization of all expenses
        for the year and categroize the expenses into various categories like groceries etc. 
        A visualization tool to know what one spends on which category. Drag the expense bubble into 
        the catgeory and it gets linked to it. Color of the category grows darker as the expenses rise.
        Can add new categories and remove existing ones.`,
        url :'https://prithviraj-maurya.github.io/expenses-d3-react/',
        image: '/images/expenses.png'
    }
];