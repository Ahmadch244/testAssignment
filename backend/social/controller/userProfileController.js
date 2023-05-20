// Import the models for user_profile and tenant_profile
const { UserProfile } = require('../model/profileModal.js');


// POST - Add data to the user_profile table
const createUserProfile = async (req,res)=>{

    try {
        const userProfileData = req.body;
        const userProfile = await UserProfile.query().insert(userProfileData);
        res.status(201).json(userProfile);
        } catch (error) {
        res.status(500).json({ error: 'Failed to add user profile.' });
        }
};

// GET - Get all data from the user_profile table
const getAllUserprofile = async (req,res)=>{
   
    try {
        const userProfiles = await UserProfile.query();
        res.json(userProfiles);
      } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve user profiles.' });
      }    
}

// GET - Get a specific record from the user_profile table based on ID
const  getUserprofileById= async (req,res)=>{

    try {
        const userId = req.params.id;
        const userProfile = await UserProfile.query().findById(userId);
        if (!userProfile) {
          res.status(404).json({ error: 'User profile not found.' });
        } else {
          res.json(userProfile);
        }
      } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve user profile.' });
      }
}

// DELETE - Delete a specific record from the user_profile table based on ID

const  deleteUserProfile= async (req,res)=>{

    try {
        const userId = req.params.id;
        const deletedCount = await UserProfile.query().deleteById(userId);
        if (deletedCount === 0) {
          res.status(404).json({ error: 'User profile not found.' });
        } else {
          res.sendStatus(204);
        }
      } catch (error) {
        res.status(500).json({ error: 'Failed to delete user profile.' });
      }
}

// PATCH - Update a specific record in the user_profile table based on ID
const updateUserProfile = async (req, res) => {

    try {
        const userId = req.params.id;
        const updatedData = req.body;
        const updatedProfile = await UserProfile.query().patchAndFetchById(userId, updatedData);
        if (!updatedProfile) {
          res.status(404).json({ error: 'User profile not found.' });
        } else {
          res.json(updatedProfile);
        }
      } catch (error) {
        res.status(500).json({ error: 'Failed to update user profile.' });
      }
  };
  
module.exports = {getAllUserprofile, createUserProfile, getUserprofileById, deleteUserProfile, updateUserProfile};