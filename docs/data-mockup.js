// docs/data-mockup.js

/**
 * Mockup data for Bucket List Tracker
 * This file contains example data structures for the bucket list items.
 */

export const bucketListMockup = [
    {
        id: 1,
        name: "Travel Plans",
        items: [
            {
                id: 1,
                name: "Visit Paris",
                description: "See the Eiffel Tower and visit the Louvre.",
                completed: false
            },
            {
                id: 2,
                name: "Hike the Inca Trail",
                description: "A four-day hike to Machu Picchu.",
                completed: false
            },
            // Add more items as needed...
        ]
    },
    {
        id: 2,
        name: "Career Goals",
        items: [
            {
                id: 1,
                name: "Learn React",
                description: "Complete an online course in React development.",
                completed: true
            },
            {
                id: 2,
                name: "Contribute to Open Source",
                description: "Make a meaningful contribution to an open-source project.",
                completed: false
            },
            // Add more items as needed...
        ]
    },
    // Add more lists as needed...
];

export default bucketListMockup;
