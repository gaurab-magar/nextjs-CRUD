export const data = [
    {
        id: 1,
        title: 'Networking for introverts',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quo voluptates repudi',
        location: 'kathmandu',
        date: '2021-05-30',
        image: 'image1.jpg',
        isFeatured: true,
    },
    {
        id: 2,
        title: "The Art of Writing",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nesciunt ea iure fugiat explicabo!',
        location: 'New York City',
        date: '2021-06-1',
        image:'image2.jpg',
        isFeatured: false,
    },
    {
        id: 3,
        title: 'Design Thinking Workshop',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nihil1',
        location: 'London',
        date: '2021-07-12',
        image: 'image3.jpg',
        isFeatured: true
    },
    {
        id:4,
        title: 'Coding Bootcamp',
        description:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nihil2',
        location: 'Banglore',
        date: '2021-08-19',
        image:  'image4.jpg',
        
        isFeatured: false
    },
    {
        id:5,
        title:"Mindfulness Meditation",
        description: 'This is a very long text that will not fit in one line and should wrap around to the',
        location: 'Mountain View',
        date: '2021-09-27',
        image: 'image5.jpg',
        isFeatured: true
    },
    {
        id: 6,
        title: 'Web Development Course',
        description: 'i dont have any thing to say about it and donthave any avot the last update nother thn last thing that ui ever was',
        location: 'Paris',
        date: '2021-11-15',
        image: 'image6.jpg',
        isFeatured: true
    }
]

export function getFeaturedEvents(){
    return data.filter(event => event.isFeatured === true);
}