const { TenantProfile } = require('../model/profileModal');


// Add data to the tenant_profile table
const createTenantProfile = async (req, res) => {
  try {
    const tenantProfileData = req.body;
    const tenantProfile = await TenantProfile.query().insert(tenantProfileData);
    res.status(201).json(tenantProfile);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add tenant profile.' });
  }
};

// Get all data from the tenant_profile table
const getAllTenantProfile = async (req, res) => {
  try {
    const tenantProfiles = await TenantProfile.query();
    res.json(tenantProfiles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve tenant profiles.' });
  }
};

// Get a specific record from the tenant_profile table by ID
const getTenantProfileById = async (req, res) => {
  try {
    const tenantId = req.params.id;
    const tenantProfile = await TenantProfile.query().findById(tenantId);
    if (!tenantProfile) {
      res.status(404).json({ error: 'Tenant profile not found.' });
    } else {
      res.json(tenantProfile);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve tenant profile.' });
  }
};

// Delete a specific record from the tenant_profile table by ID
const deleteTenantProfile = async (req, res) => {
  try {
    const tenantId = req.params.id;
    const deletedCount = await TenantProfile.query().deleteById(tenantId);
    if (deletedCount === 0) {
      res.status(404).json({ error: 'Tenant profile not found.' });
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete tenant profile.' });
  }
};

// Alter a specific record in the tenant_profile table by ID
const updateTenantProfile = async (req, res) => {
  try {
    const tenantId = req.params.id;
    const updatedData = req.body;
    const updatedProfile = await TenantProfile.query().patchAndFetchById(tenantId, updatedData);
    if (!updatedProfile) {
      res.status(404).json({ error: 'Tenant profile not found.' });
    } else {
      res.json(updatedProfile);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update tenant profile.' });
  }
};

module.exports = {createTenantProfile, getAllTenantProfile, getTenantProfileById, deleteTenantProfile, updateTenantProfile}