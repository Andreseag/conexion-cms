/**
 * notica controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::notica.notica', ({ strapi }) =>  ({
  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.db.query('api::notica.notica').findOne({ 
      select: ['title', 'description', 'date', 'author', 'body', 'discharges', 'slug'],
      where: { slug: id },
      populate: true
    });
    console.log('entity', entity)
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  }  
}));
