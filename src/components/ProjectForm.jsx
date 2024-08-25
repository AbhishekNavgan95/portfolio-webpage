import React, { useState } from 'react';
import { createProject, uploadImage } from '../config/appwrite';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { MdArrowBack } from "react-icons/md";

const ProjectForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
    const [images, setImages] = useState('');
    const [iamge, setImage] = useState('');
    const [githubUrl, setGithubUrl] = useState('');
    const [projectUrl, setProjectUrl] = useState('');
    const [response, setResponse] = useState('');
    const navigate = useNavigate()

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(URL.createObjectURL(file));
        setImages(e.target.files);
    };

    const resetForm = () => {
        setTitle('');
        setDescription('');
        setTags('');
        setImages('');
        setGithubUrl('');
        setProjectUrl('');
        setImage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const file = images[0];
            const imageUrl = await uploadImage(file);
            console.log("image url : ", imageUrl)

            // Step 2: Prepare the Project Data
            const projectData = {
                title,
                description,
                tags,
                imageUrl, // Array of image IDs from storage
                githubUrl,
                projectUrl,
            };

            // Step 3: Create the Project Document in Appwrite Databases
            const response = await createProject(projectData);
            if (response) {
                resetForm();
                setResponse('Project Created Successfully!')
            }
        } catch (e) {
            setResponse('Something went wrong!')
        }
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-10/12 md:w-6/12 xl:w-4/12'>
            {
                response && <p className='text-f-light text-center bg-accent-light py-1 rounded-lg'>{response}</p>
            }
            <div className='flex flex-col gap-1'>
                <label htmlFor="title">Title</label>
                <input
                    name='title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Project Title"
                    required
                    className="rounded-md bg-accent-light text-f-light placeholder:text-f-light font-sans font-semibold py-1 px-3 outline-none"
                />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="desc">Description</label>
                <textarea
                    name='desc'
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Project Description"
                    required
                    className="rounded-md bg-accent-light text-f-light placeholder:text-f-light font-sans font-semibold py-1 px-3 outline-none"
                />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="tags">Tags</label>
                <input
                    name='tags'
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="Tags (comma-separated)"
                    required
                    className="rounded-md bg-accent-light text-f-light placeholder:text-f-light font-sans font-semibold py-1 px-3 outline-none"
                />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="GithubUrl">Github Url</label>
                <input
                    name='GithubUrl'
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                    placeholder="Github Url"
                    required
                    className="rounded-md bg-accent-light text-f-light placeholder:text-f-light font-sans font-semibold py-1 px-3 outline-none"
                />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="projectUrl">Project Url</label>
                <input
                    name='projectUrl'
                    value={projectUrl}
                    onChange={(e) => setProjectUrl(e.target.value)}
                    placeholder="Project Url"
                    required
                    className="rounded-md bg-accent-light text-f-light placeholder:text-f-light font-sans font-semibold py-1 px-3 outline-none"
                />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="image">Select Images</label>
                {
                    iamge && <img src={iamge} alt="" className='rounded-lg border border-accent-light' />
                }
                <input
                    name='image'
                    type="file"
                    onChange={handleImageChange}
                    required
                    multiple
                />
            </div>
            <Button className={'w-full'} type={'submit'}>Submit</Button>
            <p onClick={() => navigate('/')} className='flex gap-3 hover:gap-5 items-center hover:text-f-light cursor-pointer transition-all duration-300 justify-center'><MdArrowBack />Back to Home</p>
        </form>
    );
};

export default ProjectForm;
