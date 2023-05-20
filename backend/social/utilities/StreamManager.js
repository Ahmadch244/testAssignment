const { User_Profile, Tenant_Profile } = require('../model/profileModal');

const processMessage = async (kafkaMessage) => {
  try {
    const message = JSON.parse(kafkaMessage.value.toString());

    if (message.event_name === 'tenant_created') {
      const { id, name, address, city, state, country, zip_code, phone, web_url } = message.properties;
      
      // Insert the tenant profile into the database
      await Tenant_Profile.query().insert({
        tenant_id: id,
        tenant_name: name,
        address: JSON.stringify({ address, city, state, country, zip_code }),
        city,
        state,
        country,
        zip_code,
        phone,
        web_url
      });
    }
    else if (message.event_name === 'user_created') {
      const { id, first_name, last_name, department, designation, tenant_id, image_url, city, country, bio, social_links, employee_id } = message.properties;
      
      // Insert the user profile into the database
      await User_Profile.query().insert({
        user_id: id,
        first_name,
        last_name,
        department,
        designation,
        tenant_id,
        image_url,
        city,
        country,
        bio,
        employee_id,
        social_links: JSON.stringify(social_links)
      });
    }
    
    console.log('Processed message:', message);
  } catch (error) {
    console.error('Error processing message:', error);
  }
};

module.exports = { processMessage };

