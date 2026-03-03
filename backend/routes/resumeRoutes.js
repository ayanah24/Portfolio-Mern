import express from 'express';
import Resume from '../models/Resume.js';

const router = express.Router();

// @route   GET /api/resume
// @desc    Get the current resume URL
// @access  Public
router.get('/', async (req, res) => {
    try {
        const resume = await Resume.findOne();
        if (!resume) {
            return res.status(404).json({ message: 'Resume not found' });
        }
        res.json(resume);
    } catch (error) {
        res.status(500).json({ message: 'Server error fetching resume', error: error.message });
    }
});

// @route   PUT /api/resume
// @desc    Create or Update the resume URL
// @access  Public (for now) Note: add admin middleware later if you have authentication
router.put('/', async (req, res) => {
    try {
        const { url } = req.body;

        if (!url) {
            return res.status(400).json({ message: 'Please provide a valid URL' });
        }

        // Since we only ever want ONE resume link globally, we use findOne()
        // If it exists, we update it. If it doesn't, we create the first one.
        let resume = await Resume.findOne();

        if (resume) {
            resume.resumeUrl = url;
            await resume.save();
        } else {
            resume = await Resume.create({ resumeUrl: url });
        }

        res.status(200).json({ message: 'Resume URL updated successfully!', resume });
    } catch (error) {
        res.status(500).json({ message: 'Server error updating resume', error: error.message });
    }
});

export default router;
