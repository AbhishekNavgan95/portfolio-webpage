import { Client, Databases, Storage } from 'appwrite';

// Initialize Appwrite Client
const client = new Client()
    .setEndpoint(import.meta.env.VITE_REACT_APP_APPWRITE_ENDPOINT) // Your Appwrite endpoint
    .setProject(import.meta.env.VITE_REACT_APP_APPWRITE_PROJECT_ID); // Your Appwrite project ID

const databases = new Databases(client);
const storage = new Storage(client);

// Function to upload image to Appwrite Storage
export const uploadImage = async (file) => {
    try {
        const response = await storage.createFile(import.meta.env.VITE_BUCKET_ID, 'unique()', file);
        return response.$id; // Return the file ID to store in the database
    } catch (error) {
        console.error('Failed to upload image:', error);``
        throw error;
    }
};

// Function to create a project in Appwrite Databases
export const createProject = async (projectData) => {
    try {
        const response = await databases.createDocument(
            import.meta.env.VITE_DATABASE_ID, // Replace with your actual database ID
            import.meta.env.VITE_COLLECTION_ID, // Replace with your actual collection ID
            'unique()', 
            projectData
        );
        return response;
    } catch (error) {
        console.error('Failed to create project:', error);
        throw error;
    }
};

// Function to get all projects from Appwrite Databases
export const getProjects = async () => {
    try {
        const response = await databases.listDocuments(
            import.meta.env.VITE_DATABASE_ID, // Replace with your actual database ID
            import.meta.env.VITE_COLLECTION_ID // Replace with your actual collection ID
        );
        return response.documents;
    } catch (error) {
        console.error('Failed to fetch projects:', error);
        return [];
    }
};

export const getImageUrl = (fileId) => {
    return storage.getFilePreview(import.meta.env.VITE_BUCKET_ID, fileId);
}

export default client;
