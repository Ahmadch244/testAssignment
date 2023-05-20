const { Model } = require('objection');

class UserProfile extends Model {
  static get tableName() {
    return 'user_profile';
  }

  static get relationMappings() {
    const TenantProfile = require('./TenantProfile');

    return {
      tenantProfile: {
        relation: Model.BelongsToOneRelation,
        modelClass: TenantProfile,
        join: {
          from: 'user_profile.tenant_id',
          to: 'tenant_profile.tenant_id',
        },
      },
    };
  }
}

class TenantProfile extends Model {
  static get tableName() {
    return 'tenant_profile';
  }
}

module.exports = { UserProfile, TenantProfile };
